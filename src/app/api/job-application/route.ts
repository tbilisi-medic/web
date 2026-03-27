import { prisma } from '@/lib/prisma';
import { supabase } from '@/lib/supabase-storage';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File;
    const jobId = formData.get('jobId') as string;
    const jobTitle = formData.get('jobTitle') as string;

    if (!file || !jobId || !jobTitle) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 },
      );
    }

    const allowedTypes = [
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    ];

    if (!allowedTypes.includes(file.type)) {
      return NextResponse.json(
        { error: 'Only PDF and Word documents are allowed' },
        { status: 400 },
      );
    }

    const fileExt = file.name.split('.').pop();
    const fileName = `${Date.now()}-${Math.random().toString(36).substring(2, 8)}.${fileExt}`;

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const { error: uploadError } = await supabase.storage
      .from('resumes')
      .upload(fileName, buffer, {
        contentType: file.type,
        upsert: false,
      });

    if (uploadError) {
      return NextResponse.json(
        { error: 'File upload failed' },
        { status: 500 },
      );
    }

    const { data: urlData } = supabase.storage
      .from('resumes')
      .getPublicUrl(fileName);

    await prisma.jobApplication.create({
      data: {
        jobId,
        jobTitle,
        fileName: file.name,
        fileUrl: urlData.publicUrl,
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Failed to upload resume:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 },
    );
  }
}

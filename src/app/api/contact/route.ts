import { prisma } from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, phone, email, source, productName } = body;

    if (!name || !phone || !email || !source) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 },
      );
    }

    await prisma.contactRequest.create({
      data: { name, phone, email, source, productName },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Failed to create contact request:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 },
    );
  }
}

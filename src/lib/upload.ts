'use server';

import { supabase } from '@/lib/supabase-storage';

export async function uploadImage(
  formData: FormData,
  bucket: string = 'products',
): Promise<string> {
  const file = formData.get('file') as File;
  if (!file) throw new Error('No file provided');

  const fileExt = file.name.split('.').pop();
  const fileName = `${Date.now()}-${Math.random().toString(36).substring(2, 8)}.${fileExt}`;

  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  const { error } = await supabase.storage
    .from(bucket)
    .upload(fileName, buffer, {
      contentType: file.type,
      upsert: false,
    });

  if (error) throw new Error(`Upload failed: ${error.message}`);

  const { data: urlData } = supabase.storage
    .from(bucket)
    .getPublicUrl(fileName);

  return urlData.publicUrl;
}

export async function deleteImage(imageUrl: string) {
  const url = new URL(imageUrl);
  const match = url.pathname.match(
    /\/storage\/v1\/object\/public\/([^/]+)\/(.+)/,
  );
  if (!match) return;

  const bucket = match[1];
  const filePath = match[2];

  await supabase.storage.from(bucket).remove([filePath]);
}

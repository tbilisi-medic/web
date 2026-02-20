'use server';

import { supabase } from '@/lib/supabase-storage';

export async function uploadProductImage(formData: FormData): Promise<string> {
  const file = formData.get('file') as File;
  if (!file) throw new Error('No file provided');

  const fileExt = file.name.split('.').pop();
  const fileName = `${Date.now()}-${Math.random().toString(36).substring(2, 8)}.${fileExt}`;
  const filePath = `${fileName}`;

  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  const { error } = await supabase.storage
    .from('products')
    .upload(filePath, buffer, {
      contentType: file.type,
      upsert: false,
    });

  if (error) throw new Error(`Upload failed: ${error.message}`);

  const { data: urlData } = supabase.storage
    .from('products')
    .getPublicUrl(filePath);

  return urlData.publicUrl;
}

export async function deleteProductImage(imageUrl: string) {
  const url = new URL(imageUrl);
  const pathParts = url.pathname.split('/storage/v1/object/public/products/');
  if (pathParts.length < 2) return;

  const filePath = pathParts[1];

  await supabase.storage.from('products').remove([filePath]);
}

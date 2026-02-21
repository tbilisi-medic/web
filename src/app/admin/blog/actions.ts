'use server';

import { prisma } from '@/lib/prisma';
import { generateSlug } from '@/lib/slug';
import { revalidatePath } from 'next/cache';
import { deleteImage } from '@/lib/upload';

export async function getBlogPosts(search?: string) {
  const posts = await prisma.blogPost.findMany({
    where: search
      ? {
          OR: [
            { titleKa: { contains: search, mode: 'insensitive' } },
            { titleEn: { contains: search, mode: 'insensitive' } },
          ],
        }
      : undefined,
    orderBy: { createdAt: 'desc' },
  });

  return posts;
}

export async function createBlogPost(data: {
  titleKa: string;
  titleEn?: string;
  contentKa: string;
  contentEn?: string;
  category: string;
  imageUrl?: string;
}) {
  let slug = generateSlug(data.titleEn || data.titleKa);

  const existing = await prisma.blogPost.findUnique({ where: { slug } });
  if (existing) {
    slug = `${slug}-${Date.now()}`;
  }

  await prisma.blogPost.create({
    data: {
      ...data,
      slug,
    },
  });

  revalidatePath('/admin/blog');
}

export async function updateBlogPost(
  id: string,
  data: {
    titleKa: string;
    titleEn?: string;
    contentKa: string;
    contentEn?: string;
    category: string;
    imageUrl?: string;
  },
) {
  const post = await prisma.blogPost.findUnique({ where: { id } });
  if (!post) throw new Error('Blog post not found');

  let slug = post.slug;
  const newTitle = data.titleEn || data.titleKa;
  const oldTitle = post.titleEn || post.titleKa;
  if (newTitle !== oldTitle) {
    slug = generateSlug(newTitle);
    const existing = await prisma.blogPost.findUnique({ where: { slug } });
    if (existing && existing.id !== id) {
      slug = `${slug}-${Date.now()}`;
    }
  }

  await prisma.blogPost.update({
    where: { id },
    data: {
      ...data,
      slug,
    },
  });

  revalidatePath('/admin/blog');
}

export async function deleteBlogPost(id: string) {
  const post = await prisma.blogPost.findUnique({ where: { id } });
  if (!post) throw new Error('Blog post not found');

  if (post.imageUrl) {
    await deleteImage(post.imageUrl);
  }

  await prisma.blogPost.delete({ where: { id } });
  revalidatePath('/admin/blog');
}

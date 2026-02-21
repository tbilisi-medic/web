import { prisma } from '@/lib/prisma';

export async function getPublicBlogPosts(category?: string) {
  const posts = await prisma.blogPost.findMany({
    where: {
      isActive: true,
      ...(category ? { category } : {}),
    },
    orderBy: { createdAt: 'desc' },
  });

  return posts;
}

export async function getBlogPostBySlug(slug: string) {
  const post = await prisma.blogPost.findUnique({
    where: { slug, isActive: true },
  });

  return post;
}

export async function getRelatedBlogPosts(
  category: string,
  excludePostId: string,
  limit = 3,
) {
  const posts = await prisma.blogPost.findMany({
    where: {
      isActive: true,
      category,
      id: { not: excludePostId },
    },
    take: limit,
    orderBy: { createdAt: 'desc' },
  });

  return posts;
}

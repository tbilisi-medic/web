import { prisma } from '@/lib/prisma';

export async function getPublicProducts(
  categoryId?: string,
  subcategoryIds?: string[],
) {
  const products = await prisma.product.findMany({
    where: {
      isActive: true,
      ...(categoryId && { categoryId }),
      ...(subcategoryIds && subcategoryIds.length > 0
        ? { subcategoryId: { in: subcategoryIds } }
        : {}),
    },
    include: {
      category: true,
      subcategory: true,
    },
    orderBy: { createdAt: 'desc' },
  });

  return products;
}

export async function getCategoriesWithSubcategories() {
  const categories = await prisma.category.findMany({
    include: {
      subcategories: { orderBy: { sortOrder: 'asc' } },
    },
    orderBy: { sortOrder: 'asc' },
  });

  return categories;
}

export async function getProductBySlug(slug: string) {
  const product = await prisma.product.findUnique({
    where: { slug, isActive: true },
    include: {
      category: true,
      subcategory: true,
    },
  });

  return product;
}

export async function getRelatedProducts(
  categoryId: string,
  excludeProductId: string,
  limit = 3,
) {
  const products = await prisma.product.findMany({
    where: {
      isActive: true,
      categoryId,
      id: { not: excludeProductId },
    },
    take: limit,
    orderBy: { createdAt: 'desc' },
  });

  return products;
}

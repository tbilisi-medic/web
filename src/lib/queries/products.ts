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

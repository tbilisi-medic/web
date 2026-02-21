'use server';

import { prisma } from '@/lib/prisma';
import { generateSlug } from '@/lib/slug';
import { revalidatePath } from 'next/cache';
import { deleteImage } from '@/lib/upload';

export async function getProducts(search?: string) {
  const products = await prisma.product.findMany({
    where: search
      ? { name: { contains: search, mode: 'insensitive' } }
      : undefined,
    include: {
      category: true,
      subcategory: true,
    },
    orderBy: { createdAt: 'desc' },
  });

  return products;
}

export async function getCategories() {
  const categories = await prisma.category.findMany({
    include: { subcategories: { orderBy: { sortOrder: 'asc' } } },
    orderBy: { sortOrder: 'asc' },
  });

  return categories;
}

export async function createProduct(data: {
  name: string;
  subtitle?: string;
  description?: string;
  categoryId: string;
  subcategoryId: string;
  imageUrl?: string;
}) {
  let slug = generateSlug(data.name);

  // Ensure slug is unique
  const existing = await prisma.product.findUnique({ where: { slug } });
  if (existing) {
    slug = `${slug}-${Date.now()}`;
  }

  await prisma.product.create({
    data: {
      ...data,
      slug,
    },
  });

  revalidatePath('/admin/products');
}

export async function updateProduct(
  id: string,
  data: {
    name: string;
    subtitle?: string;
    description?: string;
    categoryId: string;
    subcategoryId: string;
    imageUrl?: string;
  },
) {
  const product = await prisma.product.findUnique({ where: { id } });
  if (!product) throw new Error('Product not found');

  // Regenerate slug if name changed
  let slug = product.slug;
  if (data.name !== product.name) {
    slug = generateSlug(data.name);
    const existing = await prisma.product.findUnique({ where: { slug } });
    if (existing && existing.id !== id) {
      slug = `${slug}-${Date.now()}`;
    }
  }

  await prisma.product.update({
    where: { id },
    data: {
      ...data,
      slug,
    },
  });

  revalidatePath('/admin/products');
}

export async function deleteProduct(id: string) {
  const product = await prisma.product.findUnique({ where: { id } });
  if (!product) throw new Error('Product not found');

  // Delete image from storage if exists
  if (product.imageUrl) {
    await deleteImage(product.imageUrl);
  }

  await prisma.product.delete({ where: { id } });
  revalidatePath('/admin/products');
}

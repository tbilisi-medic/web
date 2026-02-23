'use server';

import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

export async function getContactRequests() {
  const requests = await prisma.contactRequest.findMany({
    orderBy: { createdAt: 'desc' },
  });

  return requests;
}

export async function deleteContactRequest(id: string) {
  await prisma.contactRequest.delete({ where: { id } });
  revalidatePath('/admin');
}

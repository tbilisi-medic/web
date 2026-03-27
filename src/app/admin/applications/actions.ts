'use server';

import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

export async function getJobApplications() {
  const applications = await prisma.jobApplication.findMany({
    orderBy: { createdAt: 'desc' },
  });

  return applications;
}

export async function deleteJobApplication(id: string) {
  await prisma.jobApplication.delete({ where: { id } });
  revalidatePath('/admin');
}

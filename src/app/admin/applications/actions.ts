'use server';

import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';
import { deleteFile } from '@/lib/upload';

export async function getJobApplications() {
  const applications = await prisma.jobApplication.findMany({
    orderBy: { createdAt: 'desc' },
  });

  return applications;
}

export async function deleteJobApplication(id: string) {
  const application = await prisma.jobApplication.findUnique({ where: { id } });
  if (!application) throw new Error('Application not found');

  await deleteFile(application.fileUrl);
  await prisma.jobApplication.delete({ where: { id } });
  revalidatePath('/admin');
}

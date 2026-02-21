'use server';

import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

export async function getJobs(search?: string) {
  const jobs = await prisma.job.findMany({
    where: search
      ? { title: { contains: search, mode: 'insensitive' } }
      : undefined,
    orderBy: { createdAt: 'desc' },
  });

  return jobs;
}

export async function createJob(data: {
  title: string;
  location: string;
  description: string;
}) {
  await prisma.job.create({ data });
  revalidatePath('/admin/jobs');
}

export async function updateJob(
  id: string,
  data: {
    title: string;
    location: string;
    description: string;
  },
) {
  const job = await prisma.job.findUnique({ where: { id } });
  if (!job) throw new Error('Job not found');

  await prisma.job.update({ where: { id }, data });
  revalidatePath('/admin/jobs');
}

export async function deleteJob(id: string) {
  await prisma.job.delete({ where: { id } });
  revalidatePath('/admin/jobs');
}

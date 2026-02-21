import { prisma } from '@/lib/prisma';

export async function getActiveJobs() {
  const jobs = await prisma.job.findMany({
    where: { isActive: true },
    orderBy: { createdAt: 'desc' },
  });

  return jobs;
}

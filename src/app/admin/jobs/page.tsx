import { getJobs } from './actions';
import { AdminHeader } from '@/components/admin';
import { AdminJobsClient } from '@/components/admin/admin-jobs-client';

export default async function AdminJobsPage({
  searchParams,
}: {
  searchParams: Promise<{ search?: string }>;
}) {
  const { search } = await searchParams;
  const jobs = await getJobs(search);

  return (
    <>
      <AdminHeader title="ვაკანსიები" />
      <div className="flex-1 p-4">
        <div className="mx-auto w-full max-w-7xl">
          <AdminJobsClient jobs={jobs} />
        </div>
      </div>
    </>
  );
}

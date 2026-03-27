import { AdminHeader } from '@/components/admin';
import { prisma } from '@/lib/prisma';
import {
  AdminContactsClient,
  AdminApplicationsClient,
} from '@/components/admin';

export default async function AdminDashboard() {
  const [
    productCount,
    blogPostCount,
    jobCount,
    contactRequestCount,
    jobApplicationCount,
    contactRequests,
    jobApplications,
  ] = await Promise.all([
    prisma.product.count(),
    prisma.blogPost.count(),
    prisma.job.count(),
    prisma.contactRequest.count(),
    prisma.jobApplication.count(),
    prisma.contactRequest.findMany({ orderBy: { createdAt: 'desc' } }),
    prisma.jobApplication.findMany({ orderBy: { createdAt: 'desc' } }),
  ]);

  return (
    <>
      <AdminHeader title="მთავარი" />
      <div className="flex-1 p-4">
        <div className="mx-auto w-full max-w-7xl">
          <div className="grid gap-4 lg:grid-cols-5">
            <div className="bg-white rounded-xl border p-6 shadow-sm">
              <p className="text-sm text-foreground/60 uppercase">პროდუქტები</p>
              <p className="mt-2 text-3xl font-bold">{productCount}</p>
            </div>
            <div className="bg-white rounded-xl border p-6 shadow-sm">
              <p className="text-sm text-foreground/60 uppercase">
                ბლოგ პოსტები
              </p>
              <p className="mt-2 text-3xl font-bold">{blogPostCount}</p>
            </div>
            <div className="bg-white rounded-xl border p-6 shadow-sm">
              <p className="text-sm text-foreground/60 uppercase">ვაკანსიები</p>
              <p className="mt-2 text-3xl font-bold">{jobCount}</p>
            </div>
            <div className="bg-white rounded-xl border p-6 shadow-sm">
              <p className="text-sm text-foreground/60 uppercase">მოთხოვნები</p>
              <p className="mt-2 text-3xl font-bold">{contactRequestCount}</p>
            </div>
            <div className="bg-white rounded-xl border p-6 shadow-sm">
              <p className="text-sm text-foreground/60 uppercase">რეზიუმეები</p>
              <p className="mt-2 text-3xl font-bold">{jobApplicationCount}</p>
            </div>
          </div>
          <div className="mt-10">
            <h2 className="text-md font-semibold uppercase mb-4">
              საკონტაქტო მოთხოვნები
            </h2>
            <AdminContactsClient contacts={contactRequests} />
          </div>
          <div className="mt-10">
            <h2 className="text-md font-semibold uppercase mb-4">
              კანდიდატების რეზიუმეები
            </h2>
            <AdminApplicationsClient applications={jobApplications} />
          </div>
        </div>
      </div>
    </>
  );
}

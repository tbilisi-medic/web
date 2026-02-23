import { AdminHeader } from '@/components/admin';
import { prisma } from '@/lib/prisma';
import { AdminContactsClient } from '@/components/admin';

export default async function AdminDashboard() {
  const [
    productCount,
    blogPostCount,
    jobCount,
    contactRequestCount,
    contactRequests,
  ] = await Promise.all([
    prisma.product.count(),
    prisma.blogPost.count(),
    prisma.job.count(),
    prisma.contactRequest.count(),
    prisma.contactRequest.findMany({ orderBy: { createdAt: 'desc' } }),
  ]);

  return (
    <>
      <AdminHeader title="მთავარი" />
      <div className="flex-1 p-4">
        <div className="mx-auto w-full max-w-7xl">
          <div className="grid gap-4 lg:grid-cols-4">
            <div className="rounded-xl border p-6 shadow-sm">
              <p className="text-sm text-foreground/60 uppercase">პროდუქტები</p>
              <p className="mt-2 text-3xl font-bold">{productCount}</p>
            </div>
            <div className="rounded-xl border p-6 shadow-sm">
              <p className="text-sm text-foreground/60 uppercase">
                ბლოგ პოსტები
              </p>
              <p className="mt-2 text-3xl font-bold">{blogPostCount}</p>
            </div>
            <div className="rounded-xl border p-6 shadow-sm">
              <p className="text-sm text-foreground/60 uppercase">ვაკანსიები</p>
              <p className="mt-2 text-3xl font-bold">{jobCount}</p>
            </div>
            <div className="rounded-xl border p-6 shadow-sm">
              <p className="text-sm text-foreground/60 uppercase">
                საკონტაქტო მოთხოვნები
              </p>
              <p className="mt-2 text-3xl font-bold">{contactRequestCount}</p>
            </div>
          </div>
          <div className="mt-10">
            <h2 className="text-md font-semibold uppercase mb-4">
              საკონტაქტო მოთხოვნები
            </h2>
            <AdminContactsClient contacts={contactRequests} />
          </div>
        </div>
      </div>
    </>
  );
}

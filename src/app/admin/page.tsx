import { AdminHeader } from '@/components/admin';
import { prisma } from '@/lib/prisma';

export default async function AdminDashboard() {
  const productCount = await prisma.product.count();

  return (
    <>
      <AdminHeader title="მთავარი" />
      <div className="flex-1 p-4">
        <div className="mx-auto w-full max-w-7xl">
          <div className="grid gap-4 lg:grid-cols-3">
            {/* Placeholder stats cards */}
            <div className="rounded-xl border p-6 shadow-sm">
              <p className="text-sm text-foreground/60 uppercase">პროდუქტები</p>
              <p className="mt-2 text-3xl font-bold">{productCount}</p>
            </div>
            <div className="rounded-xl border p-6 shadow-sm">
              <p className="text-sm text-foreground/60 uppercase">
                ბლოგ პოსტები
              </p>
              <p className="mt-2 text-3xl font-bold">0</p>
            </div>
            <div className="rounded-xl border p-6 shadow-sm">
              <p className="text-sm text-foreground/60 uppercase">ვაკანსიები</p>
              <p className="mt-2 text-3xl font-bold">0</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

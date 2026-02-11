import { AdminHeader } from '@/components/admin';

export default function AdminDashboard() {
  return (
    <>
      <AdminHeader title="მთავარი" />
      <div className="flex-1 p-4">
        <div className="mx-auto w-full max-w-7xl">
          <div className="grid gap-4 lg:grid-cols-3">
            {/* Placeholder stats cards */}
            <div className="rounded-xl border p-6 shadow-sm">
              <p className="text-sm text-foreground/60 uppercase">პროდუქტები</p>
              <p className="mt-2 text-3xl font-bold">124</p>
            </div>
            <div className="rounded-xl border p-6 shadow-sm">
              <p className="text-sm text-foreground/60 uppercase">
                ბლოგ პოსტები
              </p>
              <p className="mt-2 text-3xl font-bold">45</p>
            </div>
            <div className="rounded-xl border p-6 shadow-sm">
              <p className="text-sm text-foreground/60 uppercase">ვაკანსიები</p>
              <p className="mt-2 text-3xl font-bold">12</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

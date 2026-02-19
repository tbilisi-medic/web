import { getProducts, getCategories } from './actions';
import { AdminHeader } from '@/components/admin';
import { AdminProductsClient } from '@/components/admin/admin-products-client';

export default async function AdminProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ search?: string }>;
}) {
  const { search } = await searchParams;
  const [products, categories] = await Promise.all([
    getProducts(search),
    getCategories(),
  ]);

  return (
    <>
      <AdminHeader title="პროდუქტები" />
      <div className="flex-1 p-4">
        <div className="mx-auto w-full max-w-7xl">
          <AdminProductsClient products={products} categories={categories} />
        </div>
      </div>
    </>
  );
}

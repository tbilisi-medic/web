import {
  AdminHeader,
  ProductsTable,
  ProductFormModal,
} from '@/components/admin';

// products data
const products = [
  {
    id: '1',
    name: 'SONOSCAPE E2',
    category: 'ტექნოლოგია',
    subcategory: 'ექოსკოპია',
    createdAt: '2025-01-15',
  },
  {
    id: '2',
    name: 'SONOSCAPE E3',
    category: 'ტექნოლოგია',
    subcategory: 'ექოსკოპია',
    createdAt: '2025-01-18',
  },
  {
    id: '3',
    name: 'Patient Monitor X500',
    category: 'ტექნოლოგია',
    subcategory: 'პაციენტის მონიტორინგი',
    createdAt: '2025-01-20',
  },
  {
    id: '4',
    name: 'Surgery Table ST-100',
    category: 'ავეჯი',
    subcategory: 'მაგიდები',
    createdAt: '2025-02-01',
  },
  {
    id: '5',
    name: 'Medical Gloves Pack',
    category: 'სახარჯები',
    subcategory: 'სამედიცინო სამოსი',
    createdAt: '2025-02-10',
  },
];

export default function AdminProductsPage() {
  return (
    <>
      <AdminHeader title="პროდუქტები" />
      <div className="flex-1 p-4">
        <div className="mx-auto w-full max-w-7xl">
          {/* Actions */}
          <div className="flex items-center justify-between">
            <p className="text-sm text-foreground/60">
              სულ: {products.length} პროდუქტი
            </p>
            <ProductFormModal />
          </div>

          {/* Table */}
          <div className="mt-5">
            <ProductsTable products={products} />
          </div>
        </div>
      </div>
    </>
  );
}

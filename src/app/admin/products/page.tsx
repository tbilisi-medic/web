'use client';

import { useState } from 'react';
import {
  AdminHeader,
  ProductsTable,
  ProductFormModal,
} from '@/components/admin';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

// products data
const products = [
  {
    id: '1',
    name: 'SONOSCAPE E2',
    category: 'technology',
    subcategory: 'ექოსკოპია',
    description:
      'ლორემ იპსუმ დოლორ სიტ ამეტ, კონსექტეტურ ადიპისცინგ ელიტ, სედ დო ეიუსმოდ ტემპორ ინციდიდუნტ უტ ლაბორე ეტ დოლორე მაგნა ალიქვა',
    createdAt: '2025-01-15',
  },
  {
    id: '2',
    name: 'SONOSCAPE E3',
    category: 'technology',
    subcategory: 'ექოსკოპია',
    description:
      'უტ ენიმ ად მინიმ ვენიამ, ქვის ნოსტრიდ ექსერციტატიონ ულლამკო ლაბორის ნისი უტ ალიქვიპ ექს ეა კომოდო კონსექვატ',
    createdAt: '2025-01-18',
  },
  {
    id: '3',
    name: 'Patient Monitor X500',
    category: 'technology',
    subcategory: 'პაციენტის მონიტორინგი',
    description:
      'დუის აუტე იურე დოლორ ინ რეპრეჰენდერიტ ინ ვოლუპტატე ველიტ ესსე ცილუმ დოლორე ეუ ფუგიატ ნულლა პარიატურ',
    createdAt: '2025-01-20',
  },
  {
    id: '4',
    name: 'Surgery Table ST-100',
    category: 'furniture',
    subcategory: 'მაგიდები',
    description:
      'ექსცეპტეურ სინტ ოქკაეკატ კუპიდატატ ნონ პროიდენტ, სუნტ ინ კულპა ქუი ოფფიცია დეზერუნტ მოლლიტ ანიმ იდ ესტ ლაბორუმ',
    createdAt: '2025-02-01',
  },
  {
    id: '5',
    name: 'Medical Gloves Pack',
    category: 'consumables',
    subcategory: 'სამედიცინო სამოსი',
    description: 'ლორემ იპსუმ დოლორ სიტ ამეტ, კონსექტეტურ ადიპისცინგ ელიტ',
    createdAt: '2025-02-10',
  },
];

export default function AdminProductsPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <>
      <AdminHeader title="პროდუქტები" />
      <div className="flex-1 p-4">
        <div className="mx-auto w-full max-w-7xl">
          {/* Actions */}
          <div className="flex items-center justify-between gap-4">
            <div className="relative w-full max-w-sm">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-foreground/60" />
              <Input
                placeholder="ძიება..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="h-10 pl-9"
              />
            </div>
            <ProductFormModal mode="add" />
          </div>

          {/* Table */}
          <div className="mt-5">
            <ProductsTable products={filteredProducts} />
          </div>

          {/* Count */}
          <p className="mt-5 text-sm text-foreground/60">
            სულ: {filteredProducts.length} პროდუქტი
          </p>
        </div>
      </div>
    </>
  );
}

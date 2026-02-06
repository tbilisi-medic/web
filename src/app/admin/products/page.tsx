'use client';

import { useState } from 'react';
import {
  AdminHeader,
  ProductsTable,
  ProductFormModal,
} from '@/components/admin';
import { Input } from '@/components/ui/input';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import { Search } from 'lucide-react';

// products data
const products = [
  {
    id: '1',
    name: 'SONOSCAPE E2',
    category: 'technology',
    subcategory: 'ექოსკოპია',
    description:
      'ლორემ იპსუმ დოლორ სით ამეთ, კონსექტეთურ ადიპისიცინგ ელით. სედ დო ეიუსმოდ თემპორ ინციდიდუნთ უთ ლაბორე ეთ დოლორე მაგნა ალიქუა.',
    createdAt: '2025-01-15',
  },
  {
    id: '2',
    name: 'SONOSCAPE E3',
    category: 'technology',
    subcategory: 'ექოსკოპია',
    description:
      'უთ ენიმ ად მინიმ ვენიამ, ქუის ნოსთრუდ ექსერციტათიონ ულამცო ლაბორის ნისი უთ ალიქუიპ ექს ეა კომოდო კონსექუათ.',
    createdAt: '2025-01-18',
  },
  {
    id: '3',
    name: 'Patient Monitor X500',
    category: 'technology',
    subcategory: 'პაციენტის მონიტორინგი',
    description:
      'დუის აუთე ირურე დოლორ ინ რეპრეჰენდერით ინ ვოლუპთათე ველით ესსე ცილუმ დოლორე ეუ ფუგიათ ნულა პარიათურ.',
    createdAt: '2025-01-20',
  },
  {
    id: '4',
    name: 'Surgery Table ST-100',
    category: 'furniture',
    subcategory: 'მაგიდები',
    description:
      'ექსცეპთეურ სინთ ოცცაეცათ ცუპიდათათ ნონ პროიდენთ, სუნთ ინ ცულპა ქუი ოფფიცია დესერუნთ მოლით ანიმ იდ ესთ ლაბორუმ.',
    createdAt: '2025-02-01',
  },
  {
    id: '5',
    name: 'Medical Gloves Pack',
    category: 'consumables',
    subcategory: 'სამედიცინო სამოსი',
    description:
      'სედ უთ პერსპიციათის უნდე ომნის ისთე ნათუს ერრორ სით ვოლუპთათემ აცცუსანთიუმ დოლორემქუე ლაუდანთიუმ.',
    createdAt: '2025-02-10',
  },
  {
    id: '6',
    name: 'SONOSCAPE E3',
    category: 'technology',
    subcategory: 'ექოსკოპია',
    description:
      'უთ ენიმ ად მინიმ ვენიამ, ქუის ნოსთრუდ ექსერციტათიონ ულამცო ლაბორის ნისი უთ ალიქუიპ ექს ეა კომოდო კონსექუათ.',
    createdAt: '2025-01-18',
  },
  {
    id: '7',
    name: 'Patient Monitor X500',
    category: 'technology',
    subcategory: 'პაციენტის მონიტორინგი',
    description:
      'დუის აუთე ირურე დოლორ ინ რეპრეჰენდერით ინ ვოლუპთათე ველით ესსე ცილუმ დოლორე ეუ ფუგიათ ნულა პარიათურ.',
    createdAt: '2025-01-20',
  },
  {
    id: '8',
    name: 'Surgery Table ST-100',
    category: 'furniture',
    subcategory: 'მაგიდები',
    description:
      'ექსცეპთეურ სინთ ოცცაეცათ ცუპიდათათ ნონ პროიდენთ, სუნთ ინ ცულპა ქუი ოფფიცია დესერუნთ მოლით ანიმ იდ ესთ ლაბორუმ.',
    createdAt: '2025-02-01',
  },
  {
    id: '9',
    name: 'Medical Gloves Pack',
    category: 'consumables',
    subcategory: 'სამედიცინო სამოსი',
    description:
      'სედ უთ პერსპიციათის უნდე ომნის ისთე ნათუს ერრორ სით ვოლუპთათემ აცცუსანთიუმ დოლორემქუე ლაუდანთიუმ.',
    createdAt: '2025-02-10',
  },
  {
    id: '10',
    name: 'SONOSCAPE E3',
    category: 'technology',
    subcategory: 'ექოსკოპია',
    description:
      'უთ ენიმ ად მინიმ ვენიამ, ქუის ნოსთრუდ ექსერციტათიონ ულამცო ლაბორის ნისი უთ ალიქუიპ ექს ეა კომოდო კონსექუათ.',
    createdAt: '2025-01-18',
  },
  {
    id: '11',
    name: 'Patient Monitor X500',
    category: 'technology',
    subcategory: 'პაციენტის მონიტორინგი',
    description:
      'დუის აუთე ირურე დოლორ ინ რეპრეჰენდერით ინ ვოლუპთათე ველით ესსე ცილუმ დოლორე ეუ ფუგიათ ნულა პარიათურ.',
    createdAt: '2025-01-20',
  },
  {
    id: '12',
    name: 'Surgery Table ST-100',
    category: 'furniture',
    subcategory: 'მაგიდები',
    description:
      'ექსცეპთეურ სინთ ოცცაეცათ ცუპიდათათ ნონ პროიდენთ, სუნთ ინ ცულპა ქუი ოფფიცია დესერუნთ მოლით ანიმ იდ ესთ ლაბორუმ.',
    createdAt: '2025-02-01',
  },
  {
    id: '13',
    name: 'Medical Gloves Pack',
    category: 'consumables',
    subcategory: 'სამედიცინო სამოსი',
    description:
      'სედ უთ პერსპიციათის უნდე ომნის ისთე ნათუს ერრორ სით ვოლუპთათემ აცცუსანთიუმ დოლორემქუე ლაუდანთიუმ.',
    createdAt: '2025-02-10',
  },
  {
    id: '14',
    name: 'SONOSCAPE E3',
    category: 'technology',
    subcategory: 'ექოსკოპია',
    description:
      'უთ ენიმ ად მინიმ ვენიამ, ქუის ნოსთრუდ ექსერციტათიონ ულამცო ლაბორის ნისი უთ ალიქუიპ ექს ეა კომოდო კონსექუათ.',
    createdAt: '2025-01-18',
  },
  {
    id: '15',
    name: 'Patient Monitor X500',
    category: 'technology',
    subcategory: 'პაციენტის მონიტორინგი',
    description:
      'დუის აუთე ირურე დოლორ ინ რეპრეჰენდერით ინ ვოლუპთათე ველით ესსე ცილუმ დოლორე ეუ ფუგიათ ნულა პარიათურ.',
    createdAt: '2025-01-20',
  },
  {
    id: '16',
    name: 'Surgery Table ST-100',
    category: 'furniture',
    subcategory: 'მაგიდები',
    description:
      'ექსცეპთეურ სინთ ოცცაეცათ ცუპიდათათ ნონ პროიდენთ, სუნთ ინ ცულპა ქუი ოფფიცია დესერუნთ მოლით ანიმ იდ ესთ ლაბორუმ.',
    createdAt: '2025-02-01',
  },
  {
    id: '17',
    name: 'Medical Gloves Pack 100',
    category: 'consumables',
    subcategory: 'სამედიცინო სამოსი',
    description:
      'სედ უთ პერსპიციათის უნდე ომნის ისთე ნათუს ერრორ სით ვოლუპთათემ აცცუსანთიუმ დოლორემქუე ლაუდანთიუმ.',
    createdAt: '2025-02-10',
  },
];

const ITEMS_PER_PAGE = 10;

export default function AdminProductsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedProducts = filteredProducts.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE,
  );

  // Reset to first page when search changes
  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    setCurrentPage(1);
  };

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
                onChange={(e) => handleSearchChange(e.target.value)}
                className="h-10 pl-9"
              />
            </div>
            <ProductFormModal mode="add" />
          </div>

          {/* Table */}
          <div className="mt-5">
            <ProductsTable products={paginatedProducts} />
          </div>

          {/* Footer */}
          <div className="mt-4 flex items-center justify-between">
            <p className="whitespace-nowrap text-sm text-foreground/60">
              სულ: {filteredProducts.length} პროდუქტი
            </p>

            {totalPages > 1 && (
              <Pagination className="mx-0 w-auto justify-end">
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        if (currentPage > 1) setCurrentPage(currentPage - 1);
                      }}
                      className={
                        currentPage === 1
                          ? 'pointer-events-none opacity-50'
                          : 'cursor-pointer'
                      }
                    >
                      წინა
                    </PaginationPrevious>
                  </PaginationItem>

                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                    (page) => (
                      <PaginationItem key={page}>
                        <PaginationLink
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            setCurrentPage(page);
                          }}
                          isActive={currentPage === page}
                          className="cursor-pointer"
                        >
                          {page}
                        </PaginationLink>
                      </PaginationItem>
                    ),
                  )}

                  <PaginationItem>
                    <PaginationNext
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        if (currentPage < totalPages)
                          setCurrentPage(currentPage + 1);
                      }}
                      className={
                        currentPage === totalPages
                          ? 'pointer-events-none opacity-50'
                          : 'cursor-pointer'
                      }
                    >
                      შემდეგი
                    </PaginationNext>
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

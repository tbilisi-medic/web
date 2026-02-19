'use client';

import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
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
import { ProductsTable } from './products-table';
import { ProductFormModal } from './product-form-modal';
import type {
  ProductWithRelations,
  CategoryWithSubcategories,
} from '@/types/product';

const ITEMS_PER_PAGE = 10;

interface AdminProductsClientProps {
  products: ProductWithRelations[];
  categories: CategoryWithSubcategories[];
}

export function AdminProductsClient({
  products,
  categories,
}: AdminProductsClientProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(
    searchParams.get('search') || '',
  );
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedProducts = products.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE,
  );

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    setCurrentPage(1);

    const params = new URLSearchParams();
    if (value) params.set('search', value);
    router.replace(`/admin/products?${params.toString()}`);
  };

  return (
    <>
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
        <ProductFormModal mode="add" categories={categories} />
      </div>

      {/* Table */}
      <div className="mt-5">
        <ProductsTable products={paginatedProducts} categories={categories} />
      </div>

      {/* Footer */}
      <div className="mt-4 flex items-center justify-between">
        <p className="whitespace-nowrap text-sm text-foreground/60">
          სულ: {products.length} პროდუქტი
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
    </>
  );
}

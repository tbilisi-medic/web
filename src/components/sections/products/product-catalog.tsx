'use client';

import * as React from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Checkbox } from '@/components/ui/checkbox';
import { Suspense } from 'react';
import type {
  ProductWithRelations,
  CategoryWithSubcategories,
} from '@/types/product';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PaginationEllipsis,
} from '@/components/ui/pagination';

const ITEMS_PER_PAGE = 12;

interface ProductCatalogContentProps {
  products: ProductWithRelations[];
  categories: CategoryWithSubcategories[];
}

function ProductCatalogContent({
  products,
  categories,
}: ProductCatalogContentProps) {
  const searchParams = useSearchParams();

  const [activeCategory, setActiveCategory] = React.useState(
    searchParams.get('category') || categories[0]?.id || '',
  );
  const [activeSubcategories, setActiveSubcategories] = React.useState<
    string[]
  >(searchParams.getAll('sub'));
  const [currentPage, setCurrentPage] = React.useState(1);

  React.useEffect(() => {
    const categoryFromUrl = searchParams.get('category');
    const subsFromUrl = searchParams.getAll('sub');

    if (categoryFromUrl) {
      setActiveCategory(categoryFromUrl);
      setActiveSubcategories(subsFromUrl);
    }
  }, [searchParams]);

  const currentCategory = categories.find((c) => c.id === activeCategory);

  const searchQuery = searchParams.get('search')?.toLowerCase() || '';

  const filteredProducts = React.useMemo(() => {
    return products.filter((product) => {
      if (searchQuery) {
        return (
          product.name.toLowerCase().includes(searchQuery) ||
          product.subtitle?.toLowerCase().includes(searchQuery) ||
          product.description?.toLowerCase().includes(searchQuery)
        );
      }
      if (product.categoryId !== activeCategory) return false;
      if (activeSubcategories.length > 0) {
        return activeSubcategories.includes(product.subcategoryId);
      }
      return true;
    });
  }, [products, activeCategory, activeSubcategories, searchQuery]);

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedProducts = filteredProducts.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE,
  );

  React.useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);

  const updateURL = (category: string, subcategories: string[]) => {
    const params = new URLSearchParams();
    params.set('category', category);
    subcategories.forEach((sub) => params.append('sub', sub));

    const search = searchParams.get('search');
    if (search) {
      params.set('search', search);
    }

    window.history.replaceState(null, '', `/products?${params.toString()}`);
  };

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
    setActiveSubcategories([]);
    setCurrentPage(1);
    updateURL(categoryId, []);
  };

  const handleSubcategoryChange = (subcategoryId: string, checked: boolean) => {
    const newSubcategories = checked
      ? [...activeSubcategories, subcategoryId]
      : activeSubcategories.filter((s) => s !== subcategoryId);

    setActiveSubcategories(newSubcategories);
    setCurrentPage(1);
    updateURL(activeCategory, newSubcategories);
  };

  const getPageNumbers = () => {
    const pages: (number | 'ellipsis')[] = [];
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);
      if (currentPage > 3) pages.push('ellipsis');
      for (
        let i = Math.max(2, currentPage - 1);
        i <= Math.min(totalPages - 1, currentPage + 1);
        i++
      ) {
        pages.push(i);
      }
      if (currentPage < totalPages - 2) pages.push('ellipsis');
      pages.push(totalPages);
    }
    return pages;
  };

  return (
    <section>
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {/* Category Tabs */}
          <div>
            <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto pb-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => handleCategoryChange(category.id)}
                  className={`shrink-0 flex-1 cursor-pointer whitespace-nowrap rounded-lg px-5 py-3 text-md font-semibold transition-colors lg:shrink uppercase ${
                    activeCategory === category.id
                      ? 'bg-primary border border-primary text-white'
                      : 'bg-white border border-primary/15 text-dark hover:bg-primary/5'
                  }`}
                >
                  {category.nameKa}
                </button>
              ))}
            </div>
          </div>

          {/* Content Area */}
          <div className="mt-10 grid gap-10 lg:grid-cols-12">
            {/* Left Sidebar - Subcategories */}
            <div className="lg:col-span-3">
              <ul className="space-y-3">
                {currentCategory?.subcategories.map((sub) => (
                  <li key={sub.id}>
                    <label className="flex cursor-pointer items-center gap-3">
                      <Checkbox
                        checked={activeSubcategories.includes(sub.id)}
                        onCheckedChange={(checked) =>
                          handleSubcategoryChange(sub.id, checked as boolean)
                        }
                        className="border-gray-300 data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                      />
                      <span
                        className={`text-md transition-colors ${
                          activeSubcategories.includes(sub.id)
                            ? 'font-semibold text-dark'
                            : 'text-foreground/70 hover:text-dark'
                        }`}
                      >
                        {sub.nameKa}
                      </span>
                    </label>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Content */}
            <div className="lg:col-span-9">
              {/* Products Grid */}
              {filteredProducts.length === 0 ? (
                <p className="text-foreground/60 text-center">
                  პროდუქტები არ მოიძებნა
                </p>
              ) : (
                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                  {paginatedProducts.map((product) => (
                    <Link
                      key={product.id}
                      href={`/products/${product.slug}`}
                      className="group block"
                    >
                      {/* Image */}
                      <div className="relative h-70 overflow-hidden rounded-xl bg-gray-100">
                        {product.imageUrl ? (
                          <Image
                            src={product.imageUrl}
                            alt={product.name}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                        ) : (
                          <div className="flex h-full items-center justify-center text-foreground/30">
                            სურათი არ მოიძებნა
                          </div>
                        )}
                      </div>

                      {/* Info */}
                      <div className="mt-8">
                        <h3 className="font-semibold text-md text-dark uppercase">
                          {product.name}
                        </h3>
                        {product.subtitle && (
                          <p className="mt-2 text-md text-dark">
                            {product.subtitle}
                          </p>
                        )}
                      </div>
                    </Link>
                  ))}
                </div>
              )}
              {totalPages > 1 && (
                <Pagination className="mt-20">
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          if (currentPage > 1) {
                            setCurrentPage(currentPage - 1);
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                          }
                        }}
                        className={
                          currentPage === 1
                            ? 'pointer-events-none opacity-50'
                            : 'cursor-pointer'
                        }
                      />
                    </PaginationItem>

                    {getPageNumbers().map((page, idx) =>
                      page === 'ellipsis' ? (
                        <PaginationItem key={`ellipsis-${idx}`}>
                          <PaginationEllipsis />
                        </PaginationItem>
                      ) : (
                        <PaginationItem key={page}>
                          <PaginationLink
                            href="#"
                            onClick={(e) => {
                              e.preventDefault();
                              setCurrentPage(page);
                              window.scrollTo({ top: 0, behavior: 'smooth' });
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
                          if (currentPage < totalPages) {
                            setCurrentPage(currentPage + 1);
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                          }
                        }}
                        className={
                          currentPage === totalPages
                            ? 'pointer-events-none opacity-50'
                            : 'cursor-pointer'
                        }
                      />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

interface ProductCatalogProps {
  products: ProductWithRelations[];
  categories: CategoryWithSubcategories[];
}

export function ProductCatalog({ products, categories }: ProductCatalogProps) {
  return (
    <Suspense>
      <ProductCatalogContent products={products} categories={categories} />
    </Suspense>
  );
}

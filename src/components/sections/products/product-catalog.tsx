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

  React.useEffect(() => {
    const categoryFromUrl = searchParams.get('category');
    const subsFromUrl = searchParams.getAll('sub');

    if (categoryFromUrl) {
      setActiveCategory(categoryFromUrl);
      setActiveSubcategories(subsFromUrl);
    }
  }, [searchParams]);

  const currentCategory = categories.find((c) => c.id === activeCategory);

  const filteredProducts = React.useMemo(() => {
    return products.filter((product) => {
      if (product.categoryId !== activeCategory) return false;
      if (activeSubcategories.length > 0) {
        return activeSubcategories.includes(product.subcategoryId);
      }
      return true;
    });
  }, [products, activeCategory, activeSubcategories]);

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
    updateURL(categoryId, []);
  };

  const handleSubcategoryChange = (subcategoryId: string, checked: boolean) => {
    const newSubcategories = checked
      ? [...activeSubcategories, subcategoryId]
      : activeSubcategories.filter((s) => s !== subcategoryId);

    setActiveSubcategories(newSubcategories);
    updateURL(activeCategory, newSubcategories);
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
                      : 'bg-white border border-primary/15 text-foreground hover:bg-primary/5'
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
                            ? 'font-semibold text-primary'
                            : 'text-foreground/70 hover:text-primary'
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
                  {filteredProducts.map((product) => (
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
                        <h3 className="font-semibold text-lg text-foreground uppercase">
                          {product.name}
                        </h3>
                        {product.subtitle && (
                          <p className="mt-2 text-md text-foreground/70">
                            {product.subtitle}
                          </p>
                        )}
                      </div>
                    </Link>
                  ))}
                </div>
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

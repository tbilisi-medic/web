'use client';

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const categories = [
  {
    id: 'technology',
    name: 'ტექნოლოგია',
    subcategories: [
      'ყველა',
      'ექოსკოპია',
      'ენდოსკოპია',
      'ლაპარასკოპია',
      'ანესთეზია',
      'ხელოვნური სუნთქვა',
      'პაციენტის მონიტორინგი',
      'ოფთალმოლოგია',
    ],
  },
  {
    id: 'furniture',
    name: 'ავეჯი',
    subcategories: ['ყველა', 'საწოლები', 'მაგიდები', 'სავარძლები', 'კარადები'],
  },
  {
    id: 'consumables',
    name: 'სახარჯები',
    subcategories: ['ყველა', 'სამედიცინო სამოსი', 'შპრიცები', 'კათეტერები'],
  },
  {
    id: 'laboratory',
    name: 'ლაბორატორია',
    subcategories: [
      'ყველა',
      'ჰემატოლოგია',
      'იმუნოლოგია',
      'ბიოქიმია',
      'კოაგულაცია',
    ],
  },
  {
    id: 'aesthetics',
    name: 'ესთეტიკა',
    subcategories: ['ყველა', 'ლაზერები', 'ინექციები', 'აპარატურა'],
  },
];

const products = [
  {
    id: '1',
    slug: 'sonoscape-e2',
    name: 'SONOSCAPE E2',
    description: 'ექოსკოპიის პორტატული მოწყობილობა',
    image: '/images/products/1.jpg',
  },
  {
    id: '2',
    slug: 'sonoscape-e3',
    name: 'SONOSCAPE E2',
    description: 'ექოსკოპიის პორტატული მოწყობილობა',
    image: '/images/products/1.jpg',
  },
  {
    id: '3',
    slug: 'sonoscape-e4',
    name: 'SONOSCAPE E2',
    description: 'ექოსკოპიის პორტატული მოწყობილობა',
    image: '/images/products/1.jpg',
  },
  {
    id: '4',
    slug: 'sonoscape-e5',
    name: 'SONOSCAPE E2',
    description: 'ექოსკოპიის პორტატული მოწყობილობა',
    image: '/images/products/1.jpg',
  },
  {
    id: '5',
    slug: 'sonoscape-e6',
    name: 'SONOSCAPE E2',
    description: 'ექოსკოპიის პორტატული მოწყობილობა',
    image: '/images/products/1.jpg',
  },
  {
    id: '6',
    slug: 'sonoscape-e6',
    name: 'SONOSCAPE E2',
    description: 'ექოსკოპიის პორტატული მოწყობილობა',
    image: '/images/products/1.jpg',
  },
  {
    id: '7',
    slug: 'sonoscape-e7',
    name: 'SONOSCAPE E2',
    description: 'ექოსკოპიის პორტატული მოწყობილობა',
    image: '/images/products/1.jpg',
  },
  {
    id: '8',
    slug: 'sonoscape-e8',
    name: 'SONOSCAPE E2',
    description: 'ექოსკოპიის პორტატული მოწყობილობა',
    image: '/images/products/1.jpg',
  },
  {
    id: '9',
    slug: 'sonoscape-e9',
    name: 'SONOSCAPE E2',
    description: 'ექოსკოპიის პორტატული მოწყობილობა',
    image: '/images/products/1.jpg',
  },
];

export function ProductCatalog() {
  const [activeCategory, setActiveCategory] = React.useState(categories[0].id);
  const [activeSubcategory, setActiveSubcategory] = React.useState('ყველა');

  const currentCategory = categories.find((c) => c.id === activeCategory);

  // Reset subcategory when category changes
  React.useEffect(() => {
    setActiveSubcategory('ყველა');
  }, [activeCategory]);

  return (
    <section className="py-16 lg:py-24">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {/* Category Tabs */}
          <div>
            <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto pb-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`shrink-0 flex-1 cursor-pointer whitespace-nowrap rounded-lg px-5 py-3 text-md font-medium transition-colors lg:shrink  ${
                    activeCategory === category.id
                      ? 'bg-primary border border-primary text-white'
                      : 'bg-white border border-primary/15 text-foreground hover:bg-primary/5'
                  }`}
                >
                  {category.name}
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
                  <li key={sub}>
                    <button
                      onClick={() => setActiveSubcategory(sub)}
                      className={`w-full cursor-pointer text-left text-md transition-colors ${
                        activeSubcategory === sub
                          ? 'font-semibold text-primary'
                          : 'text-foreground/70 hover:text-primary'
                      }`}
                    >
                      {sub}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Content */}
            <div className="lg:col-span-9">
              {/* Products Grid */}
              <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                {products.map((product) => (
                  <Link
                    key={product.id}
                    href={`/products/${product.slug}`}
                    className="group block"
                  >
                    {/* Image */}
                    <div className="relative h-70 overflow-hidden rounded-xl">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>

                    {/* Info */}
                    <div className="mt-8">
                      <h3 className="font-semibold text-lg text-foreground">
                        {product.name}
                      </h3>
                      <p className="mt-2 text-md text-foreground/70">
                        {product.description}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Load More Button */}
              <div className="mt-14 md:mt-16">
                <button className="cursor-pointer text-md font-medium text-primary underline underline-offset-12">
                  მაჩვენე მეტი
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

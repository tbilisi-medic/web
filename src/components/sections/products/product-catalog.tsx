'use client';

import * as React from 'react';

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
          {/* Title */}
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl leading-10">
            აღმოაჩინეთ მრავალფეროვანი
            <br />
            სამედიცინო პროდუქცია თქვენი კლინიკისთვის
          </h2>

          {/* Category Tabs */}
          <div className="mt-10">
            <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto pb-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`shrink-0 flex-1 cursor-pointer whitespace-nowrap rounded-lg px-5 py-3 text-md font-medium transition-colors lg:shrink  ${
                    activeCategory === category.id
                      ? 'bg-primary text-white'
                      : 'bg-gray-100 text-foreground hover:bg-gray-200'
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

            {/* Right Content - Product Grid Placeholder */}
            <div className="lg:col-span-9">
              <div className="flex h-100 items-center justify-center rounded-xl border-2 border-dashed border-gray-200">
                <p className="text-lg text-foreground/40">პროდუქტები</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

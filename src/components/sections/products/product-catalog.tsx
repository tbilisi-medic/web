'use client';

import * as React from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Checkbox } from '@/components/ui/checkbox';
import { Suspense } from 'react';

const categories = [
  {
    id: 'equipment',
    name: 'აპარატურა',
    subcategories: [
      { id: 'endoscopy', name: 'ენდოსკოპია' },
      { id: 'ultrasound', name: 'ექოსკოპია' },
      { id: 'laparoscopy', name: 'ლაპაროსკოპია' },
      { id: 'large-equipment', name: 'მსხვილი აპარატურა' },
      { id: 'ophthalmology', name: 'ოფთალმოლოგია' },
      { id: 'radiology', name: 'რადიოლოგია' },
      { id: 'medical-gas', name: 'სამედიცინო აირი' },
      { id: 'sterilization', name: 'სტერილიზაცია' },
      { id: 'gynecology', name: 'გინეკოლოგია' },
      { id: 'cardiology', name: 'კარდიოლოგია' },
      { id: 'dermatology', name: 'დერმატოლოგია' },
      { id: 'ent', name: 'ყელ-ყურ-ცხვირი' },
      { id: 'rehabilitation', name: 'რეაბილიტაცია' },
      { id: 'neonatology', name: 'ნეონატალოგია' },
      { id: 'neurology', name: 'ნევროლოგია' },
      { id: 'general-equipment', name: 'ზოგადი აპარატურა' },
    ],
  },
  {
    id: 'furniture',
    name: 'ავეჯი',
    subcategories: [
      { id: 'beds', name: 'საწოლები' },
      { id: 'tables', name: 'მაგიდები' },
      { id: 'chairs', name: 'სავარძლები' },
      { id: 'cabinets', name: 'კარადები' },
    ],
  },
  {
    id: 'consumables',
    name: 'სახარჯები',
    subcategories: [
      { id: 'bandages-gauze', name: 'ბინტები და მარლები' },
      { id: 'disinfection-sterilization', name: 'დეზინფექცია და სტერილიზაცია' },
      { id: 'instruments', name: 'ინსტრუმენტები' },
      { id: 'surgical-sets', name: 'ქირურგიული ანაწყობები' },
      { id: 'surgical-mesh-drains', name: 'ქირურგიული ბადე და დრენაჟები' },
      { id: 'surgical-sutures-adhesives', name: 'ქირურგიული ძაფები და წებო' },
      { id: 'plastic-surgery', name: 'პლასტიკური ქირურგია' },
      { id: 'printer-paper', name: 'საბეჭდი ქაღალდები' },
      { id: 'respiratory-systems', name: 'სასუნთქი სისტემები' },
      { id: 'syringes-infusion', name: 'შპრიცები და გადასხმის სისტემები' },
      { id: 'gloves', name: 'ხელთათმანები' },
      { id: 'gowns-drapes', name: 'ხალათები და ზეწრები' },
    ],
  },
  {
    id: 'laboratory',
    name: 'ლაბორატორია',
    subcategories: [
      { id: 'biochemistry', name: 'ბიოქიმია' },
      { id: 'blood-gases-electrolytes', name: 'გაზები და ელექტროლიტები' },
      { id: 'auxiliary-equipment', name: 'დამხმარე აპარატურა' },
      { id: 'veterinary-equipment', name: 'ვეტერინალური აპარატურა' },
      { id: 'elisa-tests', name: 'ელაიზა ტესტები' },
      { id: 'immunology', name: 'იმუნოლოგია' },
      { id: 'coagulation', name: 'კოაგულაცია' },
      { id: 'lab-consumables', name: 'სახარჯი მასალები' },
      { id: 'rapid-tests', name: 'სწრაფი ტესტები' },
      { id: 'urinalysis', name: 'შარდი' },
      { id: 'hematology', name: 'ჰემატოლოგია' },
    ],
  },
  {
    id: 'aesthetics',
    name: 'ესთეტიკა',
    subcategories: [
      { id: 'exosomes', name: 'ეგზოსომები' },
      { id: 'aesthetic-equipment', name: 'ესთეტიკური აპარატურა' },
      { id: 'eye-boosters', name: 'თვალის ბუსტერები' },
      { id: 'hair-boosters', name: 'თმის ბუსტერები' },
      { id: 'lipolytics-hyaluronidase', name: 'ლიპოლიტიკები და ჰიალურონიდაზა' },
      { id: 'lifting-threads', name: 'ლიფტინგის ძაფები' },
      { id: 'face-boosters', name: 'სახის ბუსტერები' },
      { id: 'body-fillers', name: 'ტანის ფილერები' },
      { id: 'fillers-hyaluronic-acid', name: 'ფილერები და ჰიალურონის მჟავა' },
    ],
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
    slug: 'sonoscape-e7',
    name: 'SONOSCAPE E2',
    description: 'ექოსკოპიის პორტატული მოწყობილობა',
    image: '/images/products/1.jpg',
  },
  {
    id: '7',
    slug: 'sonoscape-e8',
    name: 'SONOSCAPE E2',
    description: 'ექოსკოპიის პორტატული მოწყობილობა',
    image: '/images/products/1.jpg',
  },
  {
    id: '8',
    slug: 'sonoscape-e9',
    name: 'SONOSCAPE E2',
    description: 'ექოსკოპიის პორტატული მოწყობილობა',
    image: '/images/products/1.jpg',
  },
  {
    id: '9',
    slug: 'sonoscape-e10',
    name: 'SONOSCAPE E2',
    description: 'ექოსკოპიის პორტატული მოწყობილობა',
    image: '/images/products/1.jpg',
  },
];

function ProductCatalogContent() {
  const searchParams = useSearchParams();

  const [activeCategory, setActiveCategory] = React.useState(
    searchParams.get('category') || categories[0].id,
  );
  const [activeSubcategories, setActiveSubcategories] = React.useState<
    string[]
  >(searchParams.getAll('sub'));

  const currentCategory = categories.find((c) => c.id === activeCategory);

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
                        {sub.name}
                      </span>
                    </label>
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
                      <h3 className="font-semibold text-lg text-foreground uppercase">
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
                <button className="cursor-pointer text-md font-medium text-primary underline underline-offset-12 uppercase">
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

export function ProductCatalog() {
  return (
    <Suspense>
      <ProductCatalogContent />
    </Suspense>
  );
}

import Link from 'next/link';
import Image from 'next/image';
import { getTranslations } from 'next-intl/server';

const categories = [
  {
    titleKey: 'furniture',
    href: '/products?category=furniture',
    icon: '/images/categories/furniture.svg',
  },
  {
    titleKey: 'consumables',
    href: '/products?category=consumables',
    icon: '/images/categories/consumables.svg',
  },
  {
    titleKey: 'diagnostics',
    href: '/products?category=laboratory',
    icon: '/images/categories/diagnostics.svg',
  },
  {
    titleKey: 'aesthetic',
    href: '/products?category=aesthetics',
    icon: '/images/categories/aesthetic.svg',
  },
];

export async function Categories() {
  const t = await getTranslations('categories');

  return (
    <section>
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-dark text-xl font-bold sm:text-2xl uppercase">
            {t('title1')} <br />
            {t('title2')}
          </h2>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 lg:gap-6">
            {categories.map((category) => (
              <Link
                key={category.titleKey}
                href={category.href}
                className="flex items-center gap-4 rounded-xl border border-primary-light/50 bg-white p-5 py-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <Image
                  src={category.icon}
                  alt=""
                  width={40}
                  height={40}
                  className="h-10 w-10 shrink-0"
                />
                <span className="text-md text-dark">
                  {t(category.titleKey)}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

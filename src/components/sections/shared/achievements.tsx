import Link from 'next/link';
import Image from 'next/image';
import { getTranslations } from 'next-intl/server';

const posts = [
  {
    id: 1,
    titleKey: 'employees',
    descriptionKey: 'employeesDescription',
    image: '/images/categories/4.jpg',
    stat: '80+',
    href: '/employees',
  },
  {
    id: 2,
    titleKey: 'partners',
    descriptionKey: 'partnersDescription',
    image: '/images/categories/2.jpg',
    stat: '250+',
    href: '/partners',
  },
  {
    id: 3,
    titleKey: 'customers',
    descriptionKey: 'customersDescription',
    image: '/images/categories/3.jpg',
    stat: '300+',
    href: '/customers',
  },
];

export async function Achievements() {
  const t = await getTranslations('achievements');

  return (
    <section id="achievements">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {/* Headline */}
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl leading-10 uppercase uppercase">
            {t('title')}
          </h2>

          {/* Description */}
          <p className="mt-6 text-lg text-foreground/80">{t('subtitle')}</p>

          {/* Posts */}
          <div className="mt-12 space-y-8">
            {posts.map((post) => (
              <div
                key={post.id}
                className="grid items-center gap-6 lg:grid-cols-12 lg:gap-10 mt-10"
              >
                {/* Image */}
                <div className="lg:col-span-4">
                  <div className="relative h-60 overflow-hidden rounded-xl bg-gray-200">
                    <Image
                      src={post.image}
                      alt={post.titleKey}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="order-3 lg:order-2 lg:col-span-5">
                  <h3 className="text-xl font-bold text-primary lg:text-2xl uppercase">
                    {t(post.titleKey)}
                  </h3>
                  <p className="mt-5 text-lg text-foreground/80">
                    {t(post.descriptionKey)}
                  </p>
                  <div className="mt-8">
                    <Link
                      href={post.href}
                      className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-primary/90 uppercase"
                    >
                      {t('cta')}
                    </Link>
                  </div>
                </div>

                {/* Stat */}
                <div className="order-2 lg:order-3 lg:col-span-3 lg:text-right">
                  <span className="text-5xl font-bold text-primary lg:text-6xl">
                    {post.stat}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

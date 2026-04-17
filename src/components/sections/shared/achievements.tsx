import Link from 'next/link';
import Image from 'next/image';
import { getTranslations } from 'next-intl/server';
import { Button } from '@/components/ui/button';

const posts = [
  {
    id: 1,
    titleKey: 'employees',
    descriptionKey: 'employeesDescription',
    image: '/images/achievements/1.jpg',
    stat: '85+',
    href: '/employees',
  },
  {
    id: 2,
    titleKey: 'partners',
    descriptionKey: 'partnersDescription',
    image: '/images/achievements/2.jpg',
    stat: '200+',
    href: '/partners',
  },
  {
    id: 3,
    titleKey: 'customers',
    descriptionKey: 'customersDescription',
    image: '/images/achievements/3.jpg',
    stat: '350+',
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
          <h2 className="text-dark text-xl font-bold sm:text-2xl uppercase">
            {t('title')}
          </h2>

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
                  <h3 className="text-dark text-xl lg:text-2xl uppercase">
                    {t(post.titleKey)}
                  </h3>
                  <p className="mt-5 text-md text-dark">
                    {t(post.descriptionKey)}
                  </p>
                  <div className="mt-8">
                    <Button asChild>
                      <Link href={post.href}>{t('cta')}</Link>
                    </Button>
                  </div>
                </div>

                {/* Stat */}
                <div className="order-2 lg:order-3 lg:col-span-3 lg:text-right">
                  <span className="text-5xl font-semibold text-dark lg:text-[60px]">
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

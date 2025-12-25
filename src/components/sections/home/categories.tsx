import Link from 'next/link';
import Image from 'next/image';

const categories = [
  {
    title: 'ტექნოლოგია',
    href: '/',
    image: '/images/categories/1.jpg',
  },
  {
    title: 'ავეჯი',
    href: '/',
    image: '/images/categories/2.jpg',
  },
  {
    title: 'სახარჯები',
    href: '/',
    image: '/images/categories/3.jpg',
  },
  {
    title: 'ლაბორატორია',
    href: '/',
    image: '/images/categories/4.jpg',
  },
];

export function Categories() {
  return (
    <section className="py-16 lg:py-24">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl leading-10">
            {/* Headline */}
            აღმოაჩინეთ მრავალფეროვანი
            <br />
            სამედიცინო პროდუქცია თქვენი კლინიკისთვის
          </h2>

          {/* Grid */}
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:gap-6">
            {categories.map((category) => (
              <Link
                key={category.title}
                href={category.href}
                className="group relative block h-70 md:h-100 overflow-hidden rounded-xl bg-gray-200"
              >
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                {/* Title */}
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-2xl font-semibold text-white">
                    {category.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

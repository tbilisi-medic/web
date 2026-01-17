import Link from 'next/link';
import Image from 'next/image';

const posts = [
  {
    id: 1,
    title: 'თანამშრომლები',
    description:
      'თანამშრომლების უპრეცედენტო რაოდენობა და ბაზრისთვის გამორჩეული ორგანიზაციული მართვის მეთოდი.',
    image: '/images/categories/4.jpg',
    stat: '80+',
    href: '/employees',
  },
  {
    id: 2,
    title: 'საერთაშორისო პარტნიორები',
    description:
      'მსოფლიოში წამყვანი სამედიცინო ბრენდები და მწარმოებლები ერთ სივრცეში.',
    image: '/images/categories/2.jpg',
    stat: '100+',
    href: '/partners',
  },
  {
    id: 3,
    title: 'კმაყოფილი მომხმარებლები',
    description:
      'უამრავი კმაყოფილი ადგილობრივი მომხმარებელი და უთვალავი წარმატებული განხორციელებული პროექტი.',
    image: '/images/categories/3.jpg',
    stat: '300+',
    href: '/',
  },
];

export function BlogPreview() {
  return (
    <section className="lg:pt-6">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {/* Headline */}
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl leading-10">
            მონაგარი
          </h2>

          {/* Description */}
          <p className="mt-6 text-lg text-foreground/80">
            საქართველოს მასშტაბით თბილისი მედიკი წარმოადგენს ერთ-ერთ უმსხვილეს
            კონტრიბუტორს სამედიცინო პროდუქციის დისტრიბუციისა და მომსახურების
            დარგში. კომპანია წარმატებით ახორციელებს პროდუქციის ფართო სპექტრის,
            ვიწრო დარგობრივ ჯგუფებად განვითარებასა და რეალიზაციას.
          </p>

          {/* Posts */}
          <div className="mt-12 space-y-8">
            {posts.map((post) => (
              <div
                key={post.id}
                className="grid items-center gap-6 lg:grid-cols-12 lg:gap-10 mb-10"
              >
                {/* Image */}
                <div className="lg:col-span-4">
                  <div className="relative h-60 overflow-hidden rounded-xl bg-gray-200">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="order-3 lg:order-2 lg:col-span-5">
                  <h3 className="text-xl font-bold text-primary lg:text-2xl">
                    {post.title}
                  </h3>
                  <p className="mt-5 text-lg text-foreground/80">
                    {post.description}
                  </p>
                  <div className="mt-8">
                    <Link
                      href={post.href}
                      className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-primary/90"
                    >
                      სრულად
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

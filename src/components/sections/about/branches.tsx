import Image from 'next/image';
import Link from 'next/link';

const branches = [
  {
    id: 1,
    name: 'თბილისი',
    sectionId: 'tbilisi',
    description:
      'საქართველოს მასშტაბით თბილისი მედიკი წარმოადგენს ერთ-ერთ უმსხვილეს კონტრიბუტორს სამედიცინო პროდუქციის დისტრიბუციისა და მომსახურების დარგში. კომპანია წარმატებით ახორციელებს პროდუქციის ფართო სპექტრის, ვიწრო დარგობრივ ჯგუფებად განვითარებასა და რეალიზაციას.',
    image: '/images/categories/1.jpg',
    href: '/',
  },
  {
    id: 2,
    name: 'ქუთაისი',
    sectionId: 'kutaisi',
    description:
      'საქართველოს მასშტაბით თბილისი მედიკი წარმოადგენს ერთ-ერთ უმსხვილეს კონტრიბუტორს სამედიცინო პროდუქციის დისტრიბუციისა და მომსახურების დარგში. კომპანია წარმატებით ახორციელებს პროდუქციის ფართო სპექტრის, ვიწრო დარგობრივ ჯგუფებად განვითარებასა და რეალიზაციას.',
    image: '/images/categories/2.jpg',
    href: '/',
  },
  {
    id: 3,
    name: 'ბათუმი',
    sectionId: 'batumi',
    description:
      'საქართველოს მასშტაბით თბილისი მედიკი წარმოადგენს ერთ-ერთ უმსხვილეს კონტრიბუტორს სამედიცინო პროდუქციის დისტრიბუციისა და მომსახურების დარგში. კომპანია წარმატებით ახორციელებს პროდუქციის ფართო სპექტრის, ვიწრო დარგობრივ ჯგუფებად განვითარებასა და რეალიზაციას.',
    image: '/images/categories/3.jpg',
    href: '/',
  },
];

export function Branches() {
  return (
    <section className="py-16 sm:pt-0 lg:py-24 lg:pt-0 lg:pb-40">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {/* Title */}
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
            ფილიალები
          </h2>

          {/* Description */}
          <p className="mt-6 text-lg text-foreground/80">
            საქართველოს მასშტაბით თბილისი მედიკი წარმოადგენს ერთ-ერთ უმსხვილეს
            კონტრიბუტორს სამედიცინო პროდუქციის დისტრიბუციისა და მომსახურების
            დარგში. კომპანია წარმატებით ახორციელებს პროდუქციის ფართო სპექტრის,
            ვიწრო დარგობრივ ჯგუფებად განვითარებასა და რეალიზაციას.
          </p>

          {/* Branch Cards */}
          <div className="mt-15 space-y-14">
            {branches.map((branch, index) => {
              const isReversed = index % 2 === 0;

              return (
                <div
                  key={branch.id}
                  id={branch.sectionId}
                  className="grid items-center lg:grid-cols-2 gap-8 py-5 lg:gap-16"
                >
                  {/* Text */}
                  <div
                    className={`order-2 ${
                      isReversed ? 'lg:order-2' : 'lg:order-1'
                    }`}
                  >
                    <h3 className="text-xl font-bold text-primary lg:text-2xl">
                      {branch.name}
                    </h3>
                    <p className="mt-5 mb-8 text-lg text-foreground/80">
                      {branch.description}
                    </p>
                    <div className="mt-6">
                      <Link
                        href={branch.href}
                        className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-primary/90"
                      >
                        როგორ გვიპოვოთ?
                      </Link>
                    </div>
                  </div>

                  {/* Image */}
                  <div
                    className={`order-1 ${
                      isReversed ? 'lg:order-1' : 'lg:order-2'
                    }`}
                  >
                    <div className="relative h-60 overflow-hidden rounded-2xl bg-gray-200 sm:h-80">
                      <Image
                        src={branch.image}
                        alt={branch.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

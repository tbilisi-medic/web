import Image from 'next/image';

const images = ['/images/categories/3.jpg', '/images/categories/4.jpg'];

export function Mission() {
  return (
    <section className="pt-10 pb-12 lg:py-24 lg:pt-16">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {/* Title */}
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
            მისია და ხედვა
          </h2>

          {/* Description */}
          <p className="mt-6 text-lg text-foreground/80">
            საქართველოს მასშტაბით თბილისი მედიკი წარმოადგენს ერთ-ერთ უმსხვილეს
            კონტრიბუტორს სამედიცინო პროდუქციის დისტრიბუციისა და მომსახურების
            დარგში. კომპანია წარმატებით ახორციელებს პროდუქციის ფართო სპექტრის,
            ვიწრო დარგობრივ ჯგუფებად განვითარებასა და რეალიზაციას.
          </p>

          {/* Images */}
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:gap-6">
            {images.map((src, i) => (
              <div
                key={i}
                className="relative h-64 overflow-hidden rounded-2xl bg-gray-200 sm:h-80 lg:h-90"
              >
                <Image
                  src={src}
                  alt={`მისია და ხედვა ${i + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

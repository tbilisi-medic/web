import Image from 'next/image';

const images = ['/images/categories/1.jpg', '/images/categories/2.jpg'];

export function AboutContent() {
  return (
    <section className="py-16 lg:py-24">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left: Images */}
            <div className="flex flex-col gap-4">
              {images.map((src, i) => (
                <div
                  key={i}
                  className="relative flex-1 min-h-70 overflow-hidden rounded-2xl bg-gray-200"
                >
                  <Image
                    src={src}
                    alt={`ჩვენს შესახებ ${i + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Right: Text content */}
            <div>
              <h2 className="text-2xl font-bold text-primary sm:text-3xl lg:text-4xl">
                ჩვენს შესახებ
              </h2>

              <div className="mt-8 space-y-6 text-base text-foreground/80 lg:text-lg">
                <p>
                  საქართველოს მასშტაბით თბილისი მედიკი წარმოადგენს ერთ-ერთ
                  უმსხვილეს კონტრიბუტორს სამედიცინო პროდუქციის დისტრიბუციისა და
                  მომსახურების დარგში. კომპანია წარმატებით ახორციელებს
                  პროდუქციის ფართო სპექტრის, ვიწრო დარგობრივ ჯგუფებად
                  განვითარებასა და რეალიზაციას.
                </p>

                <p>
                  კომპანიის კორპორაციული მიმართულება უმნიშვნელოვანეს როლს
                  ასრულებს ქვეყნის ჯანდაცვის სექტორის განვითარებასა და
                  საერთაშორისო სტანდარტების დაკმაყოფილების პროცესში.
                </p>

                <p>
                  ამავდროულად, კომპანია მიზნად ისახავს საუკეთესო სამომხმარებლო
                  გამოცდილება შეუქმნას სამედიცინო პროფილის ინსტიტუტებს, რასაც
                  ხაზს უსვამს კომპანიაში, სამუშაო სექტორისთვის ინოვაციური
                  ორგანიზაციული მართვის, „ეჯაილ" მეთოდის იმპლემენტაცია და
                  თბილისის გარდა, დამატებითი ფილიალების გახსნა ქუთაისსსა და
                  ბათუმში.
                </p>

                <p>
                  კომპანიის კორპორაციული მიმართულება უმნიშვნელოვანეს როლს
                  ასრულებს ქვეყნის ჯანდაცვის სექტორის განვითარებასა და
                  საერთაშორისო სტანდარტების დაკმაყოფილების პროცესში.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

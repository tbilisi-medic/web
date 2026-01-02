import Image from 'next/image';

const images = ['/images/categories/1.jpg', '/images/categories/2.jpg'];

export function CareersContent() {
  return (
    <section className="py-16 lg:py-24 lg:pb-20">
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
              <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
                კარიერა თბილისი მედიკში
              </h2>

              <div className="mt-8 space-y-6 text-lg text-foreground/80">
                <p>
                  თბილისი მედიკში სამუშაო გარემო გამოირჩევა პროფესიონალიზმით და
                  ურთიერთპატივისცემაზე დაფუძნებული ურთიერთობებით. ორგანიზაცია
                  განსაკუთრებულ ყურადღებას უთმობს თანამშრომლების
                  პასუხისმგებლობების მკაფიო განსაზღვრას, რაც უზრუნველყოფს
                  სამუშაო პროცესების ეფექტურობასა და ყოველდღიური საქმიანობის
                  გამჭვირვალობას.
                </p>

                <p>
                  კომპანიაში წახალისებულია გუნდური მუშაობა, ღია კომუნიკაცია და
                  გამოცდილების გაზიარება. თანამშრომლებს ეძლევათ შესაძლებლობა,
                  აქტიურად ჩაერთონ გადაწყვეტილებების მიღების პროცესში, რაც ზრდის
                  მათ ჩართულობასა და პროფესიულ მოტივაციას. ხელმძღვანელობა ხელს
                  უწყობს ინიციატივების მხარდაჭერასა და თანამშრომელთა
                  განვითარებას.
                </p>

                <p>
                  თბილისი მედიკი ორიენტირებულია მუდმივ გაუმჯობესებასა და
                  თანამედროვე სტანდარტების დანერგვაზე. სამუშაო გარემო ქმნის
                  სტაბილურ და მხარდაჭერით სავსე ატმოსფეროს, სადაც ფასდება როგორც
                  პროფესიული კომპეტენცია, ისე პასუხისმგებლიანი დამოკიდებულება
                  საერთო მიზნების მიმართ.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

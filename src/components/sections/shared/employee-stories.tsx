import Link from 'next/link';
import Image from 'next/image';

const posts = [
  {
    id: 1,
    title: 'ელენე ბუაჩიძე | მთავარი იურისტი',
    description:
      'გაიგეთ მეტი თბილისი მედიკის მთავარი იურისტის, ელენე ბუაჩიძის მედიკური მოგზაურობის შესახებ.',
    image: '/images/categories/4.jpg',
    href: '/',
  },
  {
    id: 2,
    title: 'დავით ჯიშკარიანი | მარკეტინგის გუნდის ხელმძღვანელი',
    description:
      'გაიგეთ მეტი თბილისი მედიკის მარკეტინგის ხელმძღვანელის, დავით ჯიშკარიანის მედიკური მოგზაურობის შესახებ.',
    image: '/images/categories/2.jpg',
    href: '/',
  },
  {
    id: 3,
    title: 'გოგა მაზიაშვილი | საოპერაციო დირექტორი',
    description:
      'გაიგეთ მეტი თბილისი მედიკის საოპერაციო დირექტორის, გოგა მაზიაშვილის მედიკური მოგზაურობის შესახებ.',
    image: '/images/categories/3.jpg',
    href: '/',
  },
];

export function EmployeeStories() {
  return (
    <section className="lg:pt-6 mb-30">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {/* Headline */}
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl leading-10">
            ადამიანების დღიურები
          </h2>

          {/* Description */}
          <p className="mt-6 text-lg text-foreground/80">
            გაიგეთ ადამიანების ყოველდღიურობაზე, პროფესიულ გზაზე და პირად
            გამოცდილებაზე. ამ სტატიების საშუალებით მკითხველი გაეცნობა ადამიანებს
            კომპანიის მიღმა, მათ ხედვებს, გამოწვევებსა და მოტივაციას, რაც ქმნის
            უფრო ახლო, ავთენტურ და ადამიანურ სურათს ორგანიზაციის შიდა კულტურის
            შესახებ.
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
                <div className="lg:col-span-8">
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

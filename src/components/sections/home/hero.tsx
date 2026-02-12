import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

export function Hero() {
  return (
    <section className="-mt-24 bg-primary pt-24">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl pb-14 pt-14 lg:pb-15 lg:pt-15">
          <div className="grid items-center gap-10 lg:gap-2 lg:grid-cols-2">
            {/* Left: Text content */}
            <div>
              <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-5xl uppercase">
                ქართული მედიცინისთვის
              </h1>
              <p className="mt-10 text-lg text-white/80 sm:text-xl">
                სამედიცინო დარგის კვალიფიციური პარტნიორი
              </p>
              <div className="mt-15">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 rounded-lg bg-transparent border border-white px-5 py-3 text-md font-semibold text-white transition-colors hover:bg-white/90 hover:text-primary uppercase"
                >
                  გაიგე მეტი
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            {/* Right: Image placeholder */}
            <div className="relative">
              <div className="h-100 overflow-hidden rounded-xl bg-white/10">
                <Image
                  src="/images/categories/2.jpg"
                  alt=""
                  fill
                  className="object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

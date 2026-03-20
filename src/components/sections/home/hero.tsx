import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { getTranslations } from 'next-intl/server';

export async function Hero() {
  const t = await getTranslations('hero');

  return (
    <section className="pt-28 lg:pt-30 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl relative overflow-hidden rounded-xl bg-primary">
        <div className="relative z-10 px-8 py-16 lg:px-14 lg:py-20">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-5xl uppercase">
              {t('title')}
            </h1>
            <p className="mt-10 text-lg font-semibold text-white sm:text-xl">
              {t('subtitle')}
            </p>
            <div className="mt-15">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 rounded-lg bg-transparent border border-white px-5 py-3 text-md font-semibold text-white transition-colors hover:bg-white/90 hover:text-primary uppercase"
              >
                {t('cta')}
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute right-0 top-0 bottom-0 w-1/2 pointer-events-none hidden lg:block">
          <Image
            src="/images/hero/bg.png"
            alt=""
            fill
            className="object-cover object-right"
            priority
          />
        </div>
      </div>
    </section>
  );
}

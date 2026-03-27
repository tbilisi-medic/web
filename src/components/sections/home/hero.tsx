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
            <h1 className="text-3xl font-bold leading-tight text-white lg:text-[40px] uppercase">
              {t('title')}
            </h1>
            <p className="mt-10 text-lg font-semibold text-white lg:text-2xl">
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

        <div className="absolute inset-0 pointer-events-none">
          <Image
            src="/images/hero/bg.svg"
            alt=""
            fill
            className="object-cover sm:object-contain object-right"
            priority
          />
        </div>
      </div>
    </section>
  );
}

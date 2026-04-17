import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { getTranslations } from 'next-intl/server';
import { Button } from '@/components/ui/button';

export async function Hero() {
  const t = await getTranslations('hero');

  return (
    <section className="pt-28 lg:pt-30 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl relative overflow-hidden rounded-xl bg-gradient-to-b from-primary to-primary-dark">
        <div className="relative z-10 px-8 py-15 lg:px-15 lg:py-15">
          <div className="max-w-2xl">
            <Image
              src="/images/slogan.svg"
              alt={t('title')}
              width={370}
              height={77}
              priority
            />
            <p className="mt-10 text-md text-white lg:text-md uppercase">
              {t('subtitle')}
            </p>
            <div className="mt-15">
              <Button asChild>
                <Link href="/about">{t('cta')}</Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute inset-0 pointer-events-none">
          <Image
            src="/images/hero/bg.svg"
            alt=""
            fill
            className="object-cover lg:object-contain object-right"
            priority
          />
        </div>
      </div>
    </section>
  );
}

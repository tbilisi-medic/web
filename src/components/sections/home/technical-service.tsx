'use client';

import Image from 'next/image';
import { Phone } from 'lucide-react';
import { ContactDialog } from '@/components/sections/home';
import { useTranslations } from 'next-intl';

export function TechnicalService() {
  const t = useTranslations('technical-service');

  return (
    <section className="relative">
      {/* Blue background */}
      <div className="absolute inset-x-0 top-0 h-[70%] bg-primary" />
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="relative mx-auto max-w-7xl pt-16 lg:pt-18">
          {/* Headline */}
          <h2 className="text-2xl font-bold text-white sm:text-3xl leading-10 uppercase">
            {t('title1')} <br />
            {t('title2')}
          </h2>

          {/* Card */}
          <div className="relative mt-16 h-90 overflow-hidden rounded-b-xl lg:mt-18 lg:h-110">
            {/* Image - full card background */}
            <Image
              src="/images/categories/3.jpg"
              alt="ტექნიკური მომსახურება"
              fill
              className="rounded-xl object-cover"
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/60 via-40% to-transparent" />

            {/* Content */}
            <div className="relative z-10 flex h-full flex-col justify-between p-8 lg:p-12">
              {/* Title */}
              <h3 className="text-3xl leading-snug font-bold text-white text-shadow-[0_1px_2px_rgba(0,0,0,0.25)] uppercase">
                {t('subtitle1')} <br />
                {t('subtitle2')}
              </h3>

              {/* Button */}
              <div>
                <ContactDialog>
                  <button className="inline-flex cursor-pointer items-center gap-2 rounded-lg bg-transparent border border-white px-5 py-3 text-md font-semibold text-white transition-colors hover:bg-white/90 hover:text-primary uppercase">
                    {t('cta')}
                    <Phone size={16} />
                  </button>
                </ContactDialog>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

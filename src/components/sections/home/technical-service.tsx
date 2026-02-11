'use client';

import Image from 'next/image';
import { Phone } from 'lucide-react';
import { ContactDialog } from '@/components/sections/home';

export function TechnicalService() {
  return (
    <section className="relative">
      {/* Blue background */}
      <div className="absolute inset-x-0 top-0 h-[70%] bg-primary" />
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="relative mx-auto max-w-7xl py-16 lg:py-18">
          {/* Headline */}
          <h2 className="text-2xl font-bold text-white sm:text-3xl leading-10">
            მიიღეთ კვალიფიციური და
            <br />
            სერთიფიცირებული საინჟინრო მომსახურება
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
              <h3 className="max-w-md text-2xl font-bold text-white sm:text-3xl">
                ტექნიკური მომსახურება
              </h3>

              {/* Button */}
              <div>
                <ContactDialog>
                  <button className="inline-flex cursor-pointer items-center gap-2 rounded-lg bg-transparent border border-white px-5 py-3 text-md font-semibold text-white transition-colors hover:bg-white/90 hover:text-primary">
                    მოითხოვე ზარი
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

'use client';

import * as React from 'react';
import { Star } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from '@/components/ui/carousel';
import { useTranslations } from 'next-intl';

const testimonials = [
  {
    id: 1,
    nameKey: 'name1',
    role: 'გაგუას კლინიკის დირექტორი',
    companyKey: 'company1',
    logo: '/images/testimonials/1.png',
    rating: 5,
    textKey: 'text1',
  },
  {
    id: 2,
    nameKey: 'name2',
    role: 'გაგუას კლინიკის დირექტორი',
    companyKey: 'company2',
    logo: '/images/testimonials/1.png',
    rating: 5,
    textKey: 'text2',
  },
  {
    id: 3,
    nameKey: 'name3',
    role: 'გაგუას კლინიკის დირექტორი',
    companyKey: 'company3',
    logo: '/images/testimonials/1.png',
    rating: 5,
    textKey: 'text3',
  },
  {
    id: 4,
    nameKey: 'name4',
    role: 'გაგუას კლინიკის დირექტორი',
    companyKey: 'company4',
    logo: '/images/testimonials/1.png',
    rating: 5,
    textKey: 'text4',
  },
];

export function Testimonials() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const t = useTranslations('testimonials');

  return (
    <section>
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {/* Headline */}
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl leading-10 uppercase">
            {t('title')}
          </h2>

          {/* Description */}
          <p className="mt-6 text-lg text-foreground/80">{t('subtitle')}</p>

          {/* Carousel */}
          <div className="mt-12">
            <Carousel
              setApi={setApi}
              opts={{
                align: 'start',
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-4">
                {testimonials.map((testimonial) => (
                  <CarouselItem
                    key={testimonial.id}
                    className="pl-4 md:basis-1/2 lg:basis-1/3"
                  >
                    <div className="flex h-full flex-col rounded-xl border-1 border-primary-light/50 bg-white p-6 py-8 shadow-sm">
                      <div className="flex gap-1">
                        {Array.from({ length: testimonial.rating }).map(
                          (_, i) => (
                            <Star
                              key={i}
                              size={17}
                              className="fill-primary-light text-primary-light"
                            />
                          ),
                        )}
                      </div>

                      {/* Quote */}
                      <p className="mt-8 flex-grow text-lg text-foreground/80">
                        &ldquo;{t(testimonial.textKey)}&rdquo;
                      </p>

                      <div className="mt-8 pt-4">
                        <p className="font-semibold text-foreground text-lg uppercase">
                          {t(testimonial.nameKey)}
                        </p>
                        <p className="text-lg text-foreground/70">
                          {t(testimonial.companyKey)}
                        </p>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>

              {/* Navigation */}
              <div className="mt-8 flex items-center justify-center">
                <div className="flex gap-2">
                  {Array.from({ length: count }).map((_, i) => (
                    <button
                      key={i}
                      onClick={() => api?.scrollTo(i)}
                      className={`h-2 cursor-pointer rounded-full transition-all ${
                        current === i
                          ? 'w-8 bg-primary-light'
                          : 'w-8 bg-primary/15'
                      }`}
                      aria-label={`Go to slide ${i + 1}`}
                    />
                  ))}
                </div>
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}

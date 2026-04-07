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
import Autoplay from 'embla-carousel-autoplay';

const testimonials = [
  {
    id: 1,
    nameKey: 'name1',
    companyKey: 'company1',
    rating: 5,
    textKey: 'text1',
  },
  {
    id: 2,
    nameKey: 'name2',
    companyKey: 'company2',
    rating: 5,
    textKey: 'text2',
  },
  {
    id: 3,
    nameKey: 'name3',
    companyKey: 'company3',
    rating: 5,
    textKey: 'text3',
  },
  {
    id: 4,
    nameKey: 'name4',
    companyKey: 'company4',
    rating: 5,
    textKey: 'text4',
  },
  {
    id: 5,
    nameKey: 'name5',
    companyKey: 'company5',
    rating: 5,
    textKey: 'text5',
  },
  {
    id: 6,
    nameKey: 'name6',
    companyKey: 'company6',
    rating: 5,
    textKey: 'text6',
  },
  {
    id: 7,
    nameKey: 'name7',
    companyKey: 'company7',
    rating: 5,
    textKey: 'text7',
  },
  {
    id: 8,
    nameKey: 'name8',
    companyKey: 'company8',
    rating: 5,
    textKey: 'text8',
  },
  {
    id: 9,
    nameKey: 'name9',
    companyKey: 'company9',
    rating: 5,
    textKey: 'text9',
  },
  {
    id: 10,
    nameKey: 'name10',
    companyKey: 'company10',
    rating: 5,
    textKey: 'text10',
  },
];

export function Testimonials() {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: false, stopOnMouseEnter: true }),
  );

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
          <h2 className="text-dark text-xl font-semibold sm:text-2xl uppercase">
            {t('title')}
          </h2>

          {/* Carousel */}
          <div className="mt-12">
            <Carousel
              setApi={setApi}
              opts={{
                align: 'start',
                loop: true,
              }}
              plugins={[plugin.current]}
              className="w-full"
            >
              <CarouselContent className="-ml-4">
                {testimonials.map((testimonial) => (
                  <CarouselItem
                    key={testimonial.id}
                    className="pl-4 md:basis-1/2 lg:basis-1/3"
                  >
                    <div className="flex h-full flex-col rounded-xl border border-primary-light/50 bg-white p-6 py-8 shadow-sm">
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
                      <p className="mt-8 flex-grow text-md text-dark">
                        &ldquo;{t(testimonial.textKey)}&rdquo;
                      </p>

                      <div className="mt-8 pt-4">
                        <p className="font-semibold text-dark text-md uppercase">
                          {t(testimonial.nameKey)}
                        </p>
                        <p className="text-md text-dark">
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
                      className={`h-3 cursor-pointer rounded-full transition-all ${
                        current === i
                          ? 'w-4 bg-primary-light'
                          : 'w-4 bg-primary/15'
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

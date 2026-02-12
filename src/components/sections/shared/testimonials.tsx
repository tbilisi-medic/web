'use client';

import * as React from 'react';
import { Star } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from '@/components/ui/carousel';

const testimonials = [
  {
    id: 1,
    name: 'ირაკლი გაგუა',
    role: 'გაგუას კლინიკის დირექტორი',
    company: 'გაგუას კლინიკა',
    logo: '/images/testimonials/1.png',
    rating: 5,
    text: 'საბეჭდი და ტიპოგრაფიული ინდუსტრიის უშინაარსო ტექსტია. იგი სტანდარტად 1500-იანი წლებიდან იქცა, როდესაც უცნობმა მბეჭდავმა ამწყობ დაზგაზე წიგნის საცდელი ეგზემპლარი დაბეჭდა. მისი ტექსტი არამარტო 5 საუკუნის მანძილზე შემორჩა, არამედ მან დღემდე, ელექტრონული ტიპოგრაფიის დრომდეც უცვლელად მოაღწია',
  },
  {
    id: 2,
    name: 'ირაკლი გაგუა',
    role: 'გაგუას კლინიკის დირექტორი',
    company: 'გაგუას კლინიკა',
    logo: '/images/testimonials/1.png',
    rating: 5,
    text: 'საბეჭდი და ტიპოგრაფიული ინდუსტრიის უშინაარსო ტექსტია. იგი სტანდარტად 1500-იანი წლებიდან იქცა, როდესაც უცნობმა მბეჭდავმა ამწყობ დაზგაზე წიგნის საცდელი ეგზემპლარი დაბეჭდა. მისი ტექსტი არამარტო 5 საუკუნის მანძილზე შემორჩა, არამედ მან დღემდე, ელექტრონული ტიპოგრაფიის დრომდეც უცვლელად მოაღწია',
  },
  {
    id: 3,
    name: 'ირაკლი გაგუა',
    role: 'გაგუას კლინიკის დირექტორი',
    company: 'გაგუას კლინიკა',
    logo: '/images/testimonials/1.png',
    rating: 5,
    text: 'საბეჭდი და ტიპოგრაფიული ინდუსტრიის უშინაარსო ტექსტია. იგი სტანდარტად 1500-იანი წლებიდან იქცა, როდესაც უცნობმა მბეჭდავმა ამწყობ დაზგაზე წიგნის საცდელი ეგზემპლარი დაბეჭდა. მისი ტექსტი არამარტო 5 საუკუნის მანძილზე შემორჩა, არამედ მან დღემდე, ელექტრონული ტიპოგრაფიის დრომდეც უცვლელად მოაღწია',
  },
  {
    id: 4,
    name: 'ირაკლი გაგუა',
    role: 'გაგუას კლინიკის დირექტორი',
    company: 'გაგუას კლინიკა',
    logo: '/images/testimonials/1.png',
    rating: 5,
    text: 'საბეჭდი და ტიპოგრაფიული ინდუსტრიის უშინაარსო ტექსტია. იგი სტანდარტად 1500-იანი წლებიდან იქცა, როდესაც უცნობმა მბეჭდავმა ამწყობ დაზგაზე წიგნის საცდელი ეგზემპლარი დაბეჭდა. მისი ტექსტი არამარტო 5 საუკუნის მანძილზე შემორჩა, არამედ მან დღემდე, ელექტრონული ტიპოგრაფიის დრომდეც უცვლელად მოაღწია',
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

  return (
    <section>
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {/* Headline */}
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl leading-10 uppercase">
            გამოხმაურება
          </h2>

          {/* Description */}
          <p className="mt-6 text-lg text-foreground/80">
            საქართველოს მასშტაბით, მედიკმა არაერთ წარმატებულ პროექტს ჩაუყარა
            საფუძველი, რაც გვაძლიერებს და გვეხმარება სამედიცინო დარგის
            წარმომადგენლებთან გრძელვადიანი პარტნიორული ურთიერთობების შენებასა და
            შენარჩუნებაში.
          </p>

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
                        &ldquo;{testimonial.text}&rdquo;
                      </p>

                      <div className="mt-8 pt-4">
                        <p className="font-semibold text-foreground text-lg uppercase">
                          {testimonial.name}
                        </p>
                        <p className="text-lg text-foreground/70">
                          {testimonial.company}
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

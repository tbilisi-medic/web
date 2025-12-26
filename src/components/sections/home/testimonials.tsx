'use client';

import * as React from 'react';
import Image from 'next/image';
import { Star } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
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

  React.useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section className="pt-14 pb-12 lg:py-24 lg:pb-16">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {/* Headline */}
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl leading-10">
            გამოხმაურება
          </h2>

          {/* Description */}
          <p className="mt-6 text-lg text-foreground/80">
            საქართველოს მასშტაბით თბილისი მედიკი წარმოადგენს ერთ-ერთ უმსხვილეს
            კონტრიბუტორს სამედიცინო პროდუქციის დისტრიბუციისა და მომსახურების
            დარგში. კომპანია წარმატებით ახორციელებს პროდუქციის ფართო სპექტრის,
            ვინრო დარგობრივ ჯგუფებად განვითარებასა და რეალიზაციას.
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
                    <div className="flex h-full flex-col rounded-xl bg-gray-100 p-6 py-8">
                      {/* Stars */}
                      <div className="flex gap-1">
                        {Array.from({ length: testimonial.rating }).map(
                          (_, i) => (
                            <Star
                              key={i}
                              size={18}
                              className="fill-primary text-primary"
                            />
                          )
                        )}
                      </div>

                      {/* Quote */}
                      <p className="mt-4 flex-grow text-lg text-foreground/80">
                        &ldquo;{testimonial.text}&rdquo;
                      </p>

                      {/* Author */}
                      <div className="mt-6 flex items-center gap-4 pt-6">
                        {/* Logo */}
                        <div className="relative h-12 w-12 overflow-hidden rounded-xl">
                          <Image
                            src={testimonial.logo}
                            alt={testimonial.company}
                            fill
                            className="object-contain p-1"
                          />
                        </div>

                        <div>
                          <p className="font-semibold text-foreground text-lg">
                            {testimonial.name}
                          </p>
                          <p className="text-md text-foreground/60">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>

              {/* Navigation */}
              <div className="mt-8 flex items-center justify-between">
                {/* Dots */}
                <div className="hidden gap-2 lg:flex">
                  {testimonials.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => api?.scrollTo(i)}
                      className={`h-3 w-3 cursor-pointer rounded-full transition-colors ${
                        current === i ? 'bg-primary' : 'bg-primary/20'
                      }`}
                      aria-label={`Go to slide ${i + 1}`}
                    />
                  ))}
                </div>

                {/* Arrows */}
                <div className="flex gap-2">
                  <CarouselPrevious className="static translate-y-0 cursor-pointer border-primary text-primary shadow-none hover:bg-white p-4" />
                  <CarouselNext className="static translate-y-0 cursor-pointer border-primary text-primary shadow-none hover:bg-white p-4" />
                </div>
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}

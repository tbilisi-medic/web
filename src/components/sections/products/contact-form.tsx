'use client';

import * as React from 'react';
import Image from 'next/image';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export function ContactForm() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Will integrate with Supabase later
    console.log('Form submitted');
  };

  return (
    <section>
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-xl border border-primary-light/50 p-8 lg:p-10">
            {/* Title */}
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl uppercase">
              ჩვენ დაგიკავშირდებით
            </h2>

            {/* Content */}
            <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:gap-16">
              {/* Left - Image */}
              <div className="relative h-64 overflow-hidden rounded-xl sm:h-80 lg:h-full lg:min-h-[370px]">
                <Image
                  src="/images/categories/1.jpg"
                  alt="დაგვიკავშირდით"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Right - Form */}
              <div className="flex flex-col justify-end">
                <p className="text-foreground text-2xl font-bold">
                  შეიყვანეთ საკონტაქტო ინფორმაცია
                </p>

                <form onSubmit={handleSubmit} className="mt-8 space-y-4">
                  <Input
                    type="text"
                    placeholder="სახელი, გვარი"
                    className="h-12 rounded-lg bg-white px-4 text-foreground placeholder:text-md placeholder:text-foreground/50 !text-base placeholder:!text-base"
                  />
                  <Input
                    type="tel"
                    placeholder="ტელეფონის ნომერი"
                    className="h-12 rounded-lg bg-white px-4 text-foreground placeholder:text-foreground/50 !text-base placeholder:!text-base"
                  />
                  <Input
                    type="email"
                    placeholder="ელ. ფოსტა"
                    className="h-12 rounded-lg bg-white px-4 text-foreground placeholder:text-foreground/50 !text-base placeholder:!text-base"
                  />
                  <Button
                    type="submit"
                    className="h-12 text-md cursor-pointer w-full font-semibold rounded-lg bg-primary text-white hover:bg-primary/90 uppercase"
                  >
                    მოთხოვნის გაგზავნა
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

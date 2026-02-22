'use client';

import * as React from 'react';
import Image from 'next/image';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export function ContactForm() {
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          phone,
          email,
          source: 'contact',
        }),
      });

      if (res.ok) {
        setIsSuccess(true);
        setName('');
        setPhone('');
        setEmail('');
      }
    } catch (error) {
      console.error('Failed to submit:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const [name, setName] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);

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
                    className="h-13 rounded-lg border border-gray-300 bg-white px-4 text-foreground placeholder:text-md placeholder:text-foreground/50 !text-base placeholder:!text-base"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <Input
                    type="tel"
                    placeholder="ტელეფონის ნომერი"
                    className="h-13 rounded-lg border border-gray-300 bg-white px-4 text-foreground placeholder:text-foreground/50 !text-base placeholder:!text-base"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                  <Input
                    type="email"
                    placeholder="ელ. ფოსტა"
                    className="h-13 rounded-lg border border-gray-300 bg-white px-4 text-foreground placeholder:text-foreground/50 !text-base placeholder:!text-base"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <Button
                    type="submit"
                    className="h-12 text-md cursor-pointer w-full font-semibold rounded-lg bg-primary text-white hover:bg-primary/90 uppercase"
                    disabled={isSubmitting}
                  >
                    მოთხოვნის გაგზავნა
                  </Button>
                </form>
                {isSuccess && (
                  <p className="mt-4 text-sm text-green-600 font-semibold">
                    მოთხოვნა წარმატებით გაიგზავნა!
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

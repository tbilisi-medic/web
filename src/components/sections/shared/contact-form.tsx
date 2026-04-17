'use client';

import * as React from 'react';
import Image from 'next/image';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { CircleCheck, CircleX } from 'lucide-react';

export function ContactForm() {
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsSuccess(false);

    if (!name.trim() || !phone.trim() || !email.trim()) {
      setError('გთხოვთ შეავსოთ ყველა ველი');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      setError('გთხოვთ შეიყვანოთ სწორი ელ. ფოსტა');
      return;
    }

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
      } else {
        setError('მოთხოვნის გაგზავნა ვერ მოხერხდა. სცადეთ თავიდან');
      }
    } catch {
      setError('მოთხოვნის გაგზავნა ვერ მოხერხდა. სცადეთ თავიდან');
    } finally {
      setIsSubmitting(false);
    }
  };

  const [name, setName] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);
  const [error, setError] = React.useState('');

  React.useEffect(() => {
    if (isSuccess || error) {
      const timer = setTimeout(() => {
        setIsSuccess(false);
        setError('');
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [isSuccess, error]);

  return (
    <section>
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="bg-white rounded-xl border border-primary-light/50 p-8 lg:p-10">
            {/* Title */}
            <h2 className="text-primary text-xl font-semibold text-foreground sm:text-2xl uppercase">
              ჩვენ დაგიკავშირდებით
            </h2>

            {/* Content */}
            <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:gap-16">
              {/* Left - Image */}
              <div className="relative h-64 overflow-hidden rounded-xl sm:h-80 lg:h-full lg:min-h-[370px]">
                <Image
                  src="/images/contact/2.jpg"
                  alt="დაგვიკავშირდით"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Right - Form */}
              <div className="flex flex-col justify-end">
                <p className="text-primary text-xl font-semibold text-foreground sm:text-2xl uppercase">
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
                    className="w-full cursor-pointer"
                    disabled={isSubmitting}
                  >
                    მოთხოვნის გაგზავნა
                  </Button>
                </form>
                {isSuccess && (
                  <Alert className="mt-4">
                    <CircleCheck className="h-4 w-4 !text-primary-light " />
                    <AlertDescription className="font-semibold !text-primary-light  text-md">
                      მოთხოვნა წარმატებით გაიგზავნა
                    </AlertDescription>
                  </Alert>
                )}
                {error && (
                  <Alert className="mt-4 text-red-600">
                    <CircleX className="h-4 w-4 !text-red-600" />
                    <AlertDescription className="font-semibold text-red-600">
                      {error}
                    </AlertDescription>
                  </Alert>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

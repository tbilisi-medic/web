'use client';

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { CircleCheck, CircleX } from 'lucide-react';

interface RandomProduct {
  id: string;
  name: string;
  subtitle: string | null;
  slug: string;
  imageUrl: string | null;
}

interface ContactFormProps {
  products: RandomProduct[];
}

export function ContactForm({ products }: ContactFormProps) {
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

  return (
    <section>
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            <div className="rounded-xl border border-primary-light/50 bg-white p-6 lg:p-8 shadow-sm">
              <h2 className="text-primary text-xl sm:text-2xl uppercase">
                ჩვენ დაგიკავშირდებით
              </h2>
              <p className="mt-6 text-md text-primary">
                შეიყვანეთ საკონტაქტო ინფორმაცია
              </p>

              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <Input
                  type="text"
                  placeholder="სახელი, გვარი*"
                  className="h-10 rounded-[10px] border border-primary-light/50 bg-white px-4 text-foreground placeholder:text-foreground/50 !text-base placeholder:!text-base shadow-sm"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <Input
                  type="tel"
                  placeholder="ტელეფონის ნომერი*"
                  className="h-10 rounded-[10px] border border-primary-light/50 bg-white px-4 text-foreground placeholder:text-foreground/50 !text-base placeholder:!text-base shadow-sm"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                <Input
                  type="email"
                  placeholder="ელ. ფოსტა"
                  className="h-10 rounded-[10px] border border-primary-light/50 bg-white px-4 text-foreground placeholder:text-foreground/50 !text-base placeholder:!text-base shadow-sm"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Button
                  type="submit"
                  className="cursor-pointer w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'იგზავნება...' : 'მოთხოვნის გაგზავნა'}
                </Button>
              </form>

              {isSuccess && (
                <Alert className="mt-4">
                  <CircleCheck className="h-4 w-4 !text-primary-light" />
                  <AlertDescription className="!text-primary-light text-md">
                    მოთხოვნა წარმატებით გაიგზავნა
                  </AlertDescription>
                </Alert>
              )}
              {error && (
                <Alert className="mt-4 text-red-600">
                  <CircleX className="h-4 w-4 !text-red-600" />
                  <AlertDescription className="text-red-600">
                    {error}
                  </AlertDescription>
                </Alert>
              )}
            </div>

            <div className="rounded-xl border border-primary-light/50 bg-white p-6 lg:p-8 flex flex-col justify-center divide-y divide-primary-light/30 shadow-sm">
              {products.map((product) => (
                <Link
                  key={product.id}
                  href={`/products/${product.slug}`}
                  className="flex items-center gap-5 py-4 first:pt-0 last:pb-0 transition-opacity hover:opacity-85"
                >
                  <div className="relative h-20 w-24 shrink-0 overflow-hidden rounded-lg">
                    {product.imageUrl ? (
                      <Image
                        src={product.imageUrl}
                        alt={product.name}
                        fill
                        className="object-contain"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-gray-100 text-foreground/30 text-xs">
                        სურათი
                      </div>
                    )}
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary text-md uppercase">
                      {product.name}
                    </h3>
                    {product.subtitle && (
                      <p className="mt-1 text-md text-primary">
                        {product.subtitle}
                      </p>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

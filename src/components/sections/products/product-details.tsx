'use client';

import * as React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { CircleCheck, CircleX } from 'lucide-react';

interface ProductDetailsProps {
  product: {
    name: string;
    subtitle: string;
    description: string;
    image: string;
  };
}

export function ProductDetails({ product }: ProductDetailsProps) {
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
          source: 'product',
          productName: product.name,
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
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Left - Image */}
            <div className="relative aspect-square overflow-hidden rounded-xl bg-gray-100">
              {product.image ? (
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="flex h-full items-center justify-center text-foreground/30">
                  სურათი არ მოიძებნა
                </div>
              )}
            </div>

            {/* Right - Content */}
            <div className="flex flex-col">
              {/* Product Name */}
              <h1 className="text-xl font-bold text-primary sm:text-2xl uppercase">
                {product.name}
              </h1>

              {/* Subtitle */}
              <h2 className="mt-3 text-md text-primary lg:text-md">
                {product.subtitle}
              </h2>

              {/* Description */}
              <div className="mt-6">
                <div
                  className="prose prose-base lg:prose-md text-primary break-words
    prose-headings:text-primary
    prose-strong:text-primary
    prose-a:text-primary
    prose-li:text-primary
    prose-ol:text-primary
    prose-ul:text-primary
    prose-blockquote:text-primary"
                  dangerouslySetInnerHTML={{ __html: product.description }}
                />
              </div>

              {/* CTA Button */}
              <div className="mt-auto pt-8">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="w-full cursor-pointer">
                      დაინტერესებული ვარ
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[1100px] p-15 [&>button]:top-7 [&>button]:right-7">
                    <div className="grid gap-20 lg:grid-cols-2 items-center">
                      {/* Left - Form */}
                      <div>
                        <DialogHeader>
                          <DialogTitle className="text-xl font-bold text-primary sm:text-2xl uppercase">
                            {product.name}
                          </DialogTitle>
                        </DialogHeader>

                        <p className="mt-2 text-md text-primary">
                          {product.subtitle}
                        </p>

                        <p className="mt-15 text-primary">
                          შეიყვანეთ საკონტაქტო ინფორმაცია
                        </p>

                        <form
                          onSubmit={handleSubmit}
                          className="mt-5 space-y-4"
                        >
                          <Input
                            type="text"
                            placeholder="სახელი, გვარი"
                            className="h-10 rounded-[10px] border border-primary-light/50 bg-white px-4 text-foreground placeholder:text-foreground/50 !text-base placeholder:!text-base shadow-sm"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                          />
                          <Input
                            type="tel"
                            placeholder="ტელეფონის ნომერი"
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
                            className="w-full cursor-pointer"
                            disabled={isSubmitting}
                          >
                            {isSubmitting
                              ? 'იგზავნება...'
                              : 'მოთხოვნის გაგზავნა'}
                          </Button>
                        </form>
                        {isSuccess && (
                          <Alert className="mt-4">
                            <CircleCheck className="h-4 w-4 !text-primary" />
                            <AlertDescription className="!text-primary text-md">
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

                      {/* Right - Image */}
                      <div className="hidden lg:flex lg:items-center">
                        <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-gray-100">
                          {product.image ? (
                            <Image
                              src={product.image}
                              alt={product.name}
                              fill
                              className="object-cover"
                            />
                          ) : (
                            <div className="flex h-full items-center justify-center text-foreground/30">
                              სურათი არ მოიძებნა
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

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
              <h1 className="text-2xl font-bold text-primary sm:text-3xl lg:text-4xl uppercase">
                {product.name}
              </h1>

              {/* Subtitle */}
              <h2 className="mt-4 text-xl font-semibold text-primary lg:text-xl">
                {product.subtitle}
              </h2>

              {/* Description */}
              <div className="mt-6">
                <div
                  className="prose prose-base lg:prose-lg text-foreground/80 break-words"
                  dangerouslySetInnerHTML={{ __html: product.description }}
                />
              </div>

              {/* CTA Button */}
              <div className="mt-auto pt-8">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="h-13 w-full cursor-pointer rounded-lg bg-primary text-base font-semibold text-white hover:bg-primary/90 lg:w-auto lg:px-12 uppercase">
                      დაინტერესებული ვარ
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[1100px] p-15 [&>button]:top-7 [&>button]:right-7">
                    <div className="grid gap-20 lg:grid-cols-2">
                      {/* Left - Form */}
                      <div>
                        <DialogHeader>
                          <DialogTitle className="text-2xl font-bold text-primary text-left sm:text-3xl lg:text-4xl uppercase">
                            {product.name}
                          </DialogTitle>
                        </DialogHeader>

                        <p className="mt-4 text-xl font-semibold text-primary lg:text-xl">
                          {product.subtitle}
                        </p>

                        <p className="mt-15 font-semibold text-foreground">
                          შეიყვანეთ საკონტაქტო ინფორმაცია
                        </p>

                        <form
                          onSubmit={handleSubmit}
                          className="mt-5 space-y-4"
                        >
                          <Input
                            type="text"
                            placeholder="სახელი, გვარი"
                            className="h-13 rounded-lg border border-gray-300 px-4 !text-base text-foreground placeholder:!text-base placeholder:text-foreground/50"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                          />
                          <Input
                            type="tel"
                            placeholder="ტელეფონის ნომერი"
                            className="h-13 rounded-lg border border-gray-300 px-4 !text-base text-foreground placeholder:!text-base placeholder:text-foreground/50"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                          />
                          <Input
                            type="email"
                            placeholder="ელ. ფოსტა"
                            className="h-13 rounded-lg border border-gray-300 px-4 !text-base text-foreground placeholder:!text-base placeholder:text-foreground/50"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                          <Button
                            type="submit"
                            className="h-13 w-full cursor-pointer rounded-lg bg-primary text-base font-semibold text-white hover:bg-primary/90 uppercase"
                            disabled={isSubmitting}
                          >
                            {isSubmitting
                              ? 'იგზავნება...'
                              : 'მოთხოვნის გაგზავნა'}
                          </Button>
                        </form>
                        {isSuccess && (
                          <p className="mt-4 text-sm text-green-600 font-semibold">
                            მოთხოვნა წარმატებით გაიგზავნა!
                          </p>
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

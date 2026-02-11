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
    shortDescription: string;
    fullDescription: string;
    image: string;
  };
}

export function ProductDetails({ product }: ProductDetailsProps) {
  const [isExpanded, setIsExpanded] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section className="py-16 lg:py-24">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Left - Image */}
            <div className="relative aspect-square overflow-hidden rounded-xl">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>

            {/* Right - Content */}
            <div className="flex flex-col">
              {/* Product Name */}
              <h1 className="text-2xl font-bold text-primary sm:text-3xl lg:text-4xl uppercase">
                {product.name}
              </h1>

              {/* Subtitle */}
              <h2 className="mt-4 text-xl font-semibold text-primary lg:text-2xl">
                {product.subtitle}
              </h2>

              {/* Description */}
              <div className="mt-6">
                <p className="text-base text-foreground/80 lg:text-lg">
                  {isExpanded
                    ? product.fullDescription
                    : product.shortDescription}
                </p>

                {/* Show More Button */}
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="mt-6 cursor-pointer text-sm font-medium text-primary hover:underline"
                >
                  {isExpanded ? 'ნაკლების ჩვენება' : 'მაჩვენე მეტი'}
                </button>
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
                          />
                          <Input
                            type="tel"
                            placeholder="ტელეფონის ნომერი"
                            className="h-13 rounded-lg border border-gray-300 px-4 !text-base text-foreground placeholder:!text-base placeholder:text-foreground/50"
                          />
                          <Input
                            type="email"
                            placeholder="ელ. ფოსტა"
                            className="h-13 rounded-lg border border-gray-300 px-4 !text-base text-foreground placeholder:!text-base placeholder:text-foreground/50"
                          />
                          <Button
                            type="submit"
                            className="h-13 w-full cursor-pointer rounded-lg bg-primary text-base font-semibold text-white hover:bg-primary/90 uppercase"
                          >
                            მოთხოვნის გაგზავნა
                          </Button>
                        </form>
                      </div>

                      {/* Right - Image */}
                      <div className="hidden lg:flex lg:items-center">
                        <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-gray-100">
                          <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            className="object-cover"
                          />
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

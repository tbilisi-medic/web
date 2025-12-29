'use client';

import * as React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

interface ProductDetailsProps {
  product: {
    name: string;
    subtitle: string;
    stats: string;
    shortDescription: string;
    fullDescription: string;
    image: string;
  };
}

export function ProductDetails({ product }: ProductDetailsProps) {
  const [isExpanded, setIsExpanded] = React.useState(false);

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
              <h1 className="text-2xl font-bold text-primary sm:text-3xl lg:text-4xl">
                {product.name}
              </h1>

              {/* Subtitle */}
              <h2 className="mt-4 text-xl font-semibold text-primary lg:text-2xl">
                {product.subtitle}
              </h2>

              {/* Stats */}
              <p className="mt-5 text-md text-foreground/60">{product.stats}</p>

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
                <Button className="h-13 w-full cursor-pointer rounded-lg bg-primary text-base font-semibold text-white hover:bg-primary/90 lg:w-auto lg:px-12">
                  დაინტერესებული ვარ
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

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

interface ContactDialogProps {
  children: React.ReactNode;
}

export function ContactDialog({ children }: ContactDialogProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Will integrate with Supabase later
    console.log('Form submitted');
  };

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[1100px] p-15 [&>button]:top-7 [&>button]:right-7">
        <div className="grid gap-20 lg:grid-cols-2">
          {/* Left - Form */}
          <div>
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-primary text-left sm:text-3xl lg:text-3xl uppercase">
                ტექნიკური მომსახურება
              </DialogTitle>
            </DialogHeader>

            <p className="mt-4 text-xl font-semibold text-primary lg:text-xl">
              მოითხოვე ზარი ბიო-სამედიცინო ინჟინერთან
            </p>

            <p className="mt-15 font-semibold text-foreground">
              შეიყვანეთ საკონტაქტო ინფორმაცია
            </p>

            <form onSubmit={handleSubmit} className="mt-5 space-y-4">
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
                src="/images/categories/1.jpg"
                alt="ტექნიკური მომსახურება"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

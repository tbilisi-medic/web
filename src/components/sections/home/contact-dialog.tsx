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

interface ContactDialogProps {
  children: React.ReactNode;
}

export function ContactDialog({ children }: ContactDialogProps) {
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
          source: 'technical_service',
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

            <p className="mt-15 font-semibold text-primary">
              შეიყვანეთ საკონტაქტო ინფორმაცია
            </p>

            <form onSubmit={handleSubmit} className="mt-5 space-y-4">
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
                className="h-13 w-full cursor-pointer rounded-lg text-base font-semibold text-white uppercase bg-gradient-to-r from-primary-dark to-primary hover:opacity-95"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'იგზავნება...' : 'მოთხოვნის გაგზავნა'}
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
              <Image
                src="/images/contact/1.jpg"
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

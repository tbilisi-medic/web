'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Phone, Menu, ChevronDown, X } from 'lucide-react';
import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu';
import Image from 'next/image';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  const toggleSubmenu = (menu: string) => {
    setOpenSubmenu(openSubmenu === menu ? null : menu);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setOpenSubmenu(null);
  };

  return (
    <div className="relative z-50 px-4 pt-4 sm:px-6 lg:px-8">
      <header className="relative mx-auto max-w-7xl rounded-xl bg-white shadow-sm">
        <div className="flex h-17 items-center justify-between gap-15 px-6">
          <div className="flex items-center justify-between w-full">
            {/* Logo */}
            <Link href="/" className="block">
              <span className="block h-11 w-32" />
            </Link>

            {/* Desktop Navigation Menu */}
            <NavigationMenuPrimitive.Root className="hidden md:block">
              <NavigationMenuPrimitive.List className="flex items-center gap-1">
                {/* For Clinics */}
                <NavigationMenuPrimitive.Item>
                  <NavigationMenuPrimitive.Trigger className="group inline-flex h-10 items-center justify-center rounded-md bg-transparent px-4 py-2 text-base font-medium text-gray-700 transition-colors hover:bg-gray-100 hover:text-primary focus:outline-none">
                    კლინიკებისთვის
                    <ChevronDown className="ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180" />
                  </NavigationMenuPrimitive.Trigger>
                  <NavigationMenuPrimitive.Content className="w-full bg-white p-6 py-8 data-[motion=from-start]:animate-in data-[motion=from-start]:fade-in data-[motion=from-start]:slide-in-from-left-52 data-[motion=from-end]:animate-in data-[motion=from-end]:fade-in data-[motion=from-end]:slide-in-from-right-52 data-[motion=to-start]:animate-out data-[motion=to-start]:fade-out data-[motion=to-start]:slide-out-to-left-52 data-[motion=to-end]:animate-out data-[motion=to-end]:fade-out data-[motion=to-end]:slide-out-to-right-52">
                    <div className="grid grid-cols-4 gap-8">
                      <div>
                        <h3 className="text-primary text-lg font-semibold mb-4">
                          ტექნოლოგია
                        </h3>
                        <ul className="space-y-2 text-md text-foreground/80">
                          <li>
                            <NavigationMenuPrimitive.Link asChild>
                              <Link
                                href="/products"
                                className="hover:text-primary"
                              >
                                ექოსკოპიის აპარატები
                              </Link>
                            </NavigationMenuPrimitive.Link>
                          </li>
                          <li>
                            <NavigationMenuPrimitive.Link asChild>
                              <Link
                                href="/products"
                                className="hover:text-primary"
                              >
                                ენდოსკოპიის აპარატები
                              </Link>
                            </NavigationMenuPrimitive.Link>
                          </li>
                          <li>
                            <NavigationMenuPrimitive.Link asChild>
                              <Link
                                href="/products"
                                className="hover:text-primary"
                              >
                                ლაპარასკოპიის აპარატები
                              </Link>
                            </NavigationMenuPrimitive.Link>
                          </li>
                          <li>
                            <NavigationMenuPrimitive.Link asChild>
                              <Link
                                href="/products"
                                className="hover:text-primary"
                              >
                                ანესთეზიის აპარატები
                              </Link>
                            </NavigationMenuPrimitive.Link>
                          </li>
                          <li>
                            <NavigationMenuPrimitive.Link asChild>
                              <Link
                                href="/products"
                                className="hover:text-primary"
                              >
                                ხელოვნური სუნთქვის აპარატები
                              </Link>
                            </NavigationMenuPrimitive.Link>
                          </li>
                          <li>
                            <NavigationMenuPrimitive.Link asChild>
                              <Link
                                href="/products"
                                className="hover:text-primary"
                              >
                                პაციენტის დაკვირვების მონიტორი
                              </Link>
                            </NavigationMenuPrimitive.Link>
                          </li>
                          <li>
                            <NavigationMenuPrimitive.Link asChild>
                              <Link
                                href="/products"
                                className="hover:text-primary"
                              >
                                ოფთალმოლოგიური აპარატები
                              </Link>
                            </NavigationMenuPrimitive.Link>
                          </li>
                          <li>
                            <NavigationMenuPrimitive.Link asChild>
                              <Link href="#" className="hover:text-primary">
                                სხვა
                              </Link>
                            </NavigationMenuPrimitive.Link>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-primary text-lg font-semibold mb-3">
                          ავეჯი
                        </h3>
                        <ul className="space-y-2 text-md text-foreground/80">
                          <li>
                            <NavigationMenuPrimitive.Link asChild>
                              <Link
                                href="/products"
                                className="hover:text-primary"
                              >
                                პაციენტის საწოლები
                              </Link>
                            </NavigationMenuPrimitive.Link>
                          </li>
                          <li>
                            <NavigationMenuPrimitive.Link asChild>
                              <Link
                                href="/products"
                                className="hover:text-primary"
                              >
                                საპროცედურო მაგიდები
                              </Link>
                            </NavigationMenuPrimitive.Link>
                          </li>
                          <li>
                            <NavigationMenuPrimitive.Link asChild>
                              <Link
                                href="/products"
                                className="hover:text-primary"
                              >
                                საოპერაციო მაგიდები
                              </Link>
                            </NavigationMenuPrimitive.Link>
                          </li>
                          <li>
                            <NavigationMenuPrimitive.Link asChild>
                              <Link
                                href="/products"
                                className="hover:text-primary"
                              >
                                სავარძლები და ტახტები
                              </Link>
                            </NavigationMenuPrimitive.Link>
                          </li>
                          <li>
                            <NavigationMenuPrimitive.Link asChild>
                              <Link
                                href="/products"
                                className="hover:text-primary"
                              >
                                ურიკები და ტუმბოები
                              </Link>
                            </NavigationMenuPrimitive.Link>
                          </li>
                          <li>
                            <NavigationMenuPrimitive.Link asChild>
                              <Link
                                href="/products"
                                className="hover:text-primary"
                              >
                                კარადები და სათავსოები
                              </Link>
                            </NavigationMenuPrimitive.Link>
                          </li>
                          <li>
                            <NavigationMenuPrimitive.Link asChild>
                              <Link
                                href="/products"
                                className="hover:text-primary"
                              >
                                განათება
                              </Link>
                            </NavigationMenuPrimitive.Link>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-primary text-lg font-semibold mb-3">
                          სახარჯები
                        </h3>
                        <ul className="space-y-2 text-md text-foreground/80">
                          <li>
                            <NavigationMenuPrimitive.Link asChild>
                              <Link
                                href="/products"
                                className="hover:text-primary"
                              >
                                სამედიცინო სამოსი
                              </Link>
                            </NavigationMenuPrimitive.Link>
                          </li>
                          <li>
                            <NavigationMenuPrimitive.Link asChild>
                              <Link
                                href="/products"
                                className="hover:text-primary"
                              >
                                შპრიცები, კათეტერები და ნემსები
                              </Link>
                            </NavigationMenuPrimitive.Link>
                          </li>
                          <li>
                            <NavigationMenuPrimitive.Link asChild>
                              <Link
                                href="/products"
                                className="hover:text-primary"
                              >
                                იმპლანტები და აუგმენტაცია
                              </Link>
                            </NavigationMenuPrimitive.Link>
                          </li>
                        </ul>
                        <div className="mt-8">
                          <h3 className="text-primary text-lg font-semibold mb-3">
                            ლაბორატორია
                          </h3>
                          <ul className="space-y-2 text-md text-foreground/80">
                            <li>
                              <NavigationMenuPrimitive.Link asChild>
                                <Link
                                  href="/products"
                                  className="hover:text-primary"
                                >
                                  ჰემატოლოგია
                                </Link>
                              </NavigationMenuPrimitive.Link>
                            </li>
                            <li>
                              <NavigationMenuPrimitive.Link asChild>
                                <Link
                                  href="/products"
                                  className="hover:text-primary"
                                >
                                  იმუნოლოგია
                                </Link>
                              </NavigationMenuPrimitive.Link>
                            </li>
                            <li>
                              <NavigationMenuPrimitive.Link asChild>
                                <Link
                                  href="/products"
                                  className="hover:text-primary"
                                >
                                  ბიოქიმია
                                </Link>
                              </NavigationMenuPrimitive.Link>
                            </li>
                            <li>
                              <NavigationMenuPrimitive.Link asChild>
                                <Link
                                  href="/products"
                                  className="hover:text-primary"
                                >
                                  კოაგულაცია
                                </Link>
                              </NavigationMenuPrimitive.Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div>
                        <div className="relative h-full min-h-[300px] rounded-lg overflow-hidden">
                          <Image
                            src="/images/categories/4.jpg"
                            alt=""
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </NavigationMenuPrimitive.Content>
                </NavigationMenuPrimitive.Item>

                {/* About Us */}
                <NavigationMenuPrimitive.Item>
                  <NavigationMenuPrimitive.Trigger className="group inline-flex h-10 items-center justify-center rounded-md bg-transparent px-4 py-2 text-base font-medium text-gray-700 transition-colors hover:bg-gray-100 hover:text-primary focus:outline-none">
                    ჩვენ
                    <ChevronDown className="ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180" />
                  </NavigationMenuPrimitive.Trigger>
                  <NavigationMenuPrimitive.Content className="w-full bg-white p-6 py-8 data-[motion=from-start]:animate-in data-[motion=from-start]:fade-in data-[motion=from-start]:slide-in-from-left-52 data-[motion=from-end]:animate-in data-[motion=from-end]:fade-in data-[motion=from-end]:slide-in-from-right-52 data-[motion=to-start]:animate-out data-[motion=to-start]:fade-out data-[motion=to-start]:slide-out-to-left-52 data-[motion=to-end]:animate-out data-[motion=to-end]:fade-out data-[motion=to-end]:slide-out-to-right-52">
                    <div className="grid grid-cols-4 gap-8">
                      <div>
                        <h3 className="text-primary text-lg font-semibold mb-4">
                          კომპანია
                        </h3>
                        <ul className="space-y-2 text-md text-foreground/80">
                          <li>
                            <NavigationMenuPrimitive.Link asChild>
                              <Link
                                href="/about"
                                className="hover:text-primary"
                              >
                                ჩვენს შესახებ
                              </Link>
                            </NavigationMenuPrimitive.Link>
                          </li>
                          <li>
                            <NavigationMenuPrimitive.Link asChild>
                              <Link href="/" className="hover:text-primary">
                                მისია და ხედვა
                              </Link>
                            </NavigationMenuPrimitive.Link>
                          </li>
                          <li>
                            <NavigationMenuPrimitive.Link asChild>
                              <Link href="/" className="hover:text-primary">
                                მონაგარი
                              </Link>
                            </NavigationMenuPrimitive.Link>
                          </li>
                          <li>
                            <NavigationMenuPrimitive.Link asChild>
                              <Link href="/" className="hover:text-primary">
                                გამოხმაურება
                              </Link>
                            </NavigationMenuPrimitive.Link>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-primary text-lg font-semibold mb-3">
                          ფილიალები
                        </h3>
                        <ul className="space-y-2 text-md text-foreground/80">
                          <li>
                            <NavigationMenuPrimitive.Link asChild>
                              <Link href="/" className="hover:text-primary">
                                თბილისი
                              </Link>
                            </NavigationMenuPrimitive.Link>
                          </li>
                          <li>
                            <NavigationMenuPrimitive.Link asChild>
                              <Link href="/" className="hover:text-primary">
                                ქუთაისი
                              </Link>
                            </NavigationMenuPrimitive.Link>
                          </li>
                          <li>
                            <NavigationMenuPrimitive.Link asChild>
                              <Link href="/" className="hover:text-primary">
                                ბათუმი
                              </Link>
                            </NavigationMenuPrimitive.Link>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-primary text-lg font-semibold mb-3">
                          კარიერა
                        </h3>
                        <ul className="space-y-2 text-md text-foreground/80">
                          <li>
                            <NavigationMenuPrimitive.Link asChild>
                              <Link
                                href="/careers"
                                className="hover:text-primary"
                              >
                                ვაკანსიები
                              </Link>
                            </NavigationMenuPrimitive.Link>
                          </li>
                          <li>
                            <NavigationMenuPrimitive.Link asChild>
                              <Link href="/" className="hover:text-primary">
                                ადამიანების დღიურები
                              </Link>
                            </NavigationMenuPrimitive.Link>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-primary text-lg font-semibold mb-3">
                          წასაკითხი
                        </h3>
                        <ul className="space-y-2 text-md text-foreground/80">
                          <li>
                            <NavigationMenuPrimitive.Link asChild>
                              <Link href="/blog" className="hover:text-primary">
                                სიახლეები
                              </Link>
                            </NavigationMenuPrimitive.Link>
                          </li>
                          <li>
                            <NavigationMenuPrimitive.Link asChild>
                              <Link href="/blog" className="hover:text-primary">
                                ბლოგი
                              </Link>
                            </NavigationMenuPrimitive.Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </NavigationMenuPrimitive.Content>
                </NavigationMenuPrimitive.Item>
              </NavigationMenuPrimitive.List>

              {/* Viewport */}
              <div className="absolute left-0 top-full w-full perspective-[2000px]">
                <NavigationMenuPrimitive.Viewport className="relative w-full mt-2 rounded-xl border bg-white shadow-lg overflow-hidden origin-top h-[var(--radix-navigation-menu-viewport-height)] transition-[width,height] duration-150 ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out data-[state=open]:fade-in data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95" />
              </div>
            </NavigationMenuPrimitive.Root>
          </div>

          {/* Right side - Phone + Language */}
          <div className="flex items-center gap-4">
            <a href="#" className="text-gray-700 hover:text-primary">
              <Phone size={18} />
            </a>
            <a
              href="#"
              className="text-base font-medium text-gray-700 hover:text-primary"
            >
              ქარ
            </a>
            {/* Mobile menu button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-lg hover:bg-gray-100 md:hidden"
              aria-label="მენიუს გახსნა"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`absolute left-0 top-full mt-2 w-full md:hidden bg-white rounded-xl shadow-lg border overflow-hidden transition-all duration-200 ease-in-out ${
            mobileMenuOpen
              ? 'max-h-[80vh] opacity-100 overflow-y-auto'
              : 'max-h-0 opacity-0 pointer-events-none'
          }`}
        >
          <nav className="divide-y">
            {/* For Clinics */}
            <div>
              <button
                onClick={() => toggleSubmenu('products')}
                className="flex w-full items-center justify-between px-6 py-4 text-left text-base font-medium"
              >
                კლინიკებისთვის
                <ChevronDown
                  className={`h-5 w-5 transition-transform duration-300 ${
                    openSubmenu === 'products' ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`bg-gray-50 overflow-hidden transition-all duration-300 ease-in-out ${
                  openSubmenu === 'products'
                    ? 'max-h-[1000px] opacity-100'
                    : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 py-4 space-y-4">
                  <div className="mt-2">
                    <h3 className="text-foreground/60 font-medium mb-3 text-md">
                      ტექნოლოგია
                    </h3>
                    <ul className="space-y-2 text-md text-foreground/90">
                      <li>
                        <Link href="/products" onClick={closeMobileMenu}>
                          ექოსკოპიის აპარატები
                        </Link>
                      </li>
                      <li>
                        <Link href="/products" onClick={closeMobileMenu}>
                          ენდოსკოპიის აპარატები
                        </Link>
                      </li>
                      <li>
                        <Link href="/products" onClick={closeMobileMenu}>
                          ლაპარასკოპიის აპარატები
                        </Link>
                      </li>
                      <li>
                        <Link href="/products" onClick={closeMobileMenu}>
                          ანესთეზიის აპარატები
                        </Link>
                      </li>
                      <li>
                        <Link href="/products" onClick={closeMobileMenu}>
                          ხელოვნური სუნთქვის აპარატები
                        </Link>
                      </li>
                      <li>
                        <Link href="/products" onClick={closeMobileMenu}>
                          პაციენტის დაკვირვების მონიტორი
                        </Link>
                      </li>
                      <li>
                        <Link href="/products" onClick={closeMobileMenu}>
                          ოფთალმოლოგიური აპარატები
                        </Link>
                      </li>
                      <li>
                        <Link href="/products" onClick={closeMobileMenu}>
                          სხვა
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-7">
                    <h3 className="text-foreground/60 font-medium mb-3 text-md">
                      ავეჯი
                    </h3>
                    <ul className="space-y-2 text-md text-foreground/90">
                      <li>
                        <Link href="/products" onClick={closeMobileMenu}>
                          პაციენტის საწოლები
                        </Link>
                      </li>
                      <li>
                        <Link href="/products" onClick={closeMobileMenu}>
                          საპროცედურო მაგიდები
                        </Link>
                      </li>
                      <li>
                        <Link href="/products" onClick={closeMobileMenu}>
                          საოპერაციო მაგიდები
                        </Link>
                      </li>
                      <li>
                        <Link href="/products" onClick={closeMobileMenu}>
                          სავარძლები და ტახტები
                        </Link>
                      </li>
                      <li>
                        <Link href="/products" onClick={closeMobileMenu}>
                          ურიკები და ტუმბოები
                        </Link>
                      </li>
                      <li>
                        <Link href="/products" onClick={closeMobileMenu}>
                          კარადები და სათავსოები
                        </Link>
                      </li>
                      <li>
                        <Link href="/products" onClick={closeMobileMenu}>
                          განათება
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-7">
                    <h3 className="text-foreground/60 font-medium mb-3 text-md">
                      სახარჯები
                    </h3>
                    <ul className="space-y-2 text-md text-foreground/90">
                      <li>
                        <Link href="/products" onClick={closeMobileMenu}>
                          სამედიცინო სამოსი
                        </Link>
                      </li>
                      <li>
                        <Link href="/products" onClick={closeMobileMenu}>
                          შპრიცები, კათეტერები და ნემსები
                        </Link>
                      </li>
                      <li>
                        <Link href="/products" onClick={closeMobileMenu}>
                          იმპლანტები და აუგმენტაცია
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-7 mb-4">
                    <h3 className="text-foreground/60 font-medium mb-3 text-md">
                      ლაბორატორია
                    </h3>
                    <ul className="space-y-2 text-md text-foreground/90">
                      <li>
                        <Link href="/products" onClick={closeMobileMenu}>
                          ჰემატოლოგია
                        </Link>
                      </li>
                      <li>
                        <Link href="/products" onClick={closeMobileMenu}>
                          იმუნოლოგია
                        </Link>
                      </li>
                      <li>
                        <Link href="/products" onClick={closeMobileMenu}>
                          ბიოქიმია
                        </Link>
                      </li>
                      <li>
                        <Link href="/products" onClick={closeMobileMenu}>
                          კოაგულაცია
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* About Us */}
            <div>
              <button
                onClick={() => toggleSubmenu('about')}
                className="flex w-full items-center justify-between px-6 py-4 text-left text-base font-medium"
              >
                ჩვენ
                <ChevronDown
                  className={`h-5 w-5 transition-transform duration-300 ${
                    openSubmenu === 'about' ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`bg-gray-50 overflow-hidden transition-all duration-300 ease-in-out ${
                  openSubmenu === 'about'
                    ? 'max-h-[1000px] opacity-100'
                    : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 py-4">
                  <div className="mt-2">
                    <h3 className="text-foreground/60 font-medium mb-3 text-md">
                      კომპანია
                    </h3>
                    <ul className="space-y-2 text-md text-foreground/90">
                      <li>
                        <Link href="/about" onClick={closeMobileMenu}>
                          ჩვენს შესახებ
                        </Link>
                      </li>
                      <li>
                        <Link href="/" onClick={closeMobileMenu}>
                          მისია და ხედვა
                        </Link>
                      </li>
                      <li>
                        <Link href="/" onClick={closeMobileMenu}>
                          მონაგარი
                        </Link>
                      </li>
                      <li>
                        <Link href="/" onClick={closeMobileMenu}>
                          გამოხმაურება
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-7">
                    <h3 className="text-foreground/60 font-medium mb-3 text-md">
                      ფილიალები
                    </h3>
                    <ul className="space-y-2 text-md text-foreground/90">
                      <li>
                        <Link href="/" onClick={closeMobileMenu}>
                          თბილისი
                        </Link>
                      </li>
                      <li>
                        <Link href="/" onClick={closeMobileMenu}>
                          ქუთაისი
                        </Link>
                      </li>
                      <li>
                        <Link href="/" onClick={closeMobileMenu}>
                          ბათუმი
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-7">
                    <h3 className="text-foreground/60 font-medium mb-3 text-md">
                      კარიერა
                    </h3>
                    <ul className="space-y-2 text-md text-foreground/90">
                      <li>
                        <Link href="/careers" onClick={closeMobileMenu}>
                          ვაკანსიები
                        </Link>
                      </li>
                      <li>
                        <Link href="/" onClick={closeMobileMenu}>
                          ადამიანების დღიურები
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-7 mb-2">
                    <h3 className="text-foreground/60 font-medium mb-3 text-md">
                      წასაკითხი
                    </h3>
                    <ul className="space-y-2 text-md text-foreground/90">
                      <li>
                        <Link href="/blog" onClick={closeMobileMenu}>
                          სიახლეები
                        </Link>
                      </li>
                      <li>
                        <Link href="/blog" onClick={closeMobileMenu}>
                          ბლოგი
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
}

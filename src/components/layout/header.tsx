'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, ChevronDown, X } from 'lucide-react';
import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu';
import Image from 'next/image';
import { HeaderSearch } from './header-search';
import { LanguageSwitcher } from './language-switcher';
import { useTranslations } from 'next-intl';
import { ContactDialog } from '@/components/sections/home';

type MenuItem = {
  label: string;
  href: string;
};

type MenuSection = {
  title: string;
  items: MenuItem[];
};

const productsMenu: MenuSection[] = [
  {
    title: 'აპარატურა',
    items: [
      { label: 'ენდოსკოპია', href: '/products?category=equipment' },
      { label: 'ექოსკოპია', href: '/products?category=equipment' },
      { label: 'ლაპაროსკოპია', href: '/products?category=equipment' },
      { label: 'მსხვილი აპარატურა', href: '/products?category=equipment' },
      { label: 'სხვა', href: '/products?category=equipment' },
    ],
  },
  {
    title: 'ავეჯი',
    items: [
      { label: 'პაციენტის საწოლები', href: '/products?category=furniture' },
      { label: 'საოპერაციო ავეჯი', href: '/products?category=furniture' },
      { label: 'სამედიცინო ურიკები', href: '/products?category=furniture' },
      { label: 'აქსესუარები', href: '/products?category=furniture' },
      { label: 'სხვა', href: '/products?category=furniture' },
    ],
  },
  {
    title: 'სახარჯი მასალები',
    items: [
      { label: 'ბინტები და მარლები', href: '/products?category=consumables' },
      { label: 'სტერილიზაცია', href: '/products?category=consumables' },
      { label: 'ინსტრუმენტები', href: '/products?category=consumables' },
      { label: 'სასუნთქი სისტემები', href: '/products?category=consumables' },
      { label: 'სხვა', href: '/products?category=consumables' },
    ],
  },
  {
    title: 'ლაბორატორია',
    items: [
      { label: 'ბიოქიმია', href: '/products?category=laboratory' },
      { label: 'იმუნოლოგია', href: '/products?category=laboratory' },
      { label: 'კოაგულაცია', href: '/products?category=laboratory' },
      { label: 'ჰემატოლოგია', href: '/products?category=laboratory' },
      { label: 'სხვა', href: '/products?category=laboratory' },
    ],
  },
  {
    title: 'ესთეტიკა',
    items: [
      { label: 'ეგზოსომები', href: '/products?category=aesthetics' },
      { label: 'თვალის ბუსტერები', href: '/products?category=aesthetics' },
      { label: 'სახის ბუსტერები', href: '/products?category=aesthetics' },
      { label: 'ტანის ფილერები', href: '/products?category=aesthetics' },
      { label: 'სხვა', href: '/products?category=aesthetics' },
    ],
  },
];

const aboutMenu: MenuSection[] = [
  {
    title: 'კომპანია',
    items: [
      { label: 'ჩვენს შესახებ', href: '/about' },
      { label: 'მისია და ხედვა', href: '/about#mission' },
      { label: 'მონაგარი', href: '/about#achievements' },
    ],
  },
  {
    title: 'ფილიალები',
    items: [
      { label: 'თბილისი', href: '/about#tbilisi' },
      { label: 'ქუთაისი', href: '/about#kutaisi' },
      { label: 'ბათუმი', href: '/about#batumi' },
    ],
  },
  {
    title: 'კარიერა',
    items: [
      { label: 'ვაკანსიები', href: '/careers' },
      { label: 'ადამიანების დღიურები', href: '/careers#stories' },
    ],
  },
  {
    title: 'წასაკითხი',
    items: [
      { label: 'სიახლეები', href: '/blog' },
      { label: 'ბლოგი', href: '/blog?category=blog' },
    ],
  },
];

function DesktopMenuSection({ section }: { section: MenuSection }) {
  return (
    <div>
      <h3 className="text-primary font-semibold mb-4 uppercase">
        {section.title}
      </h3>
      <ul className="space-y-2.5 text-md text-foreground/80">
        {section.items.map((item) => (
          <li key={item.label}>
            <NavigationMenuPrimitive.Link asChild>
              <Link href={item.href} className="hover:text-primary">
                {item.label}
              </Link>
            </NavigationMenuPrimitive.Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function MobileMenuSection({
  section,
  onLinkClick,
}: {
  section: MenuSection;
  onLinkClick: () => void;
}) {
  return (
    <div className="mt-7 first:mt-2">
      <h3 className="text-foreground/60 font-semibold mb-3 text-md uppercase">
        {section.title}
      </h3>
      <ul className="space-y-2 text-md text-foreground/90">
        {section.items.map((item) => (
          <li key={item.label}>
            <Link href={item.href} onClick={onLinkClick}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Main Header Component
export function Header() {
  const t = useTranslations('header');

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const headerHeight = 90;

      setIsScrolled(currentScrollY > headerHeight);

      if (currentScrollY > headerHeight && !mobileMenuOpen) {
        if (currentScrollY < lastScrollY) {
          // Scrolling up - show header
          setIsVisible(true);
        } else {
          // Scrolling down - hide header
          setIsVisible(false);
        }
      } else {
        // At top of page or mobile menu open - always show
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, mobileMenuOpen]);

  const toggleSubmenu = (menu: string) => {
    setOpenSubmenu(openSubmenu === menu ? null : menu);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setOpenSubmenu(null);
  };

  return (
    <div
      className={`fixed left-0 right-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8 transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <header
        className={`relative mx-auto max-w-7xl rounded-xl bg-white shadow-sm transition-shadow duration-300 ${
          isScrolled ? 'shadow-md' : 'shadow-sm'
        }`}
      >
        <div className="flex h-18 items-center justify-between gap-7 px-6">
          <div className="flex items-center justify-between w-full">
            {/* Logo */}
            <Link href="/" className="block">
              <Image
                src="/images/logo.png"
                alt="Logo"
                width={219}
                height={57}
                className="h-11 w-auto"
                priority
              />
            </Link>

            {/* Desktop Navigation Menu */}
            <NavigationMenuPrimitive.Root className="hidden xl:block">
              <NavigationMenuPrimitive.List className="flex items-center gap-1">
                {/* For Clinics */}
                <NavigationMenuPrimitive.Item>
                  <NavigationMenuPrimitive.Trigger className="group inline-flex h-10 items-center justify-center rounded-md bg-transparent px-4 py-2 text-base font-semibold text-primary transition-colors hover:bg-gray-100 hover:text-primary focus:outline-none uppercase">
                    {t('forClinics')}
                    <ChevronDown className="ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180" />
                  </NavigationMenuPrimitive.Trigger>
                  <NavigationMenuPrimitive.Content className="w-full bg-white p-6 py-8 data-[motion=from-start]:animate-in data-[motion=from-start]:fade-in data-[motion=from-start]:slide-in-from-left-52 data-[motion=from-end]:animate-in data-[motion=from-end]:fade-in data-[motion=from-end]:slide-in-from-right-52 data-[motion=to-start]:animate-out data-[motion=to-start]:fade-out data-[motion=to-start]:slide-out-to-left-52 data-[motion=to-end]:animate-out data-[motion=to-end]:fade-out data-[motion=to-end]:slide-out-to-right-52">
                    <div className="grid grid-cols-6 gap-5">
                      {productsMenu.map((section) => (
                        <DesktopMenuSection
                          key={section.title}
                          section={section}
                        />
                      ))}
                      {/* CTA Column */}
                      <div>
                        <ContactDialog>
                          <button className="relative h-full w-full min-h-[200px] rounded-xl overflow-hidden cursor-pointer group">
                            <div className="absolute inset-0 bg-primary" />
                            <Image
                              src="/images/brand-character.svg"
                              alt=""
                              fill
                              className="object-contain "
                            />
                            <div className="relative z-10 flex h-full items-end p-5">
                              <p className="text-white font-semibold uppercase text-lg text-left leading-snug">
                                სამედიცინო
                                <br />
                                ინჟინერია
                              </p>
                            </div>
                          </button>
                        </ContactDialog>
                      </div>
                    </div>
                  </NavigationMenuPrimitive.Content>
                </NavigationMenuPrimitive.Item>

                {/* About Us */}
                <NavigationMenuPrimitive.Item>
                  <NavigationMenuPrimitive.Trigger className="group inline-flex h-10 items-center justify-center rounded-md bg-transparent px-4 py-2 text-base font-semibold text-primary transition-colors hover:bg-gray-100 hover:text-primary focus:outline-none uppercase">
                    {t('aboutUs')}
                    <ChevronDown className="ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180" />
                  </NavigationMenuPrimitive.Trigger>
                  <NavigationMenuPrimitive.Content className="w-full bg-white p-6 py-8 data-[motion=from-start]:animate-in data-[motion=from-start]:fade-in data-[motion=from-start]:slide-in-from-left-52 data-[motion=from-end]:animate-in data-[motion=from-end]:fade-in data-[motion=from-end]:slide-in-from-right-52 data-[motion=to-start]:animate-out data-[motion=to-start]:fade-out data-[motion=to-start]:slide-out-to-left-52 data-[motion=to-end]:animate-out data-[motion=to-end]:fade-out data-[motion=to-end]:slide-out-to-right-52">
                    <div className="grid grid-cols-4 gap-8">
                      {aboutMenu.map((section) => (
                        <DesktopMenuSection
                          key={section.title}
                          section={section}
                        />
                      ))}
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

          {/* Search */}
          <HeaderSearch />

          {/* Right side  */}
          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            {/* Mobile menu button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-lg hover:bg-gray-100 xl:hidden"
              aria-label="მენიუს გახსნა"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`absolute left-0 top-full mt-2 w-full xl:hidden bg-white rounded-xl shadow-lg border overflow-hidden transition-all duration-200 ease-in-out ${
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
                className="flex w-full items-center justify-between px-6 py-4 text-left text-base font-semibold uppercase"
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
                    ? 'max-h-[1200px] opacity-100'
                    : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 py-4 space-y-4">
                  {productsMenu.map((section) => (
                    <MobileMenuSection
                      key={section.title}
                      section={section}
                      onLinkClick={closeMobileMenu}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* About Us */}
            <div>
              <button
                onClick={() => toggleSubmenu('about')}
                className="flex w-full items-center justify-between px-6 py-4 text-left text-base font-semibold uppercase"
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
                  {aboutMenu.map((section) => (
                    <MobileMenuSection
                      key={section.title}
                      section={section}
                      onLinkClick={closeMobileMenu}
                    />
                  ))}
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
}

import Link from 'next/link';
import { Phone, ChevronDown, Menu } from 'lucide-react';

export function Header() {
  return (
    <div className="relative z-50 px-4 pt-4 sm:px-6 lg:px-8">
      <header className="mx-auto max-w-7xl rounded-xl bg-white shadow-sm">
        <div className="flex h-17 items-center justify-between gap-15 px-6">
          <div className="flex items-center justify-between w-full">
            {/* Logo */}
            <Link href="/" className="block">
              <span className="block h-11 w-32 rounded" />
            </Link>

            {/* Navigation placeholder */}
            <nav className="hidden items-center gap-5 md:flex">
              <Link
                href="/products"
                className="flex items-center gap-1 text-base font-medium text-gray-700 hover:text-primary"
              >
                კლინიკებისთვის
                <ChevronDown size={15} />
              </Link>
              <Link
                href="/about"
                className="flex items-center gap-1 text-base font-medium text-gray-700 hover:text-primary"
              >
                ჩვენ
                <ChevronDown size={15} />
              </Link>
            </nav>
          </div>
          {/* Right side - Phone + Language */}
          <div className="flex items-center gap-4">
            <a href="#">
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
              className="flex h-10 w-10 items-center justify-center rounded-lg hover:bg-gray-100 md:hidden"
              aria-label="მენიუს გახსნა"
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}

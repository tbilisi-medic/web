import Link from 'next/link';
import { Globe, Phone, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl py-24">
          <div className="grid gap-10 lg:grid-cols-13">
            {/* Left side - Addresses & Contact */}
            <div className="lg:col-span-4">
              {/* Addresses */}
              <div className="space-y-2 text-white">
                <p>თბილისი, ლუბლიანას ქ. №28ა</p>
                <p>ქუთაისი, გამსახურდიას ქ. №22</p>
                <p>ბათუმი, აგრატიონის ქ. №196</p>
              </div>

              {/* Contact info */}
              <div className="mt-8 space-y-3">
                <span className="flex items-center gap-3 text-white/80">
                  <Globe size={18} />
                  ს/ნომერი 404865286
                </span>
                <span className="flex items-center gap-3 text-white/80">
                  <Phone size={18} />
                  +995 577 155 133
                </span>
                <span className="flex items-center gap-3 text-white/80">
                  <Mail size={18} />
                  info@tbilisimedic.ge
                </span>
              </div>
            </div>

            {/* Company */}
            <div className="lg:col-span-3">
              <h4 className="text-base font-semibold">კომპანია</h4>
              <ul className="mt-4 space-y-3 text-white/80">
                <li>
                  <Link href="/" className="hover:text-white">
                    ისტორია
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:text-white">
                    მისია და ხედვა
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:text-white">
                    ორგანიზაციული სტრუქტურა
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:text-white">
                    პარტნიორები
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:text-white">
                    თბილისის ფილიალი
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:text-white">
                    ქუთაისის ფილიალი
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:text-white">
                    ბათუმის ფილიალი
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:text-white">
                    სიახლეები
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:text-white">
                    ბლოგი
                  </Link>
                </li>
              </ul>
            </div>

            {/* Products */}
            <div className="lg:col-span-3">
              <h4 className="text-base font-semibold">პროდუქცია</h4>
              <ul className="mt-4 space-y-3 text-white/80">
                <li>
                  <Link href="/" className="hover:text-white">
                    ავეჯი
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:text-white">
                    საოპერაციო
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:text-white">
                    სარეანიმაციო
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:text-white">
                    ექოსკოპია
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:text-white">
                    ენდოსკოპია
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:text-white">
                    ლაპარასკოპია
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:text-white">
                    ოფთალმოლოგია
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:text-white">
                    სტერილიზაცია
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:text-white">
                    ქირურგია
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:text-white">
                    მეან-გინეკოლოგია
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:text-white">
                    პედიატრია
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:text-white">
                    ლაბორატორია
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:text-white">
                    ესთეტიკა
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className="lg:col-span-3">
              <h4 className="text-base font-semibold">დაგვიკავშირდით</h4>
              <ul className="mt-4 space-y-2 text-white/80">
                <li>
                  <Link href="/" className="hover:text-white">
                    ბიო-სამედიცინო ინჟინერია
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:text-white">
                    ვაკანსიები
                  </Link>
                </li>
              </ul>

              {/* Social icons */}
              <h4 className="mt-8 text-base font-semibold">გამოგვყევით</h4>
              <div className="mt-4 flex items-center gap-1">
                <a
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-md bg-white/5 hover:bg-white/10"
                  aria-label="Facebook"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-md bg-white/5 hover:bg-white/10"
                  aria-label="Instagram"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-md bg-white/5 hover:bg-white/10"
                  aria-label="TikTok"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-md bg-white/5 hover:bg-white/10"
                  aria-label="LinkedIn"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-md bg-white/5 hover:bg-white/10"
                  aria-label="YouTube"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

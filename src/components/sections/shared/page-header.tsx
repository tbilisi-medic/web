import Image from 'next/image';

interface PageHeaderProps {
  title?: string;
  description?: string;
}

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <section className="pt-28 lg:pt-30 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl relative overflow-hidden rounded-xl bg-primary">
        <div className="relative z-10 px-8 py-14 lg:px-14 lg:py-16">
          {title && (
            <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-4xl uppercase">
              {title}
            </h1>
          )}
          {description && (
            <p className="mt-5 text-lg text-white/80 sm:text-xl max-w-3xl">
              {description}
            </p>
          )}
        </div>
        <div className="absolute right-0 top-0 bottom-0 w-1/2 pointer-events-none hidden lg:block">
          <Image
            src="/images/hero/bg.png"
            alt=""
            fill
            className="object-cover object-right-top"
          />
        </div>
      </div>
    </section>
  );
}

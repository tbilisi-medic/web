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
            <h1 className="text-3xl font-bold leading-tight text-white lg:text-[40px] uppercase">
              {title}
            </h1>
          )}
          {description && (
            <p className="mt-5 text-lg text-white font-semibold sm:text-2xl max-w-3xl">
              {description}
            </p>
          )}
        </div>
        <div className="absolute inset-0 pointer-events-none">
          <Image
            src="/images/hero/bg.svg"
            alt=""
            fill
            className="object-cover sm:object-contain object-right"
          />
        </div>
      </div>
    </section>
  );
}

interface PageHeaderProps {
  title?: string;
  description?: string;
}

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <section className="bg-primary pt-24">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl pb-14 pt-14 lg:pb-16 lg:pt-16">
          {title && (
            <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-4xl uppercase">
              {title}
            </h1>
          )}
          {description && (
            <p className="mt-5 text-lg text-white/80 sm:text-xl">
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

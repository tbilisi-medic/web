import Image from 'next/image';

interface Stat {
  id: number;
  value: string;
  label: string;
  image: string;
}

interface StatsProps {
  title: string;
  stats: Stat[];
}

export function Stats({ title, stats }: StatsProps) {
  return (
    <section className="pt-10 pb-12 lg:py-24 lg:pt-10">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {/* Title */}
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
            {title}
          </h2>

          {/* Stats Grid */}
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.id}
                className="relative h-48 overflow-hidden rounded-xl sm:h-56 lg:h-64"
              >
                {/* Background Image */}
                <Image
                  src={stat.image}
                  alt={stat.label}
                  fill
                  className="object-cover"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/60 via-60% to-transparent" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 p-6">
                  <p className="text-5xl font-bold text-white lg:text-7xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 font-semibold text-white text-lg">
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

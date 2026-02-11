import Link from 'next/link';
import Image from 'next/image';

interface Story {
  id: number;
  title: string;
  description: string;
  image: string;
  href: string;
}

interface StoriesProps {
  title: string;
  description: string;
  stories: Story[];
}

export function Stories({ title, description, stories }: StoriesProps) {
  return (
    <section id="stories" className="lg:pt-6 mb-30">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {/* Headline */}
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl leading-10 uppercase">
            {title}
          </h2>

          {/* Description */}
          <p className="mt-6 text-lg text-foreground/80">{description}</p>

          {/* Stories */}
          <div className="mt-12 space-y-8">
            {stories.map((story) => (
              <div
                key={story.id}
                className="grid items-center gap-6 lg:grid-cols-12 lg:gap-10 mb-10"
              >
                {/* Image */}
                <div className="lg:col-span-4">
                  <div className="relative h-60 overflow-hidden rounded-xl bg-gray-200">
                    <Image
                      src={story.image}
                      alt={story.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="lg:col-span-8">
                  <h3 className="text-xl font-bold text-primary lg:text-2xl uppercase">
                    {story.title}
                  </h3>
                  <p className="mt-5 text-lg text-foreground/80">
                    {story.description}
                  </p>
                  <div className="mt-8">
                    <Link
                      href={story.href}
                      className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-primary/90 uppercase"
                    >
                      სრულად
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

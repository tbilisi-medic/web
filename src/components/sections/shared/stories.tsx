import Link from 'next/link';
import Image from 'next/image';

interface Story {
  id: number;
  title: string;
  description: string;
  image: string;
  href: string;
  imageContain?: boolean;
}

interface StoriesProps {
  title: string;
  stories: Story[];
}

export function Stories({ title, stories }: StoriesProps) {
  return (
    <section id="stories">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {/* Headline */}
          <h2 className="text-primary text-xl font-semibold text-foreground sm:text-2xl uppercase">
            {title}
          </h2>

          {/* Stories */}
          <div className="mt-12 space-y-8">
            {stories.map((story) => (
              <Link
                key={story.id}
                href={story.href}
                className="grid items-center gap-6 lg:grid-cols-12 lg:gap-10 rounded-xl border border-primary-light/50 bg-white p-5 lg:p-6 shadow-sm"
              >
                {/* Image */}
                <div className="lg:col-span-4">
                  <div className="relative h-55 overflow-hidden rounded-lg">
                    <Image
                      src={story.image}
                      alt={story.title}
                      fill
                      className={
                        story.imageContain ? 'object-contain' : 'object-cover'
                      }
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="lg:col-span-8">
                  <h3 className="text-primary text-xl font-semibold lg:text-2xl uppercase">
                    {story.title}
                  </h3>
                  <p className="mt-5 text-md text-primary">
                    {story.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import Image from 'next/image';

interface QuoteProps {
  title: string;
  text: string[];
  authorName: string;
  authorRole: string;
  image: string;
}

export function Quote({
  title,
  text,
  authorName,
  authorRole,
  image,
}: QuoteProps) {
  return (
    <section>
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Left - Content */}
            <div>
              {/* Title */}
              <h2 className="text-2xl font-bold text-foreground sm:text-3xl uppercase">
                {title}
              </h2>

              {/* Quote Text */}
              <div className="mt-6 space-y-4 text-foreground/80">
                {text.map((paragraph, index) => (
                  <p key={index} className="text-lg">
                    {index === 0 ? `"${paragraph}` : paragraph}
                    {index === text.length - 1 ? '"' : ''}
                  </p>
                ))}
              </div>

              {/* Author */}
              <div className="mt-8">
                <p className="font-semibold text-lg text-foreground">
                  {authorName}
                </p>
                <p className="text-lg text-foreground/80 mt-1">{authorRole}</p>
              </div>
            </div>

            {/* Right - Image */}
            <div className="relative h-64 overflow-hidden rounded-xl bg-gray-200 sm:h-80 lg:h-full lg:min-h-[400px]">
              <Image
                src={image}
                alt={authorName}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

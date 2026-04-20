import Image from 'next/image';

const images = ['/images/mission/1.png', '/images/mission/2.png'];

interface MissionProps {
  withBackground?: boolean;
}

export function Mission({ withBackground = false }: MissionProps) {
  return (
    <section
      id="mission"
      className={withBackground ? 'bg-light py-16 lg:py-22' : ''}
    >
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {/* Title */}
          <h2 className="text-dark text-xl font-bold sm:text-2xl uppercase">
            მისია და ხედვა
          </h2>

          {/* Images */}
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:gap-6">
            {images.map((src, i) => (
              <div
                key={i}
                className="relative h-64 overflow-hidden rounded-2xl bg-gray-200 sm:h-80 lg:h-90"
              >
                <Image
                  src={src}
                  alt={`მისია და ხედვა ${i + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

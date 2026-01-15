import Image from 'next/image';
import Link from 'next/link';

interface Product {
  id: string;
  slug: string;
  name: string;
  description: string;
  image: string;
}

interface RelatedProductsProps {
  products: Product[];
}

export function RelatedProducts({ products }: RelatedProductsProps) {
  return (
    <section className="bg-gray-100 pb-20 pt-16 lg:pb-34 lg:pt-24 mt-10">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {/* Title */}
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl leading-10">
            შეიძლება დაგაინტერესოს
          </h2>

          {/* Products Grid */}
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => (
              <Link
                key={product.id}
                href={`/products/${product.slug}`}
                className="group block"
              >
                {/* Image */}
                <div className="relative h-70 overflow-hidden rounded-xl bg-white">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Info */}
                <div className="mt-8">
                  <h3 className="font-semibold text-lg text-foreground">
                    {product.name}
                  </h3>
                  <p className="mt-2 text-md text-foreground/70">
                    {product.description}
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

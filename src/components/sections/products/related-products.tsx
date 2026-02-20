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
    <section>
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-xl border border-primary-light/50 p-8 lg:p-10">
            {/* Title */}
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl leading-10 uppercase">
              შეიძლება დაგაინტერესოთ
            </h2>

            {/* Products Grid */}
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {products.map((product) => (
                <Link
                  key={product.id}
                  href={`/products/${product.slug}`}
                  className="group block border border-primary-light/50 rounded-xl shadow-sm p-6"
                >
                  {/* Image */}
                  <div className="relative h-70 overflow-hidden rounded-xl bg-gray-100">
                    {product.image ? (
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center text-foreground/30">
                        სურათი არ მოიძებნა
                      </div>
                    )}
                  </div>

                  {/* Info */}
                  <div className="mt-8">
                    <h3 className="font-semibold text-lg text-foreground uppercase">
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
      </div>
    </section>
  );
}

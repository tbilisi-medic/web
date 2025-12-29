import { Metadata } from 'next';
import { PageHeader } from '@/components/sections/shared';

const getProduct = (slug: string) => {
  return {
    slug,
    name: 'SONOSCAPE E2',
    description: 'ექოსკოპიის პორტატული მოწყობილობა',
    subcategory: 'ექოსკოპია',
  };
};

export async function nagenerateMetadatame({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);

  return {
    title: `${product.name} | კლინიკა`,
    description: product.description,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);

  return (
    <>
      <PageHeader title={product.subcategory} />

      <section className="py-16 lg:py-24">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <p className="text-center text-foreground/60">პროდუქტის დეტალები</p>
          </div>
        </div>
      </section>
    </>
  );
}

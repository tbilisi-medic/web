import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PageHeader } from '@/components/sections/shared';
import {
  ProductDetails,
  RelatedProducts,
} from '@/components/sections/products';
import { Header, Footer } from '@/components/layout';
import { getProductBySlug, getRelatedProducts } from '@/lib/queries/products';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) return { title: 'პროდუქტი ვერ მოიძებნა' };

  return {
    title: product.name,
    description: product.subtitle || product.description || '',
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) notFound();

  const relatedProducts = await getRelatedProducts(
    product.categoryId,
    product.id,
  );

  return (
    <>
      <Header />
      <PageHeader
        title="ციფრული კატალოგი"
        description="აღმოაჩინეთ თქვენი კლინიკისა თუ ბიზნესის საჭიროებებზე მორგებული, მრავალფეროვანი, მაღალი ხარისხისა და სანდოობის მქონე სამედიცინო პროდუქცია ჩვენს განახლებულ ციფრულ კატალოგში"
      />
      <div className="pt-16 lg:pt-22">
        <ProductDetails
          product={{
            name: product.name,
            subtitle: product.subtitle || '',
            description: product.description || '',
            image: product.imageUrl || '',
          }}
        />
      </div>
      <div className="py-16 lg:py-22">
        <RelatedProducts
          products={relatedProducts.map((p) => ({
            id: p.id,
            slug: p.slug,
            name: p.name,
            description: p.subtitle || '',
            image: p.imageUrl || '',
          }))}
        />
      </div>
      <Footer />
    </>
  );
}

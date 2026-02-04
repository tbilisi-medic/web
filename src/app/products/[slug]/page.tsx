import { Metadata } from 'next';
import { PageHeader } from '@/components/sections/shared';
import {
  ProductDetails,
  RelatedProducts,
} from '@/components/sections/products';
import { Header, Footer } from '@/components/layout';

const getProduct = (slug: string) => {
  return {
    slug,
    name: 'SONOSCAPE E2',
    subtitle: 'ექოსკოპიის პორტატული მოწყობილობა',
    subcategory: 'ექოსკოპია',
    stats: 'იყენებენ 890 კლინიკაში',
    shortDescription:
      'საბეჭდი და ტიპოგრაფიული ინდუსტრიის უშინაარსო ტექსტია. იგი სტანდარტად 1500-იანი წლებიდან იქცა, როდესაც უცნობმა მბეჭდავმა ამწყობ დაზგაზე წიგნის საცდელი ეგზემპლარი დაბეჭდა',
    fullDescription:
      'საბეჭდი და ტიპოგრაფიული ინდუსტრიის უშინაარსო ტექსტია. იგი სტანდარტად 1500-იანი წლებიდან იქცა, როდესაც უცნობმა მბეჭდავმა ამწყობ დაზგაზე წიგნის საცდელი ეგზემპლარი დაბეჭდა. მისი ტექსტი არამარტო 5 საუკუნის მანძილზე შემორჩა, არამედ მან დღემდე, ელექტრონული ტიპოგრაფიის დრომდეც უცვლელად მოაღწია',
    image: '/images/products/1.jpg',
  };
};

const getRelatedProducts = () => {
  return [
    {
      id: '1',
      slug: 'sonoscape-e3',
      name: 'SONOSCAPE E2',
      description: 'ექოსკოპიის პორტატული მოწყობილობა',
      image: '/images/products/1.jpg',
    },
    {
      id: '2',
      slug: 'sonoscape-e4',
      name: 'SONOSCAPE E2',
      description: 'ექოსკოპიის პორტატული მოწყობილობა',
      image: '/images/products/1.jpg',
    },
    {
      id: '3',
      slug: 'sonoscape-e5',
      name: 'SONOSCAPE E2',
      description: 'ექოსკოპიის პორტატული მოწყობილობა',
      image: '/images/products/1.jpg',
    },
    {
      id: '4',
      slug: 'sonoscape-e6',
      name: 'SONOSCAPE E2',
      description: 'ექოსკოპიის პორტატული მოწყობილობა',
      image: '/images/products/1.jpg',
    },
  ];
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);

  return {
    title: product.name,
    description: product.shortDescription,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  const relatedProducts = getRelatedProducts();

  return (
    <>
      <Header />
      <PageHeader title={product.subcategory} />
      <ProductDetails product={product} />
      <RelatedProducts products={relatedProducts} />
      <Footer />
    </>
  );
}

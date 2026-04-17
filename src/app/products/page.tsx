import { Metadata } from 'next';
import { ContactSection, PageHeader } from '@/components/sections/shared';
import { ProductCatalog } from '@/components/sections/products';
import { Header, Footer } from '@/components/layout';
import {
  getPublicProducts,
  getCategoriesWithSubcategories,
} from '@/lib/queries/products';

export const metadata: Metadata = {
  title: 'კლინიკებისთვის',
  description: '',
};

export default async function ProductsPage() {
  const [products, categories] = await Promise.all([
    getPublicProducts(),
    getCategoriesWithSubcategories(),
  ]);

  return (
    <>
      <Header />
      <PageHeader
        title={
          <>
            მრავალფეროვანი სამედიცინო <br /> პროდუქცია
          </>
        }
      />
      <div className="pt-16 lg:pt-22">
        <ProductCatalog products={products} categories={categories} />
      </div>
      <div className="py-16 lg:py-22">
        <ContactSection />
      </div>
      <Footer />
    </>
  );
}

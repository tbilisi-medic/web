import { getRandomProducts } from '@/lib/queries/products';
import { ContactForm } from './contact-form';

export async function ContactSection() {
  const products = await getRandomProducts(3);
  return <ContactForm products={products} />;
}

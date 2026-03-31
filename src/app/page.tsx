import {
  Categories,
  TechnicalService,
  LatestNews,
} from '@/components/sections/home';
import {
  Achievements,
  ContactForm,
  Testimonials,
} from '@/components/sections/shared';
import { Header, Footer } from '@/components/layout';
import { Hero } from '@/components/sections/home/hero';
import { getLatestNewsPosts } from '@/lib/queries/blog';

export default async function Home() {
  const latestNews = await getLatestNewsPosts();

  return (
    <>
      <Header />
      <Hero />
      <div className="pt-16 lg:pt-22">
        <Categories />
      </div>
      <div className="pt-16 lg:pt-22">
        <TechnicalService />
      </div>
      <div className="pt-16 lg:pt-22">
        <Achievements />
      </div>
      <div className="pt-16 lg:pt-22">
        <Testimonials />
      </div>
      <div className="pt-16 lg:pt-22">
        <LatestNews posts={latestNews} />
      </div>
      <div className="py-16 lg:py-22">
        <ContactForm />
      </div>
      <Footer />
    </>
  );
}

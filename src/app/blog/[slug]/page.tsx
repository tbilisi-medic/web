import { Metadata } from 'next';
import { PageHeader } from '@/components/sections/shared';

const getPost = (slug: string) => {
  return {
    slug,
    title: 'თანამედროვე საანესთეზიო ტექნოლოგიები და მოწყობილობები',
    description:
      'გაიგეთ, თუ რა შეიცვალა თანამედროვე საანესთეზიო ტექნოლოგიებში და როგორ აერთიანებს ის უსაფრთხოებასა და კომფორტს',
  };
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);

  return {
    title: `${post.title}`,
    description: post.description,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);

  return (
    <>
      <PageHeader />
      <section className="py-16 lg:py-24">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <p className="text-center text-foreground/60">ბლოგი</p>
          </div>
        </div>
      </section>
    </>
  );
}

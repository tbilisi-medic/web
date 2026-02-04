import { Metadata } from 'next';
import { PageHeader } from '@/components/sections/shared';
import { BlogPosts } from '@/components/sections/blog';
import { Header, Footer } from '@/components/layout';

export const metadata: Metadata = {
  title: 'ბლოგი',
  description: '',
};

export default function BlogPage() {
  return (
    <>
      <Header />
      <PageHeader title="ბლოგი" />
      <BlogPosts />
      <Footer />
    </>
  );
}

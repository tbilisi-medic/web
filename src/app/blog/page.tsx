import { Metadata } from 'next';
import { PageHeader } from '@/components/sections/shared';
import { BlogPosts } from '@/components/sections/blog';

export const metadata: Metadata = {
  title: 'ბლოგი',
  description: '',
};

export default function BlogPage() {
  return (
    <>
      <PageHeader title="ბლოგი" />
      <BlogPosts />
    </>
  );
}

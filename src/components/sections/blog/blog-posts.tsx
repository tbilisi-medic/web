'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Suspense } from 'react';

const categories = [
  { id: 'news', name: 'სიახლეები' },
  { id: 'blog', name: 'ბლოგი' },
  { id: 'listen', name: 'მოსასმენი' },
  { id: 'events', name: 'ღონისძიებები' },
  { id: 'diaries', name: 'დღიურები' },
];

const posts = [
  {
    id: 1,
    title: 'თანამედროვე საანესთეზიო ტექნოლოგიები და მოწყობილობები',
    description:
      'გაიგეთ, თუ რა შეიცვალა თანამედროვე საანესთეზიო ტექნოლოგიებში და როგორ აერთიანებს ის უსაფრთხოებასა და კომფორტს',
    image: '/images/categories/1.jpg',
    slug: 'modern-anesthesia-technology',
    category: 'blog',
  },
  {
    id: 2,
    title: 'თანამედროვე საანესთეზიო ტექნოლოგიები და მოწყობილობები',
    description:
      'გაიგეთ, თუ რა შეიცვალა თანამედროვე საანესთეზიო ტექნოლოგიებში და როგორ აერთიანებს ის უსაფრთხოებასა და კომფორტს',
    image: '/images/categories/2.jpg',
    slug: 'modern-anesthesia-technology-2',
    category: 'blog',
  },
  {
    id: 3,
    title: 'თანამედროვე საანესთეზიო ტექნოლოგიები და მოწყობილობები',
    description:
      'გაიგეთ, თუ რა შეიცვალა თანამედროვე საანესთეზიო ტექნოლოგიებში და როგორ აერთიანებს ის უსაფრთხოებასა და კომფორტს',
    image: '/images/categories/3.jpg',
    slug: 'modern-anesthesia-technology-3',
    category: 'events',
  },
];

function BlogPostsContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const activeCategory = searchParams.get('category') || categories[0].id;

  const handleCategoryChange = (categoryId: string) => {
    router.push(`/blog?category=${categoryId}`, { scroll: false });
  };

  const filteredPosts =
    activeCategory === 'news'
      ? posts
      : posts.filter((post) => post.category === activeCategory);

  return (
    <section>
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {/* Category Tabs */}
          <div>
            <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto pb-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => handleCategoryChange(category.id)}
                  className={`shrink-0 flex-1 cursor-pointer whitespace-nowrap rounded-lg px-5 py-3 text-md font-semibold transition-colors lg:shrink uppercase ${
                    activeCategory === category.id
                      ? 'bg-primary border border-primary text-white'
                      : 'bg-white border border-primary/15 text-foreground hover:bg-primary/5'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Posts List */}
          <div className="mt-10 space-y-8">
            {filteredPosts.map((post) => (
              <div
                key={post.id}
                className="grid items-center gap-6 lg:grid-cols-12 lg:gap-10 mb-10"
              >
                {/* Image */}
                <div className="lg:col-span-4">
                  <div className="relative h-60 overflow-hidden rounded-xl bg-gray-200">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="lg:col-span-8">
                  <h3 className="text-xl font-bold text-primary lg:text-2xl uppercase">
                    {post.title}
                  </h3>
                  <p className="mt-4 text-lg text-foreground/80">
                    {post.description}
                  </p>
                  <div className="mt-6">
                    <Link href={`/blog/${post.slug}`}>
                      <Button className="h-12 cursor-pointer rounded-lg bg-primary px-8 text-base font-semibold text-white hover:bg-primary/90 uppercase">
                        სრულად
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More */}
          <div className="mt-14 border-t border-gray-200 pt-8 text-center">
            <button className="cursor-pointer text-md font-medium text-foreground/80 transition-colors hover:text-primary uppercase">
              მაჩვენე მეტი
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export function BlogPosts() {
  return (
    <Suspense>
      <BlogPostsContent />
    </Suspense>
  );
}

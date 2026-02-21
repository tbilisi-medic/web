'use client';

import * as React from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Suspense } from 'react';
import { blogCategories, type BlogPost } from '@/types/blog';

interface BlogPostsContentProps {
  posts: BlogPost[];
  locale: string;
}

function BlogPostsContent({ posts, locale }: BlogPostsContentProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const activeCategory = searchParams.get('category') || blogCategories[0].id;

  const handleCategoryChange = (categoryId: string) => {
    router.push(`/blog?category=${categoryId}`, { scroll: false });
  };

  const filteredPosts = posts.filter(
    (post) => post.category === activeCategory,
  );

  const isEn = locale === 'en';

  return (
    <section>
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {/* Category Tabs */}
          <div>
            <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto pb-4">
              {blogCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => handleCategoryChange(category.id)}
                  className={`shrink-0 flex-1 cursor-pointer whitespace-nowrap rounded-lg px-5 py-3 text-md font-semibold transition-colors lg:shrink uppercase ${
                    activeCategory === category.id
                      ? 'bg-primary border border-primary text-white'
                      : 'bg-white border border-primary/15 text-foreground hover:bg-primary/5'
                  }`}
                >
                  {isEn ? category.nameEn : category.nameKa}
                </button>
              ))}
            </div>
          </div>

          {/* Posts List */}
          <div className="mt-10 space-y-8">
            {filteredPosts.length === 0 ? (
              <p className="text-foreground/60">
                {isEn ? 'No posts found' : 'პოსტები არ მოიძებნა'}
              </p>
            ) : (
              filteredPosts.map((post) => (
                <div
                  key={post.id}
                  className="grid items-center gap-6 lg:grid-cols-12 lg:gap-10 mb-10"
                >
                  {/* Image */}
                  <div className="lg:col-span-4">
                    <div className="relative h-60 overflow-hidden rounded-xl bg-gray-200">
                      {post.imageUrl ? (
                        <Image
                          src={post.imageUrl}
                          alt={isEn ? post.titleEn! : post.titleKa}
                          fill
                          className="object-cover"
                        />
                      ) : (
                        <div className="flex h-full items-center justify-center text-foreground/30">
                          {isEn ? 'No image' : 'სურათი არ მოიძებნა'}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="lg:col-span-8">
                    <h3 className="text-xl font-bold text-primary lg:text-2xl uppercase">
                      {isEn ? post.titleEn! : post.titleKa}
                    </h3>
                    <div
                      className="mt-4 text-lg text-foreground/80 line-clamp-3"
                      dangerouslySetInnerHTML={{
                        __html: isEn ? post.contentEn! : post.contentKa,
                      }}
                    />
                    <div className="mt-6">
                      <Link href={`/blog/${post.slug}`}>
                        <Button className="h-12 cursor-pointer rounded-lg bg-primary px-8 text-base font-semibold text-white hover:bg-primary/90 uppercase">
                          {isEn ? 'Read more' : 'სრულად'}
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

interface BlogPostsProps {
  posts: BlogPost[];
  locale: string;
}

export function BlogPosts({ posts, locale }: BlogPostsProps) {
  return (
    <Suspense>
      <BlogPostsContent posts={posts} locale={locale} />
    </Suspense>
  );
}

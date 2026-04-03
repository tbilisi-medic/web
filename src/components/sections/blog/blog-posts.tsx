'use client';

import * as React from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Suspense } from 'react';
import { blogCategories, type BlogPost } from '@/types/blog';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PaginationEllipsis,
} from '@/components/ui/pagination';

const ITEMS_PER_PAGE = 12;

interface BlogPostsContentProps {
  posts: BlogPost[];
  locale: string;
}

function BlogPostsContent({ posts, locale }: BlogPostsContentProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const activeCategory = searchParams.get('category') || blogCategories[0].id;
  const [currentPage, setCurrentPage] = React.useState(1);

  const handleCategoryChange = (categoryId: string) => {
    setCurrentPage(1);
    router.push(`/blog?category=${categoryId}`, { scroll: false });
  };

  const filteredPosts = posts.filter(
    (post) => post.category === activeCategory,
  );

  const totalPages = Math.ceil(filteredPosts.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedPosts = filteredPosts.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE,
  );

  const isEn = locale === 'en';

  const getPageNumbers = () => {
    const pages: (number | 'ellipsis')[] = [];
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);
      if (currentPage > 3) pages.push('ellipsis');
      for (
        let i = Math.max(2, currentPage - 1);
        i <= Math.min(totalPages - 1, currentPage + 1);
        i++
      ) {
        pages.push(i);
      }
      if (currentPage < totalPages - 2) pages.push('ellipsis');
      pages.push(totalPages);
    }
    return pages;
  };

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
                      : 'bg-white border border-primary/15 text-dark hover:bg-primary/5'
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
              paginatedPosts.map((post) => (
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
                          alt={isEn ? post.titleEn : post.titleKa}
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
                    <h3 className="text-xl font-semibold text-dark lg:text-2xl uppercase">
                      {isEn ? post.titleEn : post.titleKa}
                    </h3>
                    <div
                      className="mt-4 text-md text-dark line-clamp-3 [&_*]:inline"
                      dangerouslySetInnerHTML={{
                        __html:
                          (isEn ? post.subtitleEn : post.subtitleKa) || '',
                      }}
                    />
                    <div className="mt-6">
                      <Link href={`/blog/${post.slug}`}>
                        <Button className="h-12 cursor-pointer rounded-lg px-8 text-base font-semibold text-white uppercase bg-gradient-to-r from-primary-dark to-primary hover:opacity-95">
                          {isEn ? 'Read more' : 'სრულად'}
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {totalPages > 1 && (
            <Pagination className="mt-10 mx-0 justify-start">
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      if (currentPage > 1) {
                        setCurrentPage(currentPage - 1);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }
                    }}
                    className={
                      currentPage === 1
                        ? 'pointer-events-none opacity-50'
                        : 'cursor-pointer'
                    }
                  />
                </PaginationItem>

                {getPageNumbers().map((page, idx) =>
                  page === 'ellipsis' ? (
                    <PaginationItem key={`ellipsis-${idx}`}>
                      <PaginationEllipsis />
                    </PaginationItem>
                  ) : (
                    <PaginationItem key={page}>
                      <PaginationLink
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          setCurrentPage(page);
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        isActive={currentPage === page}
                        className="cursor-pointer"
                      >
                        {page}
                      </PaginationLink>
                    </PaginationItem>
                  ),
                )}

                <PaginationItem>
                  <PaginationNext
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      if (currentPage < totalPages) {
                        setCurrentPage(currentPage + 1);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }
                    }}
                    className={
                      currentPage === totalPages
                        ? 'pointer-events-none opacity-50'
                        : 'cursor-pointer'
                    }
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          )}
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

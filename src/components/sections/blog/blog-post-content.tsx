import Image from 'next/image';

interface BlogPostContentProps {
  post: {
    title: string;
    date: string;
    image: string;
    content: string;
  };
}

export function BlogPostContent({ post }: BlogPostContentProps) {
  return (
    <section>
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          {/* Title */}
          <h1 className="text-2xl max-w-4xl mx-auto text-center font-bold text-foreground sm:text-4xl leading-10 lg:leading-12 uppercase">
            {post.title}
          </h1>

          {/* Date */}
          <p className="mt-5 text-center text-md text-foreground/70">
            {post.date}
          </p>

          {/* Image */}
          <div className="mt-12 relative h-64 overflow-hidden rounded-xl bg-gray-200 sm:h-80 lg:h-90">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div
            className="prose prose-lg mt-15 max-w-none text-foreground/80
              prose-headings:font-bold prose-headings:text-foreground
              prose-h2:mt-10 prose-h2:text-xl lg:prose-h2:text-2xl
              prose-p:leading-relaxed"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </div>
    </section>
  );
}

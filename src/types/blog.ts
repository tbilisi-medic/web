export type BlogPostWithDates = {
  id: string;
  slug: string;
  titleKa: string;
  titleEn: string | null;
  contentKa: string;
  contentEn: string | null;
  category: string;
  imageUrl: string | null;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
};

export const blogCategories = [
  { id: 'news', nameKa: 'სიახლეები', nameEn: 'News' },
  { id: 'blog', nameKa: 'ბლოგი', nameEn: 'Blog' },
  { id: 'events', nameKa: 'ღონისძიებები', nameEn: 'Events' },
  { id: 'diaries', nameKa: 'დღიურები', nameEn: 'Diaries' },
] as const;

export type BlogCategory = (typeof blogCategories)[number]['id'];

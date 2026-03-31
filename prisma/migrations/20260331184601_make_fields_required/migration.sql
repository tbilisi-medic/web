/*
  Warnings:

  - Made the column `title_en` on table `blog_posts` required. This step will fail if there are existing NULL values in that column.
  - Made the column `content_en` on table `blog_posts` required. This step will fail if there are existing NULL values in that column.
  - Made the column `image_url` on table `blog_posts` required. This step will fail if there are existing NULL values in that column.
  - Made the column `subtitle` on table `products` required. This step will fail if there are existing NULL values in that column.
  - Made the column `description` on table `products` required. This step will fail if there are existing NULL values in that column.
  - Made the column `image_url` on table `products` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "blog_posts" ALTER COLUMN "title_en" SET NOT NULL,
ALTER COLUMN "content_en" SET NOT NULL,
ALTER COLUMN "image_url" SET NOT NULL;

-- AlterTable
ALTER TABLE "products" ALTER COLUMN "subtitle" SET NOT NULL,
ALTER COLUMN "description" SET NOT NULL,
ALTER COLUMN "image_url" SET NOT NULL;

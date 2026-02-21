'use client';

import { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Pencil, Trash2 } from 'lucide-react';
import { DeleteBlogDialog } from './delete-blog-dialog';
import { BlogFormModal } from './blog-form-modal';
import { deleteBlogPost } from '@/app/admin/blog/actions';
import { blogCategories, type BlogPost } from '@/types/blog';

interface BlogTableProps {
  posts: BlogPost[];
}

export function BlogTable({ posts }: BlogTableProps) {
  const [deleteDialog, setDeleteDialog] = useState<{
    open: boolean;
    post: BlogPost | null;
  }>({
    open: false,
    post: null,
  });

  const [editModal, setEditModal] = useState<{
    open: boolean;
    post: BlogPost | null;
  }>({
    open: false,
    post: null,
  });

  const getCategoryName = (categoryId: string) => {
    return (
      blogCategories.find((c) => c.id === categoryId)?.nameKa ?? categoryId
    );
  };

  const handleDeleteConfirm = async () => {
    if (deleteDialog.post) {
      await deleteBlogPost(deleteDialog.post.id);
    }
    setDeleteDialog({ open: false, post: null });
  };

  return (
    <>
      <div className="rounded-lg border shadow-sm">
        <Table>
          <TableHeader>
            <TableRow className="uppercase">
              <TableHead>სათაური</TableHead>
              <TableHead>კატეგორია</TableHead>
              <TableHead>თარიღი</TableHead>
              <TableHead className="text-right">მოქმედება</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {posts.length === 0 ? (
              <TableRow>
                <TableCell
                  colSpan={4}
                  className="text-center text-foreground/60"
                >
                  <p className="p-2">პოსტები არ მოიძებნა</p>
                </TableCell>
              </TableRow>
            ) : (
              posts.map((post) => (
                <TableRow key={post.id}>
                  <TableCell className="font-medium">{post.titleKa}</TableCell>
                  <TableCell>{getCategoryName(post.category)}</TableCell>
                  <TableCell>
                    {new Date(post.createdAt).toLocaleDateString('ka-GE')}
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 cursor-pointer"
                        onClick={() => setEditModal({ open: true, post })}
                      >
                        <Pencil className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 cursor-pointer text-red-500 hover:text-red-600"
                        onClick={() => setDeleteDialog({ open: true, post })}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      <DeleteBlogDialog
        open={deleteDialog.open}
        onOpenChange={(open) =>
          setDeleteDialog({ open, post: open ? deleteDialog.post : null })
        }
        postTitle={deleteDialog.post?.titleKa ?? ''}
        onConfirm={handleDeleteConfirm}
      />

      <BlogFormModal
        mode="edit"
        post={editModal.post ?? undefined}
        open={editModal.open}
        onOpenChange={(open) =>
          setEditModal({ open, post: open ? editModal.post : null })
        }
      />
    </>
  );
}

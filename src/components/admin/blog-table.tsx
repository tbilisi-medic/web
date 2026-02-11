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
import { BlogFormModal, BlogPost, categories } from './blog-form-modal';

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
    return categories.find((c) => c.id === categoryId)?.name ?? categoryId;
  };

  const handleEditClick = (post: BlogPost) => {
    setEditModal({ open: true, post });
  };

  const handleDeleteClick = (post: BlogPost) => {
    setDeleteDialog({ open: true, post });
  };

  const handleDeleteConfirm = () => {
    if (deleteDialog.post) {
      // Will connect to Supabase later
      console.log('Delete post:', deleteDialog.post.id);
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
                  <TableCell className="font-medium">{post.title}</TableCell>
                  <TableCell>{getCategoryName(post.category)}</TableCell>
                  <TableCell>{post.createdAt}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 cursor-pointer"
                        onClick={() => handleEditClick(post)}
                      >
                        <Pencil className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 cursor-pointer text-red-500 hover:text-red-600"
                        onClick={() => handleDeleteClick(post)}
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
        postTitle={deleteDialog.post?.title ?? ''}
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

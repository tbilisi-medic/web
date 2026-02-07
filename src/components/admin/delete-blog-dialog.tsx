'use client';

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';

interface DeleteBlogDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  postTitle: string;
  onConfirm: () => void;
}

export function DeleteBlogDialog({
  open,
  onOpenChange,
  postTitle,
  onConfirm,
}: DeleteBlogDialogProps) {
  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>პოსტის წაშლა</AlertDialogTitle>
          <AlertDialogDescription className="mt-4 mb-4">
            დარწმუნებული ხართ, რომ გსურთ &quot;{postTitle}&quot; წაშლა? ეს
            მოქმედება შეუქცევადია.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="cursor-pointer">
            გაუქმება
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={onConfirm}
            className="cursor-pointer bg-red-500 hover:bg-red-600"
          >
            წაშლა
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

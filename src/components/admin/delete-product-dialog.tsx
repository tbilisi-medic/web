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

interface DeleteProductDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  productName: string;
  onConfirm: () => void;
}

export function DeleteProductDialog({
  open,
  onOpenChange,
  productName,
  onConfirm,
}: DeleteProductDialogProps) {
  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="uppercase">
            პროდუქტის წაშლა
          </AlertDialogTitle>
          <AlertDialogDescription className="mt-4 mb-4">
            დარწმუნებული ხართ, რომ გსურთ &quot;{productName}&quot; წაშლა? ეს
            მოქმედება შეუქცევადია.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="cursor-pointer uppercase">
            გაუქმება
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={onConfirm}
            className="cursor-pointer bg-red-500 hover:bg-red-600 uppercase"
          >
            წაშლა
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

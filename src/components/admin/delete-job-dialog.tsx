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

interface DeleteJobDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  jobName: string;
  onConfirm: () => void;
}

export function DeleteJobDialog({
  open,
  onOpenChange,
  jobName,
  onConfirm,
}: DeleteJobDialogProps) {
  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="uppercase">
            ვაკანსიის წაშლა
          </AlertDialogTitle>
          <AlertDialogDescription className="mt-4 mb-4">
            დარწმუნებული ხართ, რომ გსურთ &quot;{jobName}&quot; წაშლა? ეს
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

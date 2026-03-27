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

interface DeleteApplicationDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  fileName: string;
  onConfirm: () => void;
}

export function DeleteApplicationDialog({
  open,
  onOpenChange,
  fileName,
  onConfirm,
}: DeleteApplicationDialogProps) {
  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="uppercase">
            რეზიუმეს წაშლა
          </AlertDialogTitle>
          <AlertDialogDescription className="mt-4 mb-4">
            დარწმუნებული ხართ, რომ გსურთ &quot;{fileName}&quot;-ს წაშლა? ეს
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

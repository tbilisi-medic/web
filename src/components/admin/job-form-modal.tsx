'use client';

import * as React from 'react';
import dynamic from 'next/dynamic';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Plus } from 'lucide-react';
import { createJob, updateJob } from '@/app/admin/jobs/actions';
import type { Job } from '@/types/job';

import 'react-quill-new/dist/quill.snow.css';

const ReactQuill = dynamic(() => import('react-quill-new'), { ssr: false });

interface JobFormModalProps {
  mode: 'add' | 'edit';
  job?: Job;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  children?: React.ReactNode;
}

export function JobFormModal({
  mode,
  job,
  open: controlledOpen,
  onOpenChange,
  children,
}: JobFormModalProps) {
  const [internalOpen, setInternalOpen] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const isControlled = controlledOpen !== undefined;
  const open = isControlled ? controlledOpen : internalOpen;
  const setOpen = isControlled ? onOpenChange! : setInternalOpen;

  const [title, setTitle] = React.useState('');
  const [location, setLocation] = React.useState('');
  const [description, setDescription] = React.useState('');

  React.useEffect(() => {
    if (mode === 'edit' && job && open) {
      setTitle(job.title);
      setLocation(job.location);
      setDescription(job.description);
    } else if (mode === 'add' && open) {
      setTitle('');
      setLocation('');
      setDescription('');
    }
  }, [mode, job, open]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const data = { title, location, description };

      if (mode === 'edit' && job) {
        await updateJob(job.id, data);
      } else {
        await createJob(data);
      }

      setOpen(false);
    } catch (error) {
      console.error('Failed to save job:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const isEdit = mode === 'edit';

  const quillModules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      ['link'],
      ['clean'],
    ],
  };

  const isQuillEmpty = (value: string) =>
    !value ||
    value === '<p><br></p>' ||
    value.replace(/<[^>]*>/g, '').trim() === '';

  const isFormValid =
    title.trim() && location.trim() && !isQuillEmpty(description);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      {!isControlled && (
        <DialogTrigger asChild>
          {children || (
            <Button className="cursor-pointer uppercase">
              <Plus />
              დამატება
            </Button>
          )}
        </DialogTrigger>
      )}
      <DialogContent
        className="sm:max-w-[700px] p-0 gap-0 [&>button]:top-6 [&>button]:right-6"
        onPointerDownOutside={(e) => e.preventDefault()}
        onInteractOutside={(e) => e.preventDefault()}
      >
        <DialogHeader className="p-6 py-5 border-b">
          <DialogTitle className="text-md uppercase">
            {isEdit ? 'ვაკანსიის რედაქტირება' : 'ვაკანსიის დამატება'}
          </DialogTitle>
        </DialogHeader>

        <ScrollArea className="max-h-[75vh]">
          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            {/* Job Title */}
            <div className="space-y-3">
              <Label htmlFor="title" className="uppercase">
                დასახელება
              </Label>
              <Input
                id="title"
                placeholder="ვაკანსიის დასახელება"
                className="h-11 w-full"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>

            {/* Location */}
            <div className="space-y-3">
              <Label htmlFor="location" className="uppercase">
                მდებარეობა
              </Label>
              <Input
                id="location"
                placeholder="მაგ: თბილისი, ბათუმი"
                className="h-11 w-full"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                required
              />
            </div>

            {/* Description */}
            <div className="space-y-3">
              <Label className="uppercase">აღწერა</Label>
              <ReactQuill
                theme="snow"
                value={description}
                onChange={setDescription}
                modules={quillModules}
                className="[&_.ql-container]:min-h-[200px] [&_.ql-editor]:min-h-[200px]"
              />
            </div>

            {/* Actions */}
            <div className="flex justify-end gap-3 pt-4">
              <Button
                type="button"
                variant="outline"
                className="cursor-pointer uppercase"
                onClick={() => setOpen(false)}
                disabled={isSubmitting}
              >
                გაუქმება
              </Button>
              <Button
                type="submit"
                className="cursor-pointer uppercase"
                disabled={isSubmitting || !isFormValid}
              >
                {isSubmitting
                  ? 'იტვირთება...'
                  : isEdit
                    ? 'შენახვა'
                    : 'დამატება'}
              </Button>
            </div>
          </form>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}

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

import 'react-quill-new/dist/quill.snow.css';

const ReactQuill = dynamic(() => import('react-quill-new'), { ssr: false });

export interface Job {
  id: string;
  name: string;
  location: string;
  description: string;
  createdAt: string;
}

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

  const isControlled = controlledOpen !== undefined;
  const open = isControlled ? controlledOpen : internalOpen;
  const setOpen = isControlled ? onOpenChange! : setInternalOpen;

  const [name, setName] = React.useState('');
  const [location, setLocation] = React.useState('');
  const [description, setDescription] = React.useState('');

  // Prefill form when editing
  React.useEffect(() => {
    if (mode === 'edit' && job && open) {
      setName(job.name);
      setLocation(job.location);
      setDescription(job.description);
    } else if (mode === 'add' && open) {
      setName('');
      setLocation('');
      setDescription('');
    }
  }, [mode, job, open]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', { name, location, description });
    setOpen(false);
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

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      {!isControlled && (
        <DialogTrigger asChild>
          {children || (
            <Button className="cursor-pointer">
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
          <DialogTitle className="text-md">
            {isEdit ? 'ვაკანსიის რედაქტირება' : 'ვაკანსიის დამატება'}
          </DialogTitle>
        </DialogHeader>

        <ScrollArea className="max-h-[75vh]">
          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            {/* Job Name */}
            <div className="space-y-3">
              <Label htmlFor="name">დასახელება</Label>
              <Input
                id="name"
                placeholder="ვაკანსიის დასახელება"
                className="h-11 w-full"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            {/* Location */}
            <div className="space-y-3">
              <Label htmlFor="location">მდებარეობა</Label>
              <Input
                id="location"
                placeholder="მაგ: თბილისი, ბათუმი"
                className="h-11 w-full"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                required
              />
            </div>

            {/* Description - Rich Text Editor */}
            <div className="space-y-3">
              <Label>აღწერა</Label>
              <ReactQuill
                theme="snow"
                value={description}
                onChange={setDescription}
                modules={quillModules}
                placeholder="ვაკანსიის აღწერა..."
              />
            </div>

            {/* Actions */}
            <div className="flex justify-end gap-3 pt-4">
              <Button
                type="button"
                variant="outline"
                className="cursor-pointer"
                onClick={() => setOpen(false)}
              >
                გაუქმება
              </Button>
              <Button type="submit" className="cursor-pointer">
                {isEdit ? 'შენახვა' : 'დამატება'}
              </Button>
            </div>
          </form>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}

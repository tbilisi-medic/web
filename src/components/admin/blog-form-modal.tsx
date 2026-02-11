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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Plus } from 'lucide-react';

import 'react-quill-new/dist/quill.snow.css';

const ReactQuill = dynamic(() => import('react-quill-new'), { ssr: false });

export const categories = [
  { id: 'news', name: 'სიახლეები' },
  { id: 'blog', name: 'ბლოგი' },
  { id: 'podcast', name: 'მოსასმენი' },
  { id: 'events', name: 'ღონისძიებები' },
  { id: 'diaries', name: 'დღიურები' },
];

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  content: string;
  createdAt: string;
}

interface BlogFormModalProps {
  mode: 'add' | 'edit';
  post?: BlogPost;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  children?: React.ReactNode;
}

export function BlogFormModal({
  mode,
  post,
  open: controlledOpen,
  onOpenChange,
  children,
}: BlogFormModalProps) {
  const [internalOpen, setInternalOpen] = React.useState(false);

  const isControlled = controlledOpen !== undefined;
  const open = isControlled ? controlledOpen : internalOpen;
  const setOpen = isControlled ? onOpenChange! : setInternalOpen;

  const [title, setTitle] = React.useState('');
  const [selectedCategory, setSelectedCategory] = React.useState('');
  const [content, setContent] = React.useState('');

  // Prefill form when editing
  React.useEffect(() => {
    if (mode === 'edit' && post && open) {
      setTitle(post.title);
      setSelectedCategory(post.category);
      setContent(post.content);
    } else if (mode === 'add' && open) {
      setTitle('');
      setSelectedCategory('');
      setContent('');
    }
  }, [mode, post, open]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', { title, selectedCategory, content });
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
            {isEdit ? 'პოსტის რედაქტირება' : 'პოსტის დამატება'}
          </DialogTitle>
        </DialogHeader>

        <ScrollArea className="max-h-[75vh]">
          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            {/* Title */}
            <div className="space-y-3">
              <Label htmlFor="title" className="uppercase">
                სათაური
              </Label>
              <Input
                id="title"
                placeholder="პოსტის სათაური"
                className="h-11 w-full"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>

            {/* Category */}
            <div className="space-y-3">
              <Label htmlFor="category" className="uppercase">
                კატეგორია
              </Label>
              <Select
                value={selectedCategory}
                onValueChange={setSelectedCategory}
              >
                <SelectTrigger className="!h-11 w-full">
                  <SelectValue placeholder="აირჩიეთ კატეგორია" />
                </SelectTrigger>
                <SelectContent className="w-full">
                  {categories.map((category) => (
                    <SelectItem key={category.id} value={category.id}>
                      {category.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Content - Text Editor */}
            <div className="space-y-3">
              <Label className="uppercase">კონტენტი</Label>
              <ReactQuill
                theme="snow"
                value={content}
                onChange={setContent}
                modules={quillModules}
                className="[&_.ql-container]:min-h-[200px] [&_.ql-editor]:min-h-[200px]"
              />
            </div>

            {/* Image Upload Placeholder */}
            <div className="space-y-3">
              <Label className="uppercase">სურათი</Label>
              <div className="flex h-20 items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50">
                <p className="text-sm font-semibold text-foreground/60 uppercase">
                  ატვირთე სურათი
                </p>
              </div>
            </div>

            {/* Actions */}
            <div className="flex justify-end gap-3 pt-4">
              <Button
                type="button"
                variant="outline"
                className="cursor-pointer uppercase"
                onClick={() => setOpen(false)}
              >
                გაუქმება
              </Button>
              <Button type="submit" className="cursor-pointer uppercase">
                {isEdit ? 'შენახვა' : 'დამატება'}
              </Button>
            </div>
          </form>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}

'use client';

import * as React from 'react';
import Image from 'next/image';
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Plus, Upload, X } from 'lucide-react';
import { createBlogPost, updateBlogPost } from '@/app/admin/blog/actions';
import { uploadImage } from '@/lib/upload';
import { blogCategories, type BlogPost } from '@/types/blog';

import 'react-quill-new/dist/quill.snow.css';

const ReactQuill = dynamic(() => import('react-quill-new'), { ssr: false });

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
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const isControlled = controlledOpen !== undefined;
  const open = isControlled ? controlledOpen : internalOpen;
  const setOpen = isControlled ? onOpenChange! : setInternalOpen;

  const [titleKa, setTitleKa] = React.useState('');
  const [titleEn, setTitleEn] = React.useState('');
  const [selectedCategory, setSelectedCategory] = React.useState('');
  const [contentKa, setContentKa] = React.useState('');
  const [contentEn, setContentEn] = React.useState('');
  const [imageFile, setImageFile] = React.useState<File | null>(null);
  const [imagePreview, setImagePreview] = React.useState<string | null>(null);

  const fileInputRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    if (mode === 'edit' && post && open) {
      setTitleKa(post.titleKa);
      setTitleEn(post.titleEn || '');
      setSelectedCategory(post.category);
      setContentKa(post.contentKa);
      setContentEn(post.contentEn || '');
      setImageFile(null);
      setImagePreview(post.imageUrl || null);
    } else if (mode === 'add' && open) {
      setTitleKa('');
      setTitleEn('');
      setSelectedCategory('');
      setContentKa('');
      setContentEn('');
      setImageFile(null);
      setImagePreview(null);
    }
  }, [mode, post, open]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setImageFile(file);
    setImagePreview(URL.createObjectURL(file));
  };

  const handleRemoveImage = () => {
    setImageFile(null);
    setImagePreview(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      let imageUrl: string | undefined = undefined;

      if (imageFile) {
        const formData = new FormData();
        formData.append('file', imageFile);
        imageUrl = await uploadImage(formData, 'blog');
      } else if (mode === 'edit' && imagePreview) {
        imageUrl = post?.imageUrl || undefined;
      }

      const data = {
        titleKa,
        titleEn,
        contentKa,
        contentEn,
        category: selectedCategory,
        imageUrl,
      };

      if (mode === 'edit' && post) {
        await updateBlogPost(post.id, data);
      } else {
        await createBlogPost(data);
      }

      setOpen(false);
    } catch (error) {
      console.error('Failed to save blog post:', error);
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
    titleKa.trim() &&
    titleEn.trim() &&
    selectedCategory &&
    !isQuillEmpty(contentKa) &&
    !isQuillEmpty(contentEn);

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
        className="sm:max-w-[800px] p-0 gap-0 [&>button]:top-6 [&>button]:right-6"
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
            {/* Category */}
            <div className="space-y-3">
              <Label className="uppercase">კატეგორია</Label>
              <Select
                value={selectedCategory}
                onValueChange={setSelectedCategory}
              >
                <SelectTrigger className="!h-11 w-full">
                  <SelectValue placeholder="აირჩიეთ კატეგორია" />
                </SelectTrigger>
                <SelectContent className="w-full">
                  {blogCategories.map((category) => (
                    <SelectItem key={category.id} value={category.id}>
                      {category.nameKa}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Titles & Content with Tabs */}
            <Tabs defaultValue="ka" className="w-full">
              <TabsList className="w-full">
                <TabsTrigger value="ka" className="flex-1 cursor-pointer">
                  ქართული
                </TabsTrigger>
                <TabsTrigger value="en" className="flex-1 cursor-pointer">
                  English
                </TabsTrigger>
              </TabsList>

              <TabsContent value="ka" className="space-y-6 mt-6">
                {/* Title KA */}
                <div className="space-y-3">
                  <Label className="uppercase">სათაური (ქართული)</Label>
                  <Input
                    placeholder="პოსტის სათაური"
                    className="h-11 w-full"
                    value={titleKa}
                    onChange={(e) => setTitleKa(e.target.value)}
                    required
                  />
                </div>

                {/* Content KA */}
                <div className="space-y-3">
                  <Label className="uppercase">კონტენტი (ქართული)</Label>
                  <ReactQuill
                    theme="snow"
                    value={contentKa}
                    onChange={setContentKa}
                    modules={quillModules}
                    className="[&_.ql-container]:min-h-[200px] [&_.ql-editor]:min-h-[200px]"
                  />
                </div>
              </TabsContent>

              <TabsContent value="en" className="space-y-6 mt-6">
                {/* Title EN */}
                <div className="space-y-3">
                  <Label className="uppercase">სათაური (English)</Label>
                  <Input
                    placeholder="Post title"
                    className="h-11 w-full"
                    value={titleEn}
                    onChange={(e) => setTitleEn(e.target.value)}
                    required
                  />
                </div>

                {/* Content EN */}
                <div className="space-y-3">
                  <Label className="uppercase">კონტენტი (English)</Label>
                  <ReactQuill
                    theme="snow"
                    value={contentEn}
                    onChange={setContentEn}
                    modules={quillModules}
                    className="[&_.ql-container]:min-h-[200px] [&_.ql-editor]:min-h-[200px]"
                  />
                </div>
              </TabsContent>
            </Tabs>

            {/* Image Upload */}
            <div className="space-y-3">
              <Label className="uppercase">სურათი</Label>
              {imagePreview ? (
                <div className="relative h-48 w-full overflow-hidden rounded-lg border">
                  <Image
                    src={imagePreview}
                    alt="Preview"
                    fill
                    className="object-cover"
                  />
                  <button
                    type="button"
                    onClick={handleRemoveImage}
                    className="absolute top-2 right-2 rounded-full bg-black/60 p-1 text-white cursor-pointer hover:bg-black/80"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              ) : (
                <label className="flex h-32 cursor-pointer flex-col items-center justify-center gap-2 rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 transition-colors">
                  <Upload className="h-6 w-6 text-foreground/40" />
                  <p className="text-sm font-semibold text-foreground/60 uppercase">
                    ატვირთე სურათი
                  </p>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                </label>
              )}
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

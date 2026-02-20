'use client';

import * as React from 'react';
import Image from 'next/image';
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
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Plus, Upload, X } from 'lucide-react';
import { createProduct, updateProduct } from '@/app/admin/products/actions';
import { uploadProductImage } from '@/app/admin/products/upload-action';
import type {
  ProductWithRelations,
  CategoryWithSubcategories,
} from '@/types/product';

interface ProductFormModalProps {
  mode: 'add' | 'edit';
  product?: ProductWithRelations;
  categories: CategoryWithSubcategories[];
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  children?: React.ReactNode;
}

export function ProductFormModal({
  mode,
  product,
  categories,
  open: controlledOpen,
  onOpenChange,
  children,
}: ProductFormModalProps) {
  const [internalOpen, setInternalOpen] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const isControlled = controlledOpen !== undefined;
  const open = isControlled ? controlledOpen : internalOpen;
  const setOpen = isControlled ? onOpenChange! : setInternalOpen;

  const [name, setName] = React.useState('');
  const [subtitle, setSubtitle] = React.useState('');
  const [selectedCategory, setSelectedCategory] = React.useState('');
  const [selectedSubcategory, setSelectedSubcategory] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [imageFile, setImageFile] = React.useState<File | null>(null);
  const [imagePreview, setImagePreview] = React.useState<string | null>(null);

  const fileInputRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    if (mode === 'edit' && product && open) {
      setName(product.name);
      setSubtitle(product.subtitle || '');
      setSelectedCategory(product.categoryId);
      setSelectedSubcategory(product.subcategoryId);
      setDescription(product.description || '');
      setImageFile(null);
      setImagePreview(product.imageUrl || null);
    } else if (mode === 'add' && open) {
      setName('');
      setSubtitle('');
      setSelectedCategory('');
      setSelectedSubcategory('');
      setDescription('');
      setImageFile(null);
      setImagePreview(null);
    }
  }, [mode, product, open]);

  const currentCategory = categories.find((c) => c.id === selectedCategory);

  const handleCategoryChange = (value: string) => {
    setSelectedCategory(value);
    setSelectedSubcategory('');
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setImageFile(file);
    setImagePreview(URL.createObjectURL(file));
  };

  const handleRemoveImage = () => {
    setImageFile(null);
    setImagePreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      let imageUrl: string | undefined = undefined;

      // Upload new image if selected
      if (imageFile) {
        const formData = new FormData();
        formData.append('file', imageFile);
        imageUrl = await uploadProductImage(formData);
      } else if (mode === 'edit' && imagePreview) {
        // Keep existing image
        imageUrl = product?.imageUrl || undefined;
      }

      const data = {
        name,
        subtitle: subtitle || undefined,
        description: description || undefined,
        categoryId: selectedCategory,
        subcategoryId: selectedSubcategory,
        imageUrl,
      };

      if (mode === 'edit' && product) {
        await updateProduct(product.id, data);
      } else {
        await createProduct(data);
      }

      setOpen(false);
    } catch (error) {
      console.error('Failed to save product:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const isEdit = mode === 'edit';

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
        className="sm:max-w-[600px] p-0 gap-0 [&>button]:top-6 [&>button]:right-6"
        onPointerDownOutside={(e) => e.preventDefault()}
        onInteractOutside={(e) => e.preventDefault()}
      >
        <DialogHeader className="p-6 py-5 border-b">
          <DialogTitle className="text-md uppercase">
            {isEdit ? 'პროდუქტის რედაქტირება' : 'პროდუქტის დამატება'}
          </DialogTitle>
        </DialogHeader>

        <ScrollArea className="max-h-[75vh]">
          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            {/* Product Name */}
            <div className="space-y-3">
              <Label htmlFor="name" className="uppercase">
                სახელი
              </Label>
              <Input
                id="name"
                placeholder="პროდუქტის სახელი"
                className="h-11 w-full"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            {/* Subtitle */}
            <div className="space-y-3">
              <Label htmlFor="subtitle" className="uppercase">
                ქვესათაური
              </Label>
              <Input
                id="subtitle"
                placeholder="პროდუქტის ქვესათაური"
                className="h-11 w-full"
                value={subtitle}
                onChange={(e) => setSubtitle(e.target.value)}
              />
            </div>

            {/* Category */}
            <div className="space-y-3">
              <Label htmlFor="category" className="uppercase">
                კატეგორია
              </Label>
              <Select
                value={selectedCategory}
                onValueChange={handleCategoryChange}
              >
                <SelectTrigger className="!h-11 w-full">
                  <SelectValue placeholder="აირჩიეთ კატეგორია" />
                </SelectTrigger>
                <SelectContent className="w-full">
                  {categories.map((category) => (
                    <SelectItem key={category.id} value={category.id}>
                      {category.nameKa}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Subcategory */}
            <div className="space-y-3">
              <Label htmlFor="subcategory" className="uppercase">
                ქვეკატეგორია
              </Label>
              <Select
                value={selectedSubcategory}
                onValueChange={setSelectedSubcategory}
                disabled={!selectedCategory}
              >
                <SelectTrigger className="!h-11 w-full">
                  <SelectValue placeholder="აირჩიეთ ქვეკატეგორია" />
                </SelectTrigger>
                <SelectContent className="w-full">
                  {currentCategory?.subcategories.map((sub) => (
                    <SelectItem key={sub.id} value={sub.id}>
                      {sub.nameKa}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Description */}
            <div className="space-y-3">
              <Label htmlFor="description" className="uppercase">
                აღწერა
              </Label>
              <Textarea
                id="description"
                placeholder="პროდუქტის აღწერა"
                rows={4}
                className="w-full"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

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
                disabled={isSubmitting}
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

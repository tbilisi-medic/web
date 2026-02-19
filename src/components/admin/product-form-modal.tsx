'use client';

import * as React from 'react';
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
import { Plus } from 'lucide-react';
import { createProduct, updateProduct } from '@/app/admin/products/actions';
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

  React.useEffect(() => {
    if (mode === 'edit' && product && open) {
      setName(product.name);
      setSubtitle(product.subtitle || '');
      setSelectedCategory(product.categoryId);
      setSelectedSubcategory(product.subcategoryId);
      setDescription(product.description || '');
    } else if (mode === 'add' && open) {
      setName('');
      setSubtitle('');
      setSelectedCategory('');
      setSelectedSubcategory('');
      setDescription('');
    }
  }, [mode, product, open]);

  const currentCategory = categories.find((c) => c.id === selectedCategory);

  const handleCategoryChange = (value: string) => {
    setSelectedCategory(value);
    setSelectedSubcategory('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const data = {
        name,
        subtitle: subtitle || undefined,
        description: description || undefined,
        categoryId: selectedCategory,
        subcategoryId: selectedSubcategory,
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

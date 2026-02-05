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

export const categories = [
  {
    id: 'technology',
    name: 'ტექნოლოგია',
    subcategories: [
      'ექოსკოპია',
      'ენდოსკოპია',
      'ლაპარასკოპია',
      'ანესთეზია',
      'ხელოვნური სუნთქვა',
      'პაციენტის მონიტორინგი',
      'ოფთალმოლოგია',
    ],
  },
  {
    id: 'furniture',
    name: 'ავეჯი',
    subcategories: ['საწოლები', 'მაგიდები', 'სავარძლები', 'კარადები'],
  },
  {
    id: 'consumables',
    name: 'სახარჯები',
    subcategories: ['სამედიცინო სამოსი', 'შპრიცები', 'კათეტერები'],
  },
  {
    id: 'laboratory',
    name: 'ლაბორატორია',
    subcategories: ['ჰემატოლოგია', 'იმუნოლოგია', 'ბიოქიმია', 'კოაგულაცია'],
  },
  {
    id: 'aesthetics',
    name: 'ესთეტიკა',
    subcategories: ['ლაზერები', 'ინექციები', 'აპარატურა'],
  },
];

export interface Product {
  id: string;
  name: string;
  category: string;
  subcategory: string;
  description?: string;
  createdAt: string;
}

interface ProductFormModalProps {
  mode: 'add' | 'edit';
  product?: Product;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  children?: React.ReactNode;
}

export function ProductFormModal({
  mode,
  product,
  open: controlledOpen,
  onOpenChange,
  children,
}: ProductFormModalProps) {
  const [internalOpen, setInternalOpen] = React.useState(false);

  const isControlled = controlledOpen !== undefined;
  const open = isControlled ? controlledOpen : internalOpen;
  const setOpen = isControlled ? onOpenChange! : setInternalOpen;

  const [name, setName] = React.useState('');
  const [selectedCategory, setSelectedCategory] = React.useState('');
  const [selectedSubcategory, setSelectedSubcategory] = React.useState('');
  const [description, setDescription] = React.useState('');

  // Prefill form when editing
  React.useEffect(() => {
    if (mode === 'edit' && product && open) {
      setName(product.name);
      setSelectedCategory(product.category);
      setSelectedSubcategory(product.subcategory);
      setDescription(product.description || '');
    } else if (mode === 'add' && open) {
      setName('');
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', {
      name,
      selectedCategory,
      selectedSubcategory,
      description,
    });
    setOpen(false);
  };

  const isEdit = mode === 'edit';

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
        className="sm:max-w-[600px] p-0 gap-0 [&>button]:top-6 [&>button]:right-6"
        onPointerDownOutside={(e) => e.preventDefault()}
        onInteractOutside={(e) => e.preventDefault()}
      >
        <DialogHeader className="p-6 py-5 border-b">
          <DialogTitle className="text-md">
            {isEdit ? 'პროდუქტის რედაქტირება' : 'პროდუქტის დამატება'}
          </DialogTitle>
        </DialogHeader>

        <ScrollArea className="max-h-[75vh]">
          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            {/* Product Name */}
            <div className="space-y-3">
              <Label htmlFor="name">სახელი</Label>
              <Input
                id="name"
                placeholder="პროდუქტის სახელი"
                className="h-11 w-full"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            {/* Category */}
            <div className="space-y-3">
              <Label htmlFor="category">კატეგორია</Label>
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
                      {category.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Subcategory */}
            <div className="space-y-3">
              <Label htmlFor="subcategory">ქვეკატეგორია</Label>
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
                    <SelectItem key={sub} value={sub}>
                      {sub}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Description */}
            <div className="space-y-3">
              <Label htmlFor="description">აღწერა</Label>
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
              <Label>სურათი</Label>
              <div className="flex h-20 items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50">
                <p className="text-sm text-foreground/60">ატვირთე სურათი</p>
              </div>
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

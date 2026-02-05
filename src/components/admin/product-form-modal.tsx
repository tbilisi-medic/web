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

const categories = [
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

interface ProductFormModalProps {
  children?: React.ReactNode;
}

export function ProductFormModal({ children }: ProductFormModalProps) {
  const [open, setOpen] = React.useState(false);
  const [selectedCategory, setSelectedCategory] = React.useState('');
  const [selectedSubcategory, setSelectedSubcategory] = React.useState('');

  const currentCategory = categories.find((c) => c.id === selectedCategory);

  const handleCategoryChange = (value: string) => {
    setSelectedCategory(value);
    setSelectedSubcategory('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted');
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children || (
          <Button className="cursor-pointer">
            <Plus />
            დამატება
          </Button>
        )}
      </DialogTrigger>
      <DialogContent
        className="sm:max-w-[600px] p-0 gap-0 [&>button]:top-6 [&>button]:right-6"
        onPointerDownOutside={(e) => e.preventDefault()}
        onInteractOutside={(e) => e.preventDefault()}
      >
        <DialogHeader className="p-6 py-5 border-b">
          <DialogTitle className="text-md">პროდუქტის დამატება</DialogTitle>
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
                დამატება
              </Button>
            </div>
          </form>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}

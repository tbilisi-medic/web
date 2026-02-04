'use client';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Pencil, Trash2 } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  category: string;
  subcategory: string;
  createdAt: string;
}

interface ProductsTableProps {
  products: Product[];
}

export function ProductsTable({ products }: ProductsTableProps) {
  const handleEdit = (id: string) => {
    // Will implement later
    console.log('Edit product:', id);
  };

  const handleDelete = (id: string) => {
    // Will implement later
    console.log('Delete product:', id);
  };

  return (
    <div className="rounded-lg border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>სახელი</TableHead>
            <TableHead>კატეგორია</TableHead>
            <TableHead>ქვეკატეგორია</TableHead>
            <TableHead>თარიღი</TableHead>
            <TableHead className="text-right">მოქმედება</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.length === 0 ? (
            <TableRow>
              <TableCell colSpan={5} className="text-center text-foreground/60">
                პროდუქტები არ მოიძებნა
              </TableCell>
            </TableRow>
          ) : (
            products.map((product) => (
              <TableRow key={product.id}>
                <TableCell className="font-medium">{product.name}</TableCell>
                <TableCell>{product.category}</TableCell>
                <TableCell>{product.subcategory}</TableCell>
                <TableCell>{product.createdAt}</TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 cursor-pointer"
                      onClick={() => handleEdit(product.id)}
                    >
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 cursor-pointer text-red-500 hover:text-red-600"
                      onClick={() => handleDelete(product.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
}

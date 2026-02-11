'use client';

import { useState } from 'react';
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
import { DeleteProductDialog } from './delete-product-dialog';
import { ProductFormModal, Product, categories } from './product-form-modal';

interface ProductsTableProps {
  products: Product[];
}

export function ProductsTable({ products }: ProductsTableProps) {
  const [deleteDialog, setDeleteDialog] = useState<{
    open: boolean;
    product: Product | null;
  }>({
    open: false,
    product: null,
  });

  const [editModal, setEditModal] = useState<{
    open: boolean;
    product: Product | null;
  }>({
    open: false,
    product: null,
  });

  const getCategoryName = (categoryId: string) => {
    return categories.find((c) => c.id === categoryId)?.name ?? categoryId;
  };

  const handleEditClick = (product: Product) => {
    setEditModal({ open: true, product });
  };

  const handleDeleteClick = (product: Product) => {
    setDeleteDialog({ open: true, product });
  };

  const handleDeleteConfirm = () => {
    if (deleteDialog.product) {
      // Will connect to Supabase later
      console.log('Delete product:', deleteDialog.product.id);
    }
    setDeleteDialog({ open: false, product: null });
  };

  return (
    <>
      <div className="rounded-lg border shadow-sm">
        <Table>
          <TableHeader>
            <TableRow className="uppercase">
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
                <TableCell
                  colSpan={5}
                  className="text-center text-foreground/60"
                >
                  <p className="p-2">პროდუქტები არ მოიძებნა</p>
                </TableCell>
              </TableRow>
            ) : (
              products.map((product) => (
                <TableRow key={product.id}>
                  <TableCell className="font-medium">{product.name}</TableCell>
                  <TableCell>{getCategoryName(product.category)}</TableCell>
                  <TableCell>{product.subcategory}</TableCell>
                  <TableCell>{product.createdAt}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 cursor-pointer"
                        onClick={() => handleEditClick(product)}
                      >
                        <Pencil className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 cursor-pointer text-red-500 hover:text-red-600"
                        onClick={() => handleDeleteClick(product)}
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

      <DeleteProductDialog
        open={deleteDialog.open}
        onOpenChange={(open) =>
          setDeleteDialog({ open, product: open ? deleteDialog.product : null })
        }
        productName={deleteDialog.product?.name ?? ''}
        onConfirm={handleDeleteConfirm}
      />

      <ProductFormModal
        mode="edit"
        product={editModal.product ?? undefined}
        open={editModal.open}
        onOpenChange={(open) =>
          setEditModal({ open, product: open ? editModal.product : null })
        }
      />
    </>
  );
}

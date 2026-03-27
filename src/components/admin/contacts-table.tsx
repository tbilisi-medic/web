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
import { Trash2 } from 'lucide-react';
import { DeleteContactDialog } from './delete-contact-dialog';
import { deleteContactRequest } from '@/app/admin/contacts/actions';

interface ContactRequest {
  id: string;
  name: string;
  phone: string;
  email: string;
  source: string;
  productName: string | null;
  createdAt: Date;
}

interface ContactsTableProps {
  contacts: ContactRequest[];
}

const sourceLabels: Record<string, string> = {
  technical_service: 'ტექნიკური მომსახურება',
  product: 'პროდუქტი',
  contact: 'საკონტაქტო',
};

export function ContactsTable({ contacts }: ContactsTableProps) {
  const [deleteDialog, setDeleteDialog] = useState<{
    open: boolean;
    contact: ContactRequest | null;
  }>({
    open: false,
    contact: null,
  });

  const handleDeleteConfirm = async () => {
    if (deleteDialog.contact) {
      await deleteContactRequest(deleteDialog.contact.id);
    }
    setDeleteDialog({ open: false, contact: null });
  };

  return (
    <>
      <div className="bg-white rounded-lg border shadow-sm">
        <Table>
          <TableHeader>
            <TableRow className="uppercase">
              <TableHead>სახელი</TableHead>
              <TableHead>ტელეფონი</TableHead>
              <TableHead>ელ. ფოსტა</TableHead>
              <TableHead>წყარო</TableHead>
              <TableHead>პროდუქტი</TableHead>
              <TableHead>თარიღი</TableHead>
              <TableHead className="text-right">მოქმედება</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {contacts.length === 0 ? (
              <TableRow>
                <TableCell
                  colSpan={7}
                  className="text-center text-foreground/60"
                >
                  <p className="p-2">მოთხოვნები არ მოიძებნა</p>
                </TableCell>
              </TableRow>
            ) : (
              contacts.map((contact) => (
                <TableRow key={contact.id}>
                  <TableCell className="font-medium">{contact.name}</TableCell>
                  <TableCell>{contact.phone}</TableCell>
                  <TableCell>{contact.email}</TableCell>
                  <TableCell>
                    {sourceLabels[contact.source] || contact.source}
                  </TableCell>
                  <TableCell>{contact.productName || '—'}</TableCell>
                  <TableCell>
                    {new Date(contact.createdAt).toLocaleDateString('ka-GE')}
                  </TableCell>
                  <TableCell className="text-right">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 cursor-pointer text-red-500 hover:text-red-600"
                      onClick={() => setDeleteDialog({ open: true, contact })}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      <DeleteContactDialog
        open={deleteDialog.open}
        onOpenChange={(open: boolean) =>
          setDeleteDialog({ open, contact: open ? deleteDialog.contact : null })
        }
        contactName={deleteDialog.contact?.name ?? ''}
        onConfirm={handleDeleteConfirm}
      />
    </>
  );
}

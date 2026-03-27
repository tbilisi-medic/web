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
import { Trash2, Download } from 'lucide-react';
import { DeleteApplicationDialog } from './delete-application-dialog';
import { deleteJobApplication } from '@/app/admin/applications/actions';

interface JobApplication {
  id: string;
  jobId: string;
  jobTitle: string;
  fileName: string;
  fileUrl: string;
  createdAt: Date;
}

interface ApplicationsTableProps {
  applications: JobApplication[];
}

export function ApplicationsTable({ applications }: ApplicationsTableProps) {
  const [deleteDialog, setDeleteDialog] = useState<{
    open: boolean;
    application: JobApplication | null;
  }>({
    open: false,
    application: null,
  });

  const handleDeleteConfirm = async () => {
    if (deleteDialog.application) {
      await deleteJobApplication(deleteDialog.application.id);
    }
    setDeleteDialog({ open: false, application: null });
  };

  return (
    <>
      <div className="bg-white rounded-lg border shadow-sm">
        <Table>
          <TableHeader>
            <TableRow className="uppercase">
              <TableHead>ვაკანსია</TableHead>
              <TableHead>ფაილი</TableHead>
              <TableHead>თარიღი</TableHead>
              <TableHead className="text-right">მოქმედება</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {applications.length === 0 ? (
              <TableRow>
                <TableCell
                  colSpan={4}
                  className="text-center text-foreground/60"
                >
                  <p className="p-2">რეზიუმე არ მოიძებნა</p>
                </TableCell>
              </TableRow>
            ) : (
              applications.map((application) => (
                <TableRow key={application.id}>
                  <TableCell className="font-medium">
                    {application.jobTitle}
                  </TableCell>
                  <TableCell>{application.fileName}</TableCell>
                  <TableCell>
                    {new Date(application.createdAt).toLocaleDateString(
                      'ka-GE',
                    )}
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <a
                        href={application.fileUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 cursor-pointer"
                        >
                          <Download className="h-4 w-4" />
                        </Button>
                      </a>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 cursor-pointer text-red-500 hover:text-red-600"
                        onClick={() =>
                          setDeleteDialog({ open: true, application })
                        }
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

      <DeleteApplicationDialog
        open={deleteDialog.open}
        onOpenChange={(open: boolean) =>
          setDeleteDialog({
            open,
            application: open ? deleteDialog.application : null,
          })
        }
        fileName={deleteDialog.application?.fileName ?? ''}
        onConfirm={handleDeleteConfirm}
      />
    </>
  );
}

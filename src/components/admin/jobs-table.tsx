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
import { DeleteJobDialog } from './delete-job-dialog';
import { JobFormModal, Job } from './job-form-modal';

interface JobsTableProps {
  jobs: Job[];
}

export function JobsTable({ jobs }: JobsTableProps) {
  const [deleteDialog, setDeleteDialog] = useState<{
    open: boolean;
    job: Job | null;
  }>({
    open: false,
    job: null,
  });

  const [editModal, setEditModal] = useState<{
    open: boolean;
    job: Job | null;
  }>({
    open: false,
    job: null,
  });

  const handleEditClick = (job: Job) => {
    setEditModal({ open: true, job });
  };

  const handleDeleteClick = (job: Job) => {
    setDeleteDialog({ open: true, job });
  };

  const handleDeleteConfirm = () => {
    if (deleteDialog.job) {
      // Will connect to Supabase later
      console.log('Delete job:', deleteDialog.job.id);
    }
    setDeleteDialog({ open: false, job: null });
  };

  return (
    <>
      <div className="rounded-lg border shadow-sm">
        <Table>
          <TableHeader>
            <TableRow className="uppercase">
              <TableHead>დასახელება</TableHead>
              <TableHead>მდებარეობა</TableHead>
              <TableHead>თარიღი</TableHead>
              <TableHead className="text-right">მოქმედება</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {jobs.length === 0 ? (
              <TableRow>
                <TableCell
                  colSpan={4}
                  className="text-center text-foreground/60"
                >
                  ვაკანსიები არ მოიძებნა
                </TableCell>
              </TableRow>
            ) : (
              jobs.map((job) => (
                <TableRow key={job.id}>
                  <TableCell className="font-medium">{job.name}</TableCell>
                  <TableCell>{job.location}</TableCell>
                  <TableCell>{job.createdAt}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 cursor-pointer"
                        onClick={() => handleEditClick(job)}
                      >
                        <Pencil className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 cursor-pointer text-red-500 hover:text-red-600"
                        onClick={() => handleDeleteClick(job)}
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

      <DeleteJobDialog
        open={deleteDialog.open}
        onOpenChange={(open) =>
          setDeleteDialog({ open, job: open ? deleteDialog.job : null })
        }
        jobName={deleteDialog.job?.name ?? ''}
        onConfirm={handleDeleteConfirm}
      />

      <JobFormModal
        mode="edit"
        job={editModal.job ?? undefined}
        open={editModal.open}
        onOpenChange={(open) =>
          setEditModal({ open, job: open ? editModal.job : null })
        }
      />
    </>
  );
}

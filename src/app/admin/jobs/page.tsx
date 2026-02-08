'use client';

import { useState } from 'react';
import { AdminHeader, JobsTable, JobFormModal } from '@/components/admin';
import { Input } from '@/components/ui/input';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import { Search } from 'lucide-react';

// jobs data
const jobs = [
  {
    id: '1',
    name: 'გაყიდვების მენეჯერი',
    location: 'თბილისი',
    description:
      '<p>ლორემ იპსუმ დოლორ სით ამეთ, <strong>კონსექტეთურ ადიპისიცინგ ელით</strong>. სედ დო ეიუსმოდ თემპორ ინციდიდუნთ უთ ლაბორე ეთ დოლორე მაგნა ალიქუა.</p>',
    createdAt: '2025-01-15',
  },
  {
    id: '2',
    name: 'ტექნიკური სპეციალისტი',
    location: 'თბილისი',
    description:
      '<p>უთ ენიმ ად მინიმ ვენიამ, <em>ქუის ნოსთრუდ ექსერციტათიონ</em> ულამცო ლაბორის ნისი უთ ალიქუიპ ექს ეა კომოდო კონსექუათ.</p>',
    createdAt: '2025-01-18',
  },
  {
    id: '3',
    name: 'მარკეტინგის მენეჯერი',
    location: 'ბათუმი',
    description:
      '<p>დუის აუთე ირურე დოლორ ინ რეპრეჰენდერით ინ ვოლუპთათე ველით ესსე ცილუმ დოლორე ეუ ფუგიათ ნულა პარიათურ.</p>',
    createdAt: '2025-01-20',
  },
  {
    id: '4',
    name: 'ბუღალტერი',
    location: 'თბილისი',
    description:
      '<p>ექსცეპთეურ სინთ ოცცაეცათ ცუპიდათათ ნონ პროიდენთ, სუნთ ინ ცულპა ქუი ოფფიცია დესერუნთ მოლით ანიმ იდ ესთ ლაბორუმ.</p>',
    createdAt: '2025-02-01',
  },
  {
    id: '5',
    name: 'ადმინისტრატორი',
    location: 'ქუთაისი',
    description:
      '<p>სედ უთ პერსპიციათის უნდე ომნის ისთე ნათუს ერრორ სით ვოლუპთათემ აცცუსანთიუმ დოლორემქუე ლაუდანთიუმ.</p>',
    createdAt: '2025-02-10',
  },
];

const ITEMS_PER_PAGE = 10;

export default function AdminJobsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const filteredJobs = jobs.filter((job) =>
    job.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const totalPages = Math.ceil(filteredJobs.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedJobs = filteredJobs.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE,
  );

  // Reset to first page when search changes
  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    setCurrentPage(1);
  };

  return (
    <>
      <AdminHeader title="ვაკანსიები" />
      <div className="flex-1 p-4">
        <div className="mx-auto w-full max-w-7xl">
          {/* Actions */}
          <div className="flex items-center justify-between gap-4">
            <div className="relative w-full max-w-sm">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-foreground/60" />
              <Input
                placeholder="ძიება..."
                value={searchQuery}
                onChange={(e) => handleSearchChange(e.target.value)}
                className="h-10 pl-9"
              />
            </div>
            <JobFormModal mode="add" />
          </div>

          {/* Table */}
          <div className="mt-5">
            <JobsTable jobs={paginatedJobs} />
          </div>

          {/* Footer: Count + Pagination */}
          <div className="mt-4 flex items-center justify-between">
            <p className="whitespace-nowrap text-sm text-foreground/60">
              სულ: {filteredJobs.length} ვაკანსია
            </p>

            {totalPages > 1 && (
              <Pagination className="mx-0 w-auto justify-end">
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        if (currentPage > 1) setCurrentPage(currentPage - 1);
                      }}
                      className={
                        currentPage === 1
                          ? 'pointer-events-none opacity-50'
                          : 'cursor-pointer'
                      }
                    >
                      წინა
                    </PaginationPrevious>
                  </PaginationItem>

                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                    (page) => (
                      <PaginationItem key={page}>
                        <PaginationLink
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            setCurrentPage(page);
                          }}
                          isActive={currentPage === page}
                          className="cursor-pointer"
                        >
                          {page}
                        </PaginationLink>
                      </PaginationItem>
                    ),
                  )}

                  <PaginationItem>
                    <PaginationNext
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        if (currentPage < totalPages)
                          setCurrentPage(currentPage + 1);
                      }}
                      className={
                        currentPage === totalPages
                          ? 'pointer-events-none opacity-50'
                          : 'cursor-pointer'
                      }
                    >
                      შემდეგი
                    </PaginationNext>
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

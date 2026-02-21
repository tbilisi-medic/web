'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import type { Job } from '@/types/job';

interface JobListingsProps {
  jobs: Job[];
}

export function JobListings({ jobs }: JobListingsProps) {
  if (jobs.length === 0) return null;

  return (
    <section>
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {/* Title */}
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl leading-10 uppercase">
            გახდი ჩვენი გუნდის წევრი
          </h2>

          {/* Description */}
          <p className="mt-6 text-lg text-foreground/80">
            თბილისი მედიკის გუნდის წევრობა ნიშნავს პროფესიულ გარემოში მუშაობას,
            სადაც ხარისხი, განვითარება და ადამიანებზე ზრუნვა მთავარი
            ღირებულებებია. აქ თანამშრომლებს ეძლევათ შესაძლებლობა მუდმივად
            გაიზარდონ და იყვნენ ერთიანი გუნდის ნაწილი, რომელიც ყოველდღიურად
            ქმნის ღირებულებას პაციენტებისა და საზოგადოებისათვის.
          </p>

          {/* Tabs */}
          <div className="mt-12">
            <Tabs
              defaultValue={jobs[0].id}
              className="flex flex-col gap-6 lg:flex-row lg:gap-8"
            >
              {/* Left - Tab List */}
              <TabsList className="flex h-auto w-full flex-col items-stretch gap-4 bg-transparent lg:w-5/12 lg:self-start">
                {jobs.map((job) => (
                  <TabsTrigger
                    key={job.id}
                    value={job.id}
                    className="flex border border-primary-light cursor-pointer flex-col items-start rounded-xl bg-primary p-6 text-left text-white data-[state=active]:bg-primary data-[state=active]:border-primary data-[state=inactive]:bg-white data-[state=inactive]:text-foreground"
                  >
                    <span className="text-xl font-bold uppercase">
                      {job.title}
                    </span>
                    <span className="mt-2 text-base opacity-80">
                      {job.location}
                    </span>
                  </TabsTrigger>
                ))}
              </TabsList>

              {/* Right - Tab Content */}
              <div className="w-full lg:relative lg:min-h-[518px] lg:w-7/12">
                {jobs.map((job) => (
                  <TabsContent
                    key={job.id}
                    value={job.id}
                    className="mt-0 data-[state=inactive]:hidden lg:absolute lg:inset-0"
                  >
                    <ScrollArea className="lg:h-full">
                      <div className="p-7">
                        <h3 className="text-xl font-bold text-foreground uppercase">
                          {job.title}
                        </h3>
                        <p className="mt-2 text-md text-foreground/70">
                          {job.location} |{' '}
                          {new Date(job.createdAt).toLocaleDateString('ka-GE', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          })}
                        </p>

                        <div className="mt-6">
                          <Link href="">
                            <Button className="h-12 cursor-pointer rounded-lg bg-primary px-8 text-base font-semibold text-white hover:bg-primary/90 uppercase">
                              ატვირთე რეზიუმე
                            </Button>
                          </Link>
                        </div>

                        <div className="mt-8">
                          <h4 className="text-xl font-bold text-foreground uppercase">
                            ვაკანსიის შესახებ
                          </h4>
                          <div
                            className="prose prose-lg mt-4 max-w-none text-foreground/80 break-words"
                            dangerouslySetInnerHTML={{
                              __html: job.description,
                            }}
                          />
                        </div>
                      </div>
                    </ScrollArea>
                  </TabsContent>
                ))}
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
}

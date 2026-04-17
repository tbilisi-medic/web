'use client';

import * as React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { CircleCheck, CircleX } from 'lucide-react';
import type { Job } from '@/types/job';

interface JobListingsProps {
  jobs: Job[];
}

export function JobListings({ jobs }: JobListingsProps) {
  const fileInputRefs = React.useRef<Record<string, HTMLInputElement | null>>(
    {},
  );
  const [isUploading, setIsUploading] = React.useState(false);
  const [success, setSuccess] = React.useState('');
  const [error, setError] = React.useState('');

  React.useEffect(() => {
    if (success) {
      setError('');
      const timer = setTimeout(() => setSuccess(''), 5000);
      return () => clearTimeout(timer);
    }
  }, [success]);

  React.useEffect(() => {
    if (error) {
      setSuccess('');
      const timer = setTimeout(() => setError(''), 5000);
      return () => clearTimeout(timer);
    }
  }, [error]);

  const handleUpload = async (file: File, job: Job) => {
    setIsUploading(true);
    setSuccess('');
    setError('');

    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('jobId', job.id);
      formData.append('jobTitle', job.title);

      const res = await fetch('/api/job-application', {
        method: 'POST',
        body: formData,
      });

      if (res.ok) {
        setSuccess('რეზიუმე წარმატებით აიტვირთა!');
      } else {
        const data = await res.json();
        setError(
          data.error === 'Only PDF and Word documents are allowed'
            ? 'მხოლოდ PDF და Word ფაილებია დაშვებული.'
            : 'ატვირთვა ვერ მოხერხდა. სცადეთ თავიდან.',
        );
      }
    } catch {
      setError('ატვირთვა ვერ მოხერხდა. სცადეთ თავიდან.');
    } finally {
      setIsUploading(false);
    }
  };

  if (jobs.length === 0) return null;

  return (
    <section>
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {/* Title */}
          <h2 className="text-dark text-xl font-bold sm:text-2xl uppercase">
            გახდი ჩვენი გუნდის წევრი
          </h2>

          {/* Alerts */}
          {success && (
            <Alert className="mt-4">
              <CircleCheck className="h-4 w-4 !text-dark" />
              <AlertDescription className="!text-dark text-md">
                {success}
              </AlertDescription>
            </Alert>
          )}
          {error && (
            <Alert className="mt-4 text-red-600">
              <CircleX className="h-4 w-4 !text-red-600" />
              <AlertDescription className="text-red-600">
                {error}
              </AlertDescription>
            </Alert>
          )}

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
                    <span className="text-2xl font-bold uppercase">
                      {job.title}
                    </span>
                    <span className="mt-2 text-base">{job.location}</span>
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
                        <h3 className="text-2xl font-bold text-dark uppercase">
                          {job.title}
                        </h3>
                        <p className="mt-2 text-md text-dark">
                          {job.location} |{' '}
                          {new Date(job.createdAt).toLocaleDateString('ka-GE', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          })}
                        </p>

                        <div className="mt-6">
                          <input
                            ref={(el) => {
                              fileInputRefs.current[job.id] = el;
                            }}
                            type="file"
                            accept=".pdf,.doc,.docx"
                            className="hidden"
                            onChange={(e) => {
                              const file = e.target.files?.[0];
                              if (file) handleUpload(file, job);
                              e.target.value = '';
                            }}
                          />
                          <Button
                            className="cursor-pointer"
                            disabled={isUploading}
                            onClick={() =>
                              fileInputRefs.current[job.id]?.click()
                            }
                          >
                            {isUploading ? 'იტვირთება...' : 'ატვირთე რეზიუმე'}
                          </Button>
                        </div>

                        <div className="mt-8">
                          <h4 className="text-md font-semibold text-dark uppercase">
                            ვაკანსიის შესახებ
                          </h4>
                          <div
                            className="prose prose-md mt-4 max-w-none text-dark break-words
    prose-headings:text-dark
    prose-strong:text-dark
    prose-a:text-dark
    prose-li:text-dark
    prose-ol:text-dark
    prose-ul:text-dark
    prose-blockquote:text-dark"
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

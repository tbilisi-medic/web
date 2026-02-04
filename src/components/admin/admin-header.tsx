import { SidebarTrigger } from '@/components/ui/sidebar';

interface AdminHeaderProps {
  title: string;
}

export function AdminHeader({ title }: AdminHeaderProps) {
  return (
    <header className="flex h-16 shrink-0 items-center border-b px-4">
      <div className="mx-auto flex w-full max-w-7xl items-center gap-2">
        <SidebarTrigger />
        <h1 className="text-md font-semibold">{title}</h1>
      </div>
    </header>
  );
}

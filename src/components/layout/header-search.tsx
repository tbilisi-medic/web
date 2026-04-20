'use client';

import { useState, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

function SearchInput({ mobile = false }: { mobile?: boolean }) {
  const [query, setQuery] = useState('');
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const searchQuery = searchParams.get('search');
    if (searchQuery) {
      setQuery(searchQuery);
    } else {
      setQuery('');
    }
  }, [searchParams]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      if (query.trim()) {
        router.push(`/products?search=${encodeURIComponent(query.trim())}`);
      } else {
        router.push('/products');
      }
    }
  };

  return (
    <div className={`relative ${mobile ? 'block' : 'hidden lg:block'}`}>
      <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-primary" />
      <Input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        className={`h-11 rounded-lg border-0 bg-gray-100 pl-10 pr-9 !text-[16px] focus-visible:ring-0 focus-visible:border-0 ${mobile ? 'w-full' : 'w-65'}`}
      />
    </div>
  );
}

export function HeaderSearch({ mobile = false }: { mobile?: boolean }) {
  return (
    <Suspense
      fallback={
        <div className={`relative ${mobile ? 'block' : 'hidden lg:block'}`}>
          <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-primary" />
          <Input
            type="text"
            disabled
            className="h-11 w-full rounded-lg border-0 bg-gray-100 pl-10 pr-9 !text-[16px] focus-visible:ring-0 focus-visible:border-0"
          />
        </div>
      }
    >
      <SearchInput mobile={mobile} />
    </Suspense>
  );
}

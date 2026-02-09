'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    // TODO: Replace with Supabase auth later

    try {
      console.log('Login attempt:', { email, password });

      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Redirect to admin dashboard on success
      router.push('/admin');
    } catch {
      setError('არასწორი ელ-ფოსტა ან პაროლი');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <Card className="w-full max-w-md py-8">
        <CardHeader className="text-center">
          <CardTitle className="text-xl font-bold">ადმინ პანელი</CardTitle>
          <CardDescription>შედით თქვენს ანგარიშზე</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="rounded-md bg-red-50 p-3 text-sm text-red-500">
                {error}
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="email">ელ-ფოსტა</Label>
              <Input
                id="email"
                type="email"
                placeholder="admin@tbilisimedic.ge"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-11"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">პაროლი</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="h-11"
                required
              />
            </div>

            <Button
              type="submit"
              className="h-11 w-full cursor-pointer"
              disabled={isLoading}
            >
              {isLoading ? 'იტვირთება...' : 'შესვლა'}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

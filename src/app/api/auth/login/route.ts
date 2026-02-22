import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { createSession } from '@/lib/auth';

export async function POST(request: NextRequest) {
  const { email, password } = await request.json();

  if (
    email !== process.env.ADMIN_EMAIL ||
    !bcrypt.compareSync(password, process.env.ADMIN_PASSWORD_HASH!)
  ) {
    return NextResponse.json(
      { error: 'არასწორი ელ-ფოსტა ან პაროლი' },
      { status: 401 },
    );
  }

  await createSession();

  return NextResponse.json({ success: true });
}

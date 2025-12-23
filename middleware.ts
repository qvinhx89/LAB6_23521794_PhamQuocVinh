import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  const apiKey = req.headers.get('x-api-key');
  const validKey = process.env.X_API_KEY;

  if (req.nextUrl.pathname.startsWith('/api/secret')) {
    if (!apiKey || apiKey !== validKey) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/api/secret'],
};

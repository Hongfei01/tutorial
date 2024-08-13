import { NextResponse } from 'next/server';

export const middleware = (req: Request) => {
  console.log(req.url);
  console.log('hello, middleware');
  return NextResponse.redirect(new URL('/', req.url));
};

export const config = {
  matcher: ['/about/:path*', '/tour/:path*'],
};

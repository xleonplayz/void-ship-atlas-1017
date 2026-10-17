import {NextResponse} from 'next/server';
export function middleware(req){if(req.nextUrl.pathname==='/old')return NextResponse.redirect(new URL('/chapters/chapter-1',req.url));
const r=NextResponse.next();
r.headers.set('x-atlas-middleware','yes');
return r}export const config={matcher:['/old','/records/:path*']};

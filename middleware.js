export function middleware(req){
const u=new URL(req.url);
if(u.pathname==='/old')return Response.redirect(new URL('/chapters/chapter-1',req.url),307);
return new Response(null,{headers:{'x-middleware-next':'1','x-atlas-middleware':'yes'}});
}
export const config={matcher:['/old','/records/:path*']};

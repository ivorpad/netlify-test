import type { NextFetchEvent, NextRequest } from "next/server";
import { NextResponse } from 'next/server'

export function middleware(req: NextRequest, ev: NextFetchEvent) {

  const params = Object.fromEntries(req.nextUrl.searchParams.entries());

  if(params.hello !== 'world') {
    return NextResponse.redirect('/');
  }
  

  return NextResponse.next()
}

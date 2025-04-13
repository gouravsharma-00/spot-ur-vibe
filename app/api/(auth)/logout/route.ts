import { NextResponse } from 'next/server';

export async function GET() {
  const response = NextResponse.redirect('https://spot-ur-vibe.vercel.app/');
  response.cookies.set('spotify_token', '', {
    httpOnly: true,
    path: '/',
    expires: new Date(0),
  });

  return response;
}

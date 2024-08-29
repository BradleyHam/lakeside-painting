// app/api/auth/google/callback/route.js
import { google } from 'googleapis';
import { NextResponse } from 'next/server';
import { writeFile } from 'fs/promises';
import path from 'path';

const oauth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  `${process.env.NEXTAUTH_URL}/api/auth/google/callback`
);

export async function GET(request) {
  const searchParams = request.nextUrl.searchParams;
  const code = searchParams.get('code');

  try {
    const { tokens } = await oauth2Client.getToken(code);
    
    // Store tokens in a JSON file
    await writeFile(
      path.join(process.cwd(), 'tokens.json'),
      JSON.stringify(tokens)
    );

    return NextResponse.redirect('/admin/setup-complete');
  } catch (error) {
    console.error('Error getting tokens:', error);
    return NextResponse.redirect('/admin/setup-error');
  }
}
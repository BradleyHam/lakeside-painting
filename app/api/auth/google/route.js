// app/api/auth/google/route.js
import { google } from 'googleapis';
import { NextResponse } from 'next/server';

const oauth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  `${process.env.NEXTAUTH_URL}/api/auth/google/callback`
);

export async function GET() {
  const scopes = ['https://www.googleapis.com/auth/business.manage'];
  const url = oauth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: scopes,
  });
  return NextResponse.redirect(url);
}


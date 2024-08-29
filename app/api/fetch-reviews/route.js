// app/api/fetch-reviews/route.js
import { google } from 'googleapis';
import { readFile } from 'fs/promises';
import path from 'path';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const tokensRaw = await readFile(path.join(process.cwd(), 'tokens.json'), 'utf8');
    const tokens = JSON.parse(tokensRaw);

    const oauth2Client = new google.auth.OAuth2();
    oauth2Client.setCredentials(tokens);

    const mybusiness = google.mybusiness({ version: 'v4', auth: oauth2Client });

    // Replace with actual account and location IDs
    const accountName = 'accounts/YOUR_ACCOUNT_ID';
    const locationName = `${accountName}/locations/YOUR_LOCATION_ID`;

    const response = await mybusiness.accounts.locations.reviews.list({
      parent: locationName,
    });

    return NextResponse.json(response.data);
  } catch (error) {
    console.error('Error fetching reviews:', error);
    return NextResponse.json({ error: 'Failed to fetch reviews' }, { status: 500 });
  }
}
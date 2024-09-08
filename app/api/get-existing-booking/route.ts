import { NextResponse } from 'next/server';
import { google } from 'googleapis';

export async function GET() {
  try {
    const oauth2Client = new google.auth.OAuth2(
      process.env.GOOGLE_CLIENT_ID,
      process.env.GOOGLE_CLIENT_SECRET,
      process.env.REDIRECT_URI
    );

    oauth2Client.setCredentials({
      refresh_token: process.env.GOOGLE_REFRESH_TOKEN
    });

    const calendar = google.calendar({ version: 'v3', auth: oauth2Client });

    const events = await calendar.events.list({
      calendarId: 'primary',
      timeMin: new Date().toISOString(),
      maxResults: 1,
      singleEvents: true,
      orderBy: 'startTime',
    });

    if (events.data.items && events.data.items.length > 0) {
      const event = events.data.items[0];
      return NextResponse.json({
        booking: {
          date: event.start?.dateTime ?? event.start?.date ?? 'No date available',
          timeSlot: event.start?.dateTime 
            ? new Date(event.start.dateTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            : 'No time available',
        }
      });
    } else {
      return NextResponse.json({ booking: null });
    }
  } catch (error) {
    console.error('Error fetching existing booking:', error);
    return NextResponse.json({ error: 'Failed to fetch existing booking' }, { status: 500 });
  }
}

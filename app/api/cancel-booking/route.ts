import { NextResponse } from 'next/server';
import { google } from 'googleapis';

export async function POST(request: Request) {
  try {
    const body = await request.text();
    console.log('Raw request body:', body);

    if (!body) {
      console.error('Empty request body received');
      return NextResponse.json({ error: 'Empty request body' }, { status: 400 });
    }

    let email, phone;
    try {
      ({ email, phone } = JSON.parse(body));
      console.log('Parsed email:', email);
      console.log('Parsed phone:', phone);
    } catch (parseError) {
      console.error('Error parsing request body:', parseError);
      return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
    }

    if (!email && !phone) {
      console.error('Neither email nor phone provided');
      return NextResponse.json({ error: 'Email or phone number is required' }, { status: 400 });
    }

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
      singleEvents: true,
      orderBy: 'startTime',
    });

    console.log('Events fetched:', events.data.items?.length || 0);

    if (!events.data.items) {
      console.error('No events found in the response');
      return NextResponse.json({ error: 'No events found' }, { status: 404 });
    }

    const userEvent = events.data.items.find(event => 
      (email && event.description?.includes(`Email: ${email}`)) ||
      (phone && event.description?.includes(`Phone: ${phone}`))
    );

    if (userEvent) {
      await calendar.events.delete({
        calendarId: 'primary',
        eventId: userEvent.id!,
      });
      console.log('Booking cancelled successfully');
      return NextResponse.json({ message: 'Booking cancelled successfully' });
    } else {
      console.error('No active booking found for this user');
      return NextResponse.json({ message: 'No active booking found for this user' }, { status: 404 });
    }
  } catch (error) {
    console.error('Error cancelling booking:', error);
    if (error instanceof Error) {
      return NextResponse.json({ error: `Failed to cancel booking: ${error.message}` }, { status: 500 });
    }
    return NextResponse.json({ error: 'Failed to cancel booking' }, { status: 500 });
  }
}

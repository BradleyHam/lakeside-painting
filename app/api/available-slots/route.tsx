import { google, calendar_v3 } from 'googleapis';
import { NextResponse } from 'next/server';
import { zonedTimeToUtc, utcToZonedTime, format } from 'date-fns-tz';

const oauth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  process.env.REDIRECT_URI
);

oauth2Client.setCredentials({
  refresh_token: process.env.GOOGLE_REFRESH_TOKEN
});

const calendar = google.calendar({ version: 'v3', auth: oauth2Client });

export async function GET(request: Request) {
  console.log('GOOGLE_CLIENT_ID:', process.env.GOOGLE_CLIENT_ID ? 'Set' : 'Not set');
  console.log('GOOGLE_CLIENT_SECRET:', process.env.GOOGLE_CLIENT_SECRET ? 'Set' : 'Not set');
  console.log('REDIRECT_URI:', process.env.REDIRECT_URI);
  console.log('GOOGLE_REFRESH_TOKEN:', process.env.GOOGLE_REFRESH_TOKEN ? 'Set' : 'Not set');

  const { searchParams } = new URL(request.url);
  const date = searchParams.get('date');

  if (!date) {
    return NextResponse.json({ error: 'Date parameter is required' }, { status: 400 });
  }

  const NZ_TIMEZONE = 'Pacific/Auckland';
  const startOfDay = zonedTimeToUtc(`${date} 00:00`, NZ_TIMEZONE);
  const endOfDay = zonedTimeToUtc(`${date} 23:59`, NZ_TIMEZONE);

  console.log('Requested date:', date);
  console.log('Start of day (UTC):', startOfDay.toISOString());
  console.log('End of day (UTC):', endOfDay.toISOString());

  try { 
    const events = await calendar.events.list({
      calendarId: 'primary',
      timeMin: startOfDay.toISOString(),
      timeMax: endOfDay.toISOString(),
      singleEvents: true,
      orderBy: 'startTime',
    });

    console.log('Fetched events:', events.data.items?.length || 0);

    const availableSlots = calculateAvailableSlots(events.data.items || [], date);
    return NextResponse.json(availableSlots);
  } catch (error) {
    console.error('Error fetching calendar events:', error);
    return NextResponse.json({ 
      error: 'Error fetching available slots',
      details: error instanceof Error ? error.message : String(error)
    }, { status: 500 });
  }
}

function calculateAvailableSlots(events: calendar_v3.Schema$Event[], date: string): string[] {
  const workingHours = { start: 9, end: 17 };
  const slotDuration = 30; // minutes
  const availableSlots: string[] = [];

  for (let hour = workingHours.start; hour < workingHours.end; hour++) {
    for (let minute = 0; minute < 60; minute += slotDuration) {
      const slotTime = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
      if (!isSlotBooked(events, hour, minute)) {
        availableSlots.push(slotTime);
      }
    }
  }

  console.log('Generated slots (NZ time):', availableSlots);
  return availableSlots;
}

function isSlotBooked(events: calendar_v3.Schema$Event[], hour: number, minute: number): boolean {
  if (events.length === 0) return false;

  const slotStart = new Date(events[0].start?.dateTime || '');
  slotStart.setHours(hour, minute, 0, 0);
  const slotEnd = new Date(slotStart.getTime() + 30 * 60000);

  return events.some(event => {
    const eventStart = new Date(event.start?.dateTime || '');
    const eventEnd = new Date(event.end?.dateTime || '');
    return (slotStart < eventEnd && slotEnd > eventStart);
  });
}
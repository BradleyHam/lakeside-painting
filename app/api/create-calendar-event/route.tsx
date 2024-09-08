import { google } from 'googleapis';
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
const gmail = google.gmail({ version: 'v1', auth: oauth2Client });

export async function POST(request: Request) {
  try {
    const { name, email, phone, date, timeSlot, address, objectives } = await request.json();

    // Check if user already has a booking
    const existingBooking = await checkExistingBooking(email, phone);
    if (existingBooking) {
      return NextResponse.json({ error: 'existing_booking' }, { status: 400 });
    }

    const timeZone = 'Pacific/Auckland';
    
    // Parse the date and time in Pacific/Auckland timezone
    const startDateTime = zonedTimeToUtc(`${date} ${timeSlot}`, timeZone);
    
    // Calculate end time (30 minutes later)
    const endDateTime = new Date(startDateTime.getTime() + 30 * 60000);

    const event = {
      summary: `Painting Consultation - ${name}`,
      description: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nAddress: ${address}\nObjectives: ${objectives}`,
      start: {
        dateTime: startDateTime.toISOString(),
        timeZone: timeZone,
      },
      end: {
        dateTime: endDateTime.toISOString(),
        timeZone: timeZone,
      },
    };

    const createdEvent = await calendar.events.insert({
      calendarId: 'primary',
      requestBody: event,
    });
    console.log('Event created successfully:', createdEvent.data);

    // Format the date and time for email
    const formattedDate = format(utcToZonedTime(startDateTime, timeZone), 'MMMM d, yyyy', { timeZone });
    const formattedTime = format(utcToZonedTime(startDateTime, timeZone), 'h:mm a', { timeZone });

    // Send emails
    await sendEmails(name, email, formattedDate, formattedTime);

    return NextResponse.json({ message: 'Event created successfully', eventId: createdEvent.data.id });
  } catch (error) {
    console.error('Detailed error:', error);
    return NextResponse.json({ error: 'general_error' }, { status: 500 });
  }
}

async function sendEmails(clientName: string, clientEmail: string, date: string, timeSlot: string) {
  const notificationEmailContent = `From: Lakeside Painting <${process.env.GMAIL_USER}>
To: ${process.env.NOTIFICATION_EMAIL}
Subject: New Consultation Booking

A new consultation has been booked:

Client Name: ${clientName}
Client Email: ${clientEmail}
Date: ${date}
Time: ${timeSlot}

Please review and confirm this booking.
`;

  const clientEmailContent = `From: Lakeside Painting <${process.env.GMAIL_USER}>
To: ${clientEmail}
Subject: Your Consultation Booking Confirmation

Dear ${clientName},

Thank you for booking a consultation with Lakeside Painting. Your booking details are:

Date: ${date}
Time: ${timeSlot}

We look forward to meeting with you. If you need to make any changes to your booking, please contact us.

Best regards,
Lakeside Painting Team
`;

  try {
    await sendEmail(notificationEmailContent);
    await sendEmail(clientEmailContent);
    console.log('Notification and client emails sent successfully');
  } catch (error) {
    console.error('Error sending emails:', error);
    throw error;
  }
}

async function sendEmail(emailContent: string) {
  const encodedEmail = Buffer.from(emailContent)
    .toString('base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');

  await gmail.users.messages.send({
    userId: 'me',
    requestBody: {
      raw: encodedEmail,
    },
  });
}

async function checkExistingBooking(email: string, phone: string): Promise<boolean> {
  const now = new Date();
  const oneYearFromNow = new Date(now.getFullYear() + 1, now.getMonth(), now.getDate());

  const events = await calendar.events.list({
    calendarId: 'primary',
    timeMin: now.toISOString(),
    timeMax: oneYearFromNow.toISOString(),
    singleEvents: true,
    orderBy: 'startTime',
  });

  const hasExistingBooking = events.data.items?.some(event => 
    event.description?.includes(`Email: ${email}`) || 
    event.description?.includes(`Phone: ${phone}`)
  ) || false;

  console.log(`Checking booking for email: ${email}, phone: ${phone}. Result: ${hasExistingBooking}`);

  return hasExistingBooking;
}
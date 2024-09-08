import { google } from 'googleapis'
import { NextResponse } from 'next/server'

export async function POST(request) {
  const oauth2Client = new google.auth.OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    process.env.GOOGLE_REDIRECT_URI
  )

  // Set credentials using the refresh token
  oauth2Client.setCredentials({
    refresh_token: process.env.GOOGLE_REFRESH_TOKEN
  })

  const calendar = google.calendar({ version: 'v3', auth: oauth2Client })
  const { startTime, endTime, summary, description } = await request.json()

  try {
    const event = await calendar.events.insert({
      calendarId: 'primary',
      resource: {
        summary,
        description,
        start: { dateTime: startTime },
        end: { dateTime: endTime },
      },
    })

    return NextResponse.json({ message: 'Booking successful', eventId: event.data.id })
  } catch (error) {
    console.error('Error booking slot', error)
    return NextResponse.json({ error: 'Error booking slot' }, { status: 500 })
  }
}
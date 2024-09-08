import { google } from 'googleapis'
import { getServerSession } from "next-auth/next"
import { NextResponse } from 'next/server'
import { authOptions } from '../auth/[...nextauth]/route'

export async function POST(request) {
  const session = await getServerSession(authOptions)
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const oauth2Client = new google.auth.OAuth2()
  oauth2Client.setCredentials({ access_token: session.accessToken })

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
import { NextRequest, NextResponse } from 'next/server'

// TODO: wire to email provider (Resend, SendGrid, or similar) before launch
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, message, house } = body

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email and message are required.' },
        { status: 400 }
      )
    }

    // TODO: replace with real email dispatch
    console.log('[Contact form submission]', {
      name,
      email,
      message,
      house: house || 'General CEE',
      timestamp: new Date().toISOString(),
    })

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    )
  }
}

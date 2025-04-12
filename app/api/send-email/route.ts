import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Temporary fix - comment out email logic to test build
export async function POST(request: Request) {
  try {
    // Temporary response to test build
    return NextResponse.json({ message: "Temp fix working" });

    // Commented out email logic for testing
    /*
    const { name, email, message } = await request.json();
    
    // Validate environment variables
    if (!process.env.RESEND_API_KEY) {
      throw new Error('RESEND_API_KEY environment variable is not set');
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'sahi0045@hotmail.com';

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const data = await resend.emails.send({
      from: 'Ayhro Contact <onboarding@resend.dev>',
      to: ADMIN_EMAIL,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json({ success: true, data });
    */
  } catch (error: any) {
    console.error('Detailed error in send-email:', {
      error: error.message,
      stack: error.stack,
      details: error
    });
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
} 
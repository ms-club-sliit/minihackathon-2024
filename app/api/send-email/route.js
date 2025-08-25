import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    // Log the received request
    console.log('Received email request');
    
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not configured');
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      );
    }

    // Parse the request body
    const { email, subject, body } = await request.json();
    
    // Validate inputs
    if (!email || !subject || !body) {
      console.error('Missing required fields:', { email, subject, hasBody: !!body });
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    console.log('Sending email to:', email);

    const { data, error } = await resend.emails.send({
      from: 'Mini Hackathon <no-reply@msclubsliit.org>',
      to: [email],
      subject: subject,
      html: body,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: error.message },
        { status: 500 }
      );
    }

    console.log('Email sent successfully to:', email);
    return NextResponse.json({ 
      success: true, 
      data,
      message: `Email sent successfully to ${email}` 
    });

  } catch (error) {
    console.error('Server error:', error);
    return NextResponse.json(
      { error: 'Internal server error', details: error.message },
      { status: 500 }
    );
  }
}

// Handle preflight requests
export async function OPTIONS(request) {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}

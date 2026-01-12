import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, projectTitle, projectDetails, budget, timeline, message } = body;

    // Validate required fields
    if (!name || !email || !projectTitle || !projectDetails) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // TODO: Add email sending functionality here
    // You can use services like:
    // - Resend (https://resend.com) - Recommended for Next.js
    // - SendGrid (https://sendgrid.com)
    // - Nodemailer with SMTP
    // - Formspree or similar services
    
    // For now, we'll just log the data
    console.log('Contact form submission:', {
      name,
      email,
      projectTitle,
      projectDetails,
      budget,
      timeline,
      message,
      timestamp: new Date().toISOString(),
    });

    // Example: Send email using Resend (uncomment and configure)
    /*
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'your-email@example.com',
      subject: `New Contact Form Submission: ${projectTitle}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Project Title:</strong> ${projectTitle}</p>
        <p><strong>Project Details:</strong> ${projectDetails}</p>
        <p><strong>Budget:</strong> ${budget || 'Not specified'}</p>
        <p><strong>Timeline:</strong> ${timeline || 'Not specified'}</p>
        <p><strong>Message:</strong> ${message || 'None'}</p>
      `,
    });
    */

    return NextResponse.json(
      { 
        success: true,
        message: 'Message sent successfully!' 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send message. Please try again later.' },
      { status: 500 }
    );
  }
}

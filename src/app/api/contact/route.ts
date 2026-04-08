import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY || "re_placeholder");

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, company, interest, message } = body;

    if (!firstName || !lastName || !email) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { error: "Email service not configured" },
        { status: 500 }
      );
    }

    const interestLabels: Record<string, string> = {
      "sell-side": "Sell-Side Advisory",
      "buy-side": "Buy-Side Advisory",
      capital: "Capital Advisory",
      strategic: "Strategic Advisory",
      general: "General Inquiry",
    };

    await resend.emails.send({
      from: "98 Advisors <notifications@98advisors.com>",
      to: "Qcosgrave@98advisors.com",
      replyTo: email,
      subject: `New Inquiry from ${firstName} ${lastName}`,
      html: `
        <div style="font-family: Georgia, serif; color: #1a1a1a; max-width: 600px;">
          <h2 style="font-weight: 300; border-bottom: 1px solid #e0dcd5; padding-bottom: 16px;">
            New Contact Form Submission
          </h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
            <tr>
              <td style="padding: 8px 0; color: #8b7e6a; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; vertical-align: top; width: 140px;">Name</td>
              <td style="padding: 8px 0;">${firstName} ${lastName}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #8b7e6a; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; vertical-align: top;">Email</td>
              <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #1a1a1a;">${email}</a></td>
            </tr>
            ${company ? `<tr><td style="padding: 8px 0; color: #8b7e6a; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; vertical-align: top;">Company</td><td style="padding: 8px 0;">${company}</td></tr>` : ""}
            ${interest ? `<tr><td style="padding: 8px 0; color: #8b7e6a; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; vertical-align: top;">Interest</td><td style="padding: 8px 0;">${interestLabels[interest] || interest}</td></tr>` : ""}
            ${message ? `<tr><td style="padding: 8px 0; color: #8b7e6a; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; vertical-align: top;">Message</td><td style="padding: 8px 0; white-space: pre-wrap;">${message}</td></tr>` : ""}
          </table>
          <p style="margin-top: 24px; font-size: 12px; color: #999;">
            Sent from the 98 Advisors contact form
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}

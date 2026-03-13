import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  await resend.emails.send({
    from: "aaricputt.com <noreply@aaricputt.com>",
    to: process.env.EMAIL!,
    subject: `New message from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
  });

  return NextResponse.json({ success: true });
}
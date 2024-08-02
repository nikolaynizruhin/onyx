import nodemailer from 'nodemailer';
import app from '@/config/app';

export default async function sendEmail(subject: string, text: string) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASSWORD,
    },
  });

  return await transporter.sendMail({
    from: `"${app.name} Website" <${process.env.MAIL_USER}>`,
    to: process.env.MAIL_USER,
    subject,
    text,
  });
}
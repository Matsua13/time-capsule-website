// utils/email.server.ts
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY || '');

export async function sendConfirmationEmail(to: string, token: string) {
  const confirmationUrl = `https://time-capsule-website.herokuapp.com/confirm?token=${token}`;
  const msg = {
    to,
    from: 'ltifene@gmail.com', // Utilise une adresse e-mail authentifiée dans SendGrid
    subject: 'Confirm your e-mail address',
    text: `Please, click on the link below to confirm your e-mail address: ${confirmationUrl}`,
    html: `<p>Click<a href="${confirmationUrl}">here</a></p>`,
  };

  await sgMail.send(msg);
}

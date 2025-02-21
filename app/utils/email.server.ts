import nodemailer from 'nodemailer';

// Configure le transport avec Gmail
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER, // ton adresse Gmail dans .env
    pass: process.env.GMAIL_PASS  // ton mot de passe ou App Password si 2FA est activé dans .env
  }
});

export async function sendConfirmationEmail(to: string, token: string): Promise<void> {
  const baseUrl = process.env.BASE_URL || "http://localhost:3000";
  // Construit l'URL de confirmation en utilisant BASE_URL
  const confirmationUrl = `${baseUrl}/confirm?token=${token}`;

  const mailOptions = {
    from: process.env.GMAIL_USER,
    to,
    subject: 'Please, confirm your e-mail address',
    text: `Click on the link below to confirm your account: ${confirmationUrl}`,
    html: `<p>Click <a href="${confirmationUrl}">here</a> to confirm your e-mail address.</p>`
  };

  await transporter.sendMail(mailOptions);
}

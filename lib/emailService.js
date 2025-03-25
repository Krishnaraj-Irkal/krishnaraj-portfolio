// lib/emailService.js
import nodemailer from 'nodemailer';
import userReplyEmail from '../emailTemplates/userReplyEmail';
import adminNotificationEmail from '../emailTemplates/adminNotificationEmail';

// Load environment variables (Next.js automatically loads .env.local)
const { SMTP_HOST, SMTP_PORT, EMAIL_USER, EMAIL_PASS, ADMIN_EMAIL } = process.env;

// Create a reusable transporter using the default SMTP transport
const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: parseInt(SMTP_PORT, 10),
    secure: false, // true for 465, false for other ports (e.g. 587)
    auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS,
    },
});

// Send a reply email to the user with a personal touch
export const sendUserReply = async ({ name, email }) => {
    const html = userReplyEmail({ name });

    const mailOptions = {
        from: `"Krishnaraj Irkal" <${EMAIL_USER}>`,
        to: email,
        subject: 'Thank you for reaching out!',
        html,
    };

    return transporter.sendMail(mailOptions);
};

// Send a notification email to the admin (you) with the form details
export const sendAdminNotification = async ({ name, email, subject, message }) => {
    const html = adminNotificationEmail({ name, email, subject, message });

    const mailOptions = {
        from: `"Krishnaraj Irkal" <${EMAIL_USER}>`,
        to: ADMIN_EMAIL,
        subject: 'New Contact Form Submission',
        html,
    };

    return transporter.sendMail(mailOptions);
};

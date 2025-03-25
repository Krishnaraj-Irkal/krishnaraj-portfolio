// pages/api/contact.js
import { sendUserReply, sendAdminNotification } from '../../lib/emailService';

import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    // Only allow POST requests
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    const { name, email, subject, message } = req.body;

    // Basic validation
    if (!name || !email || !message) {
        return res.status(400).json({ error: 'Name, email, and message are required.' });
    }

    try {
        // Send notification to the admin (you)
        await sendAdminNotification({ name, email, subject, message });

        // Send a reply email to the user
        await sendUserReply({ name, email });

        return res.status(200).json({ message: 'Emails sent successfully.' });
    } catch (error) {
        console.error('Error sending email:', error);
        return res.status(500).json({ error: 'There was an error sending your message.' });
    }
}

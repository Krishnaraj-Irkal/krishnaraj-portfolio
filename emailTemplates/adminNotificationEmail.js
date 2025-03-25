// emailTemplates/adminNotificationEmail.js

const adminNotificationEmail = ({ name, email, subject, message }) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>New Contact Form Submission</title>
  <style>
    /* Reset & Basic Styles */
    body {
      margin: 0;
      padding: 0;
      font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
      background: #0f172a; /* Dark slate background */
      color: #e5e7eb;      /* Light text */
    }

    /* Container */
    .container {
      max-width: 100%;
      margin: 40px auto;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
    }

    /* Header (Gradient) */
    .header {
      background: linear-gradient(to right, #3b82f6, #2563eb);
      padding: 24px;
      text-align: center;
    }
    .header h1 {
      margin: 0;
      font-size: 26px;
      font-weight: 700;
      color: #f9fafb; /* White-ish text */
    }

    /* Content Area */
    .content {
      background-color: #1f2937; /* Slightly lighter than body for contrast */
      padding: 24px;
    }
    .content p {
      margin: 16px 0;
      line-height: 1.6;
      color: #cbd5e1; /* Slate-300 for better readability */
      font-size: 16px;
    }
    .content p strong {
      color: #ffffff; /* White text for bold labels */
    }

    /* Footer */
    .footer {
      background-color: #1f2937;
      text-align: center;
      padding: 16px;
      border-top: 1px solid #374151; /* Subtle divider */
    }
    .footer p {
      margin: 0;
      color: #9ca3af; /* Gray-400 */
      font-size: 14px;
    }
  </style>
</head>
<body>
  <div class="container">
    <!-- Header -->
    <div class="header">
      <h1>New Contact Form Submission</h1>
    </div>

    <!-- Content -->
    <div class="content">
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    </div>

    <!-- Footer -->
    <div class="footer">
      <p>You have a new message!</p>
    </div>
  </div>
</body>
</html>
`;

export default adminNotificationEmail;

// emailTemplates/userReplyEmail.js

const userReplyEmail = ({ name }) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Thank You for Reaching Out!</title>
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

    /* Button */
    .button {
      display: inline-block;
      margin-top: 24px;
      padding: 12px 24px;
      border-radius: 6px;
      text-decoration: none;
      font-weight: 600;
      color: #ffffff !important;
      background-color: #2563eb; /* Blue-600 */
      
    }
    /* (Note: Many email clients ignore :hover, but you can still include it) */

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
      <h1>Thank You for Reaching Out!</h1>
    </div>

    <!-- Content -->
    <div class="content">
      <p>Hi ${name},</p>
      <p>
        Thank you for getting in touch! I’m excited to read your message and learn
        more about how I can help bring your ideas to life. As a passionate front-end
        developer, I love crafting modern, responsive web experiences.
      </p>
      <p>
        I’ll review your message and get back to you as soon as I can. In the meantime,
        feel free to check out some of my projects and learn more about my work.
      </p>
      <a href="https://yourwebsite.com" class="button">
        Visit My Portfolio
      </a>
    </div>

    <!-- Footer -->
    <div class="footer">
      <p>Cheers,<br />Krishnaraj Irkal</p>
    </div>
  </div>
</body>
</html>
`;

export default userReplyEmail;

export const resetPasswordEmailTemplate = (name: string, link: string) => `
<!DOCTYPE html>
<html>
<head>
    <title>Password Reset</title>
    <style>
        body {
            font-family: Arial, sans-serif;
        }
        .container {
            width: 600px;
            margin: auto;
            background-color: #f6f6f6;
            padding: 20px;
            border-radius: 4px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        .button {
            display: inline-block;
            padding: 10px 20px;
            color: #fff;
            background-color: #7101FF;
            text-decoration: none;
            border-radius: 4px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h2 style="color: #7101FF;">Password Reset Request</h2>
        <p>Dear ${name},</p>
        <p>We received a request to reset your password. Click the button below to set a new password:</p>
        <p><a href="${link}" style="color: #fff;" class="button">Reset Password</a></p>
        <p>If you did not make this request, you can ignore this email.</p>
        <p>Best Regards,<br>liiusion</p>
    </div>
</body>
</html>
`;

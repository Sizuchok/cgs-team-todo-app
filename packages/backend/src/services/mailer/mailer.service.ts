import nodemailer from 'nodemailer';
import { UserDto } from '../../dto/user/user.dto';
import { activationEmailTemplate } from './templates/activation-email-template';
import { resetPasswordEmailTemplate } from './templates/password-reset-template';

export default class MailerService {
  private transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: +process.env.SMTP_PORT!,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD
    }
  });

  constructor(private from: string | undefined = process.env.SMTP_DEFAULT_FROM) {}

  async sendActivationEmail(user: UserDto) {
    const link = `${process.env.FRONT_END_URL}/activate/${user.token}`;

    await this.transporter.sendMail({
      from: this.from,
      to: user.email,
      subject: 'Activate your account',
      html: activationEmailTemplate(user.name, link)
    });
  }

  async sendResetPasswordEmail(user: UserDto) {
    const link = `${process.env.FRONT_END_URL}/reset-password/${user.token}`;

    await this.transporter.sendMail({
      from: this.from,
      to: user.email,
      subject: 'Reset password request',
      html: resetPasswordEmailTemplate(user.name, link)
    });
  }
}

export const mailerService = new MailerService();

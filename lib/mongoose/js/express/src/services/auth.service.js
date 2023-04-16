import User from '../models/user.model';
import Token from '../models/token.model';
import crypto from 'crypto';
import bcrypt from 'bcryptjs';
import sendEmail from '../utils/helpers/sendEmail';

export const requestPasswordReset = async (email) => {
  const user = await User.findOne({ email });

  if (!user) throw new Error('User does not exist');
  let token = await Token.findOne({ userId: user._id });

  if (token) await token.deleteOne();
  let resetToken = crypto.randomBytes(32).toString('hex');
  const hash = await bcrypt.hash(resetToken, 10);

  await new Token({
    userId: user._id,
    token: hash,
    createdAt: Date.now()
  }).save();

  const link = `${process.env.CLIENT_URL}/resetPassword?token=${resetToken}&id=${user._id}`;
  sendEmail(
    user.email,
    'Password Reset Request',
    { name: user.name, link: link },
    './template/requestResetPassword.handlebars'
  );
  return link;
};

export const resetPassword = async (userId, token, password) => {
  let passwordResetToken = await Token.findOne({ userId });
  if (!passwordResetToken) {
    throw new Error('Invalid or expired password reset token');
  }
  const isValid = await bcrypt.compare(token, passwordResetToken.token);
  if (!isValid) {
    throw new Error('Invalid or expired password reset token');
  }

  const user = await User.findById({ _id: userId });
  user.password = password;
  await user.save();
  sendEmail(
    user.email,
    'Password Reset Successfully',
    {
      name: user.name
    },
    './template/resetPassword.handlebars'
  );
  await passwordResetToken.deleteOne();
  return true;
};

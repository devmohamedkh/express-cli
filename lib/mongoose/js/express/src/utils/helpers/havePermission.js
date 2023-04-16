import { ErrorHandler } from './errorHelper';

export function havePermission(req, userId) {
  if (userId != req.user.id && !req.user.roll !== 'admin')
    throw new ErrorHandler(402, 'you dont have promithon to make change! ');
}

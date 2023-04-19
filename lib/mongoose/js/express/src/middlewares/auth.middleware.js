import HttpStatus from 'http-status-codes';
import jwt from 'jsonwebtoken';
import { ErrorHandler } from '../utils/helpers/errorHelper';

/**
 * Middleware to authenticate if user has a valid Authorization token
 * Authorization: Bearer <token>
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export const isAuth = async (req, res, next) => {
  try {
    let bearerToken = req.header('Authorization');
    if (!bearerToken)
      throw new ErrorHandler(
        HttpStatus.BAD_REQUEST,
        'Authorization token is required'
      );
    bearerToken = bearerToken.split(' ')[1];

    const { user } = await jwt.verify(bearerToken, process.env.JWT_SECRIT_KEY);
    res.locals.user = user;
    res.locals.token = bearerToken;
    next();
  } catch (error) {
    next(error);
  }
};

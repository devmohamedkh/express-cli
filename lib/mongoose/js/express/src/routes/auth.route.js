import express from 'express';
import * as authController from '../controllers/auth.controller';

const router = express.Router();

router.post('/login', authController.login);
router.post('/signup', authController.register);
router.post('/reset-password-request', authController.resetPasswordRequest);
router.post('/reset-password', authController.resetPassword);

export default router;

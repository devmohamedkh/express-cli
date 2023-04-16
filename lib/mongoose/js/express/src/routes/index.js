import express from 'express';
const router = express.Router();

import userRoute from './user.route';
import authRoute from './auth.route';
/**
 * Function contains Application routes
 *
 * @returns router
 */
const routes = () => {
  router.get('/', (req, res) => {
    res.json('Welcome');
  });
  router.use('/auth', authRoute);
  router.use('/users', userRoute);

  return router;
};

export default routes;

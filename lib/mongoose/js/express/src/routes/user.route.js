import express from 'express';
import * as userController from '../controllers/user.controller';
import { userAuth } from '../middlewares/auth.middleware';

const router = express.Router();

//route to get all users
router.get('', userController.getAllUsers);

//route to create a new user
router.post('', userController.createUser);

//route to get a single user by their user id
router.get('/:id',  userController.getUserById);

//route to update a single user by their user id
router.patch('/:id',userAuth, userController.updateUser);

//route to delete a single user by their user id
router.delete('/:id',userAuth, userController.deleteUser);

export default router;

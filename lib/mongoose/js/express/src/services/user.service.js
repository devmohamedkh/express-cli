import HttpStatus from 'http-status-codes';
import User from '../models/user.model';
import { newUserValidator } from '../validators/user.validator';
import { ErrorHandler } from '../utils/helpers/errorHelper';

export const getAllUsers = async (req) => {
  const data = await User.find()
    .sort({ _id: -1 })
    .skip(req.query.skip || 0)
    .limit(req.query.limit || 10);
  return data;
};

export const createUser = async (body) => {
  const data = await User.create(body);
  return data;
};

export const updateUser = async (_id, body) => {
  const data = await User.findByIdAndUpdate({ _id }, body, { new: true });
  return data;
};

export const deleteUser = async (id) => {
  await User.findByIdAndDelete(id);
  return '';
};

export const getUserById = async (id) => {
  const data = await User.findById(id);
  if (!data) throw new ErrorHandler(HttpStatus.NOT_FOUND, 'User not found');

  return data;
};

export const searchUsers = async (query) => {
  return await User.find({
    name: { $regex: new RegExp(query, 'i') }
  }).limit(20);
};

export const isCreateUserDataValide = async (data) => {
  const { error, value } = newUserValidator(data);
  if (error)
    throw new ErrorHandler(HttpStatus.BAD_REQUEST, error.details[0].message);
};

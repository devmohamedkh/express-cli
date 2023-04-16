// models/token.model.js
import { Schema, model } from 'mongoose';

const tokenSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'user'
  },
  token: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 3600 // this is the expiry time in seconds
  }
});

export default model('Token', tokenSchema);

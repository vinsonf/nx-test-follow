import { User } from '@nx-test-follow/basic-types';
import {Schema, model} from 'mongoose';


const UserSchema = new Schema<User>({
  username: { type: String, required: true },
});

export const UserModel = model<User>('User', UserSchema);

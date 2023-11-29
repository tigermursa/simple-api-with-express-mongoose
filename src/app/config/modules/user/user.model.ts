import { Schema, model } from 'mongoose';
import { Guardian, UserModelI, UserT } from './user.interface';
import bcrypt from "bcrypt";
import config from '../..';

const guardianSchema = new Schema<Guardian>({
    fatherName: { type: String, required: true },
    motherName: { type: String, required: true },
    others: { type: String, required: true },
});

const userSchema = new Schema<UserT, UserModelI>({
    id: { type: String, required: true, unique: true },
    password: { type: String, required: true},
    name: {
        firstName: { type: String, required: true, maxlength: [20, "not allowed more then 20"], trim: true },
        middleName: { type: String, required: true },
    },
    email: { type: String, required: true, unique: true },
    gender: { type: String, enum: ['male', 'female'], required: true },
    guardian: { type: guardianSchema, required: true },
});

userSchema.pre('save', async function (next) {
    const user = this; // doc
    // hashing password and save into DB
    user.password = await bcrypt.hash(
      user.password,
      Number(config.bcrypt_salt),
    );
    next();
  });


//creating a custom static method
userSchema.statics.isUserExists = async function (id: string) {
    const existingUser = await UserModel.findOne({ id });
    return existingUser;
};

export const UserModel = model<UserT>('User', userSchema);

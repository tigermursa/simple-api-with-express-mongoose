import { Schema, model, connect, Model } from 'mongoose';
import { Guardian, UserT } from './user.interface';

const guardianSchema = new Schema<Guardian>({
    fatherName: { type: String, required: true },
    motherName: { type: String, required: true },
    others: { type: String, required: true },
});

const userSchema = new Schema<UserT>({
    id: { type: String, required: true, unique: true },
    name: {
        firstName: { type: String, required: true },
        middleName: { type: String, required: true },
    },
    email: { type: String, required: true, unique: true },
    gender: { type: String, enum: ['male', 'female'], required: true },
    guardian: { type: guardianSchema, required: true },
});

export const UserModel = model<UserT>('User', userSchema); //user DB te save 

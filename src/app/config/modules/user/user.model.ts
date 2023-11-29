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
    password: { type: String, required: true },
    name: {
        firstName: { type: String, required: true, maxlength: [20, "not allowed more then 20"], trim: true },
        middleName: { type: String, required: true },
    },
    email: { type: String, required: true, unique: true },
    gender: { type: String, enum: ['male', 'female'], required: true },
    guardian: { type: guardianSchema, required: true },
    isDeleted: { type: Boolean, default: false }
},
{
    toJSON: {
      virtuals: true,
    },
  },

);


// virtual
userSchema.virtual('fullName').get(function () {
    return this.name.firstName + this.name.middleName;
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


// set '' after saving password
userSchema.post('save', function (doc, next) {
    doc.password = '';
    next();
});


//middle wears
userSchema.pre('find', function (next) {
    this.find({ isDeleted: { $ne: true } });
    next();
});
userSchema.pre('findOne', function (next) {
    this.find({ isDeleted: { $ne: true } });
    next();
});
userSchema.pre('aggregate', function (next) {
    this.pipeline().unshift({ $match: { isDeleted: { $ne: true } } });
    next();
});


//creating a custom static method
userSchema.statics.isUserExists = async function (id: string) {
    const existingUser = await this.findOne({ id });
    return existingUser;
};

export const UserModel = model<UserT, UserModelI>('User', userSchema);
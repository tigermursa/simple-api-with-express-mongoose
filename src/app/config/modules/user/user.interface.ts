import { Model } from 'mongoose';


export type Guardian = {
    fatherName: string;
    motherName: string;
    others: string
}

export type UserT = {
    id: string;
    password: string;
    name: {
        firstName: string;
        middleName: string;
    }
    email: string;
    gender: "male" | "female";
    guardian: Guardian;
}

//static 
export interface UserModelI extends Model<UserT> {
    isUserExists(id: string): Promise<UserT | null>;
}


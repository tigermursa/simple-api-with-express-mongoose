import { Model } from 'mongoose';


// export type Guardian = {
//     fatherName: string;
//     motherName: string;
//     others: string
// }

export type UserT = {
    id: string;
    name: string;
    password: string;
    isDeleted: boolean;
    email: string;

    //stop
    
    // gender: "male" | "female";
    // guardian: Guardian;
    // name: {
    //     firstName: string;
    //     lastName: string;
    // }

}

//static 
export interface UserModelI extends Model<UserT> {
    isUserExists(id: string): Promise<UserT | null>;
}


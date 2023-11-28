import { UserT } from "./user.interface";
import { UserModel } from "./user.model";

//create
const createUserIntoDB = async (user: UserT) => {
    const result = await UserModel.create(user)
    return result;
}

//get-all
const getAllUsersFromDB = async () => {
    const result = await UserModel.find()
    return result;
}

export const UserServices = {
    createUserIntoDB,
    getAllUsersFromDB
}
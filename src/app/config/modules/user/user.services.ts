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

//get-single 
const getSingleUsersFromDB = async (id: string) => {
    const result = await UserModel.findOne({ id })
    return result;
}
//delete-single 
const deleteSingleUsersFromDB = async (id: string) => {
    const result = await UserModel.deleteOne({ id })
    return result;
}

export const UserServices = {
    createUserIntoDB,
    getAllUsersFromDB,
    getSingleUsersFromDB,
    deleteSingleUsersFromDB,
}
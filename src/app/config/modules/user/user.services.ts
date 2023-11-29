import { UserT } from "./user.interface";
import { UserModel } from "./user.model";

//create
const createUserIntoDB = async (user: UserT) => {
   if(await UserModel.isUserExists(user.id)){
    throw new Error("this user already there man")
   }
    const result = await UserModel.create(user);
    return result;
}

//built in instance method
// const createUserIntoDB = async (userData: UserT) => {
//     const user = new UserModel(userData); //built in static method
//     const result = await user.save();
//     return result;
// }


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
//update 
const updateSingleUsersFromDB = async (id: string) => {
    const result = await UserModel.updateOne({ id })
    return result;
}

export const UserServices = {
    createUserIntoDB,
    getAllUsersFromDB,
    getSingleUsersFromDB,
    deleteSingleUsersFromDB,
    updateSingleUsersFromDB
}
import { UserT } from "./user.interface";
import { UserModel } from "./user.model";


const createUserIntoDB = async (user: UserT) => {

    const result = await UserModel.create(user)
    return result;
}

//return korle data jabe controller e

export const UserServices = {
    createUserIntoDB
}
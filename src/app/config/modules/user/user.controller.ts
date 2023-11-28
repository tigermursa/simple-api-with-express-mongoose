import { Request, Response } from "express";
import { UserServices } from "./user.services";

const createUser = async (req: Request, res: Response) => {
    try {
        const {data:user} = req.body
        const result = await UserServices.createUserIntoDB(user)
        res.status(200).json({
            success: true,
            message: "User is created successfully Allhamdulillah",
            data: result,
        })
    } catch (error) {
        console.log(error)
    }

}

export const UserControllers = {
    createUser
}
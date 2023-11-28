import { Request, Response } from "express";
import { UserServices } from "./user.services";

//create
const createUser = async (req: Request, res: Response) => {
    try {
        const { data: user } = req.body
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

//get-all 
const getAllUser = async (req: Request, res: Response) => {
    try {
        const result = await UserServices.getAllUsersFromDB()
        res.status(200).json({
            success: true,
            message: "All User is retrieved successfully Allhamdulillah",
            data: result,
        })
    } catch (error) {
        console.log(error)
    }
}
//get-single 
const getSingleUser = async (req: Request, res: Response) => {
    try {
        const {studentId} = req.params
        const result = await UserServices.getSingleUsersFromDB(studentId)
        res.status(200).json({
            success: true,
            message: "single User is retrieved successfully Allhamdulillah",
            data: result,
        })
    } catch (error) {
        console.log(error)
    }
}


export const UserControllers = {
    createUser,
    getAllUser,
    getSingleUser,
}
import { Request, Response } from "express";
import { UserServices } from "./user.services";
import { z } from "zod";
import userValidationSchema from "./user.validation";

//create
const createUser = async (req: Request, res: Response) => {
    try {
        const { data: user } = req.body
        //creating a schema validation using zod-->
        const zodParseData = userValidationSchema.parse(user)
        const result = await UserServices.createUserIntoDB(zodParseData)
        res.status(200).json({
            success: true,
            message: "User is created successfully Allhamdulillah",
            data: result,
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "sorry something went wrong",
            error: error,
        })
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
        const { studentId } = req.params
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

//delete-single 
const deleteSingleUser = async (req: Request, res: Response) => {
    try {
        const { studentId } = req.params
        const result = await UserServices.deleteSingleUsersFromDB(studentId)
        res.status(200).json({
            success: true,
            message: "single User is deleted successfully Allhamdulillah",
            data: result,
        })
    } catch (error) {
        console.log(error)
    }
}

//update  (not-working but working on it)
const updateSingleUser = async (req: Request, res: Response) => {
    try {
        const { studentId } = req.params
        const result = await UserServices.updateSingleUsersFromDB(studentId)
        res.status(200).json({
            success: true,
            message: "single User is Updated successfully Allhamdulillah",
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
    deleteSingleUser,
    updateSingleUser
}
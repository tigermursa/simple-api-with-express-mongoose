import express from "express";
import { UserControllers } from "./user.controller";
const router = express.Router()

//create
router.post('/create-user', UserControllers.createUser);
//get-all 
router.get('/allUsers', UserControllers.getAllUser)
//get-single 
router.get('/:studentId', UserControllers.getSingleUser)
//get-single 
router.delete('/:studentId', UserControllers.deleteSingleUser)
//update 
router.patch('/:studentId', UserControllers.updateSingleUser)

export const userRoutes = router;

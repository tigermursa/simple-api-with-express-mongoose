import express from "express";
import { UserControllers } from "./user.controller";
const router = express.Router()

//create
router.post('/create-user', UserControllers.createUser);
//get-all 
router.get('/allUsers', UserControllers.getAllUser)
//get-single 
router.get('/:studentId', UserControllers.getSingleUser)

export const userRoutes = router;

import express from "express";
import { UserControllers } from "./user.controller";

const router = express.Router()

//controller fn ke call dibbe
router.post('/create-user', UserControllers.createUser);


export const userRoutes = router;

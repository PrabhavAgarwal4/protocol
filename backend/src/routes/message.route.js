//This file contains all the routes related to messages 
import express from "express"
import { getUsersForSidebar,getMessages,sendMessage } from "../controllers/message.controller.js"
import {protectRoute} from "../middlewares/auth.middleware.js"
const router  = express.Router()

router.get('/users',protectRoute,getUsersForSidebar);
router.get("/:id",protectRoute,getMessages);

router.post("/send/:id",protectRoute,sendMessage);

export default router;


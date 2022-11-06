import {deleted, getAlldata, login, ResendOtp, singup, update} from "../controller/user.controller.js"
import  Express  from "express";
import { authentication } from "../middleware/authentication.js";

const UserRouter = Express.Router()
UserRouter.route("/user/singup").post(singup)
UserRouter.route("/user/login").post(login)
UserRouter.route("/user/getalldata").get(authentication,getAlldata)
UserRouter.route("/user/updated").put(update)
UserRouter.route("/user/deleted").delete(deleted)
UserRouter.route("/user/otp").post(ResendOtp)
//UserRouter.route("/user/authentication").post(authentication)


export default UserRouter;
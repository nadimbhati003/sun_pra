import {writeFile,readAlldata} from "../controller/test.controller.js";
import Express from "express";

 const router = Express.Router();

router.route("/createfile").post(writeFile)
router.route("/readfile").put(readAlldata)

export default router;
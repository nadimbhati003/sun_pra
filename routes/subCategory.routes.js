import { Createsubcate,deleted,getAlldata, update } from "../controller/subCategory.controller.js";
import  Express  from "express";


export const SubCate = Express.Router();

SubCate.route("/SubCate/create").post(Createsubcate)
SubCate.route("/SubCate/getalldata").get(getAlldata)
SubCate.route("/SubCate/update").put(update)
SubCate.route("/SubCate/deleted").delete(deleted)



export default SubCate;
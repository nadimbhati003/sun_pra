import { Categorycreate, deleted, getAlldata, update } from "../controller/category.controller.js";
import  Express  from "express";

export const cate = Express.Router()

cate.route("/cate/create").post(Categorycreate)
cate.route("/cate/getalldata").get(getAlldata)
cate.route("/cate/update").put(update)
cate.route("/cate/deleted/:id").delete(deleted)


export default cate;
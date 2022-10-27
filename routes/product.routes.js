import { Createproduct } from "../controller/product.controller.js";
import  Express  from "express";
import { imageUpload } from "../services/image.services.js";
const products = Express.Router();

products.route("/product/create").post(imageUpload.single('image'),Createproduct)








export default products
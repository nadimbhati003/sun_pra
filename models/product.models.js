import mongoose from "mongoose";
import imageupload from "../models/product.images.models.js"

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    SubCateId:{
        type:mongoose.Schema.Types.ObjectId, ref:"usersubcategories"
    },
    Is_popular:{
        type:Boolean,
        default:0
    },
    description:{
        type:String,
        required:true
    },
    images:[imageupload],
    status:{
        type:String,
        enum:["Active","Deactive"],
        default:"Active"
    },
    createAt:{
        type:Date,
        default:Date.now
    },
    updateAt:{
        type:Date,
        default:Date.now
    }
})

const product = mongoose.model("userproducts",productSchema);

export default product;
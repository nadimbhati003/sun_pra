import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    status:{
        type:String,
        enum:["Active","Deactive"],
        default:"Active"
    },
    createAt:{
        type:Date,default:Date.now
    },
    updatedAt:{
        type:Date,default:Date.now
    }
})

const Category = mongoose.model("usercategories",CategorySchema)
export default Category
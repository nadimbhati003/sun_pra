import mongoose from "mongoose";

const imageupload = new mongoose.Schema({
    path:{
        type:String,
        required:true
    },
    fullpath:{
        type:String,
        required:true
    },
    status:{
        type:String,
        enum:["Active","Deactive"],
        default:"Active"
    },
    productId:{
        type:mongoose.Schema.Types.ObjectId,ref:"userproducts"
    },
    createAt:{
        type:Date,
        default:Date.now
    },
    updatedAt:{
        type:Date,
        default:Date.now
    }
})

export default imageupload;
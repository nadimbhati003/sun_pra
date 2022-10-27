import mongoose from "mongoose";

const SubCategorySchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    status:{
        type:String,
        enum:["Active","Deactive"],
        default:"Active"
    },
    cateId:{
        type:mongoose.Schema.Types.ObjectId , ref:"usercategories"
        
    },
    createAt:{
        type:Date,
        default:Date.now

    },
    updateAt:{
        type:Date,
        default:Date.now
    },
})

const SubCategory = mongoose.model("usersubcategories",SubCategorySchema);

export default SubCategory;
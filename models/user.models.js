import mongoose from "mongoose";

export const userSchema = new mongoose.Schema({
    firstname:{
        type:String,
        required:true,
    },
    lastname:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    age:{
        type:Number,
        required:true,
    },
    status:{
        type:String,
        enum:["Active","Deactive"],
        default:"Active"
    },
    token:{
        type:String,
        required:false,
    }

})

const User = mongoose.model("singupUsers",userSchema);

export default User
  
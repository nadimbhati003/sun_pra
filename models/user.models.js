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
    },
    isnumber_verified:{
        type:Boolean,
        required:false,
        default:false
    },
    otp:{
        type:Number,
        required:true,
    }

})

const User = mongoose.model("users",userSchema);

export default User
  
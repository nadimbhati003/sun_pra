// import jwt from "jsonwebtoken";
// import bcrypt from "bcrypt";
// import fs from "fs";

// export const singup = async(req,res)=>{
//    // res.send("user controller is working succesfully")
//    var bodyData = req.body;
//    bodyData.janratetoken = await jwt.sign({time:Date(),userId:10},"try")
//   // res.send(bodyData)
//    bodyData.Vtoken = await jwt.verify(bodyData.janratetoken,"try")
//    //res.send(bodyData)

//     bodyData.password = await bcrypt.hash(bodyData.password,11)
//     res.send(bodyData)
//     var convertToString = JSON.stringify(bodyData);
//     fs.writeFile("data.json",convertToString,(err)=>{
//         if(err){
//             throw err;
//         }else{
//             res.send("ur data insert succesfully")
//         }
//     })

// }

import User from "../models/user.models.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export const singup = async (req,res)=>{
    try{
        var isemailexist = await User.findOne({email:req.body.email})
        if (isemailexist){
            res.send({
                status:false,
                msg:"email is already exist",
                data:{}
            })
        }else{
            const passwordHash = await bcrypt.hash(req.body.password,10);
            //res.send(passwordHash)
            req.body.password = passwordHash
            var user = await User.create(req.body)
            if(user){
                user.token = jwt.sign({time:Date(),userId:11},"try")
                res.send({
                    status:true,
                    msg:"singup succesfully",
                    data:user
                })
            }
        }
    }catch(err){
        res.send({
            status:false,
            msg:"something wrong with req.",
            data:err
        })
    }
}




export const login = async(req,res)=>{
    //res.send("login ")
    var getUserdata = await User.findOne({email:req.body.email})
  //  res.send(getUserdata)
     if (getUserdata){
        let checkpassword = await bcrypt.compare(req.body.password,getUserdata.password)
        if (checkpassword){
           getUserdata.token = await jwt.sign({time:Date(),userId:getUserdata._id},"try")
           res.send({
            status:true,
            msg:"login succesfully",
            data:getUserdata
           })
        }else{
            res.send({
                status:false,
                msg:"something wrong",
                data:{}
               })
        }
        
     }else{
        res.send({
            status:false,
            msg:"email not found",
            data:{}
        })
     }   
     
}


export const ResendOtp = async (req,res)=>{
    res.send("yes !")
    var otp = Math.floor(1000 + Math.random()*9000)
    console.log("otp---------",otp)
    req.body.otp = otp
    res.send(otp)
    var data = await User.findByIdAndUpdate({_id:req.body.id},req.body)
    if(data){
        res.send({
            status:true,
            msg:"otp send succesfully",
            data:data
        })
    }else{
        res.send({
            status:false,
            msg:"something wrong in code",
            data:{}
        })
    }
}


export const getAlldata = async (req,res)=>{
   // res.send("yes !")
   var where = {}
   if(req.query.email){
    where.email=req.query.email
   }
   const data = await User.find(where);
   if (data.length > 0){
    res.send({
        status:true,
        msg:"data fetch succesfully",
        data:data
    })
   }else{
    res.send({
        status:false,
        msg:"data not found",
        data:{}
    })
   }
  // res.send(data)
}



export const update = async (req,res)=>{
    //res.send("yes !")
     try{
    const data = await User.findByIdAndUpdate({_id:req.body.id},req.body)
    if(data){
        res.send({
            status:true,
            msg:"updated data succesfully",
            data:data
        })
    }else{
        res.send({
            status:false,
            msg:"something wrong",
            data:{}
        })
    }
    res.send(data)
}catch(err){
    res.send({
        status:false,
        msg:"something wrong with req.",
        data:err
    })
}
}




export const deleted = async (req,res)=>{
   // res.send("yes !")
   try{
   const data = await User.findByIdAndDelete({_id:req.body.id})
   //res.send(data)
   if (data){
    res.send({
        status:true,
        msg:"data delete succesfully",
        data:data
    })
   }else{
    res.send({
        status:false,
        msg:"something wrong",
        data:{}
    })
   }
}catch(err){
    res.send({
        status:false,
        msg:"something wrong",
        data:err
    })
}
}















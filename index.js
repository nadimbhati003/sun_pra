import express from "express";
import router from "./routes/test.routes.js";
import connectDB from "./config/db.js";
import UserRouter from "./routes/user.routes.js";
import cate from "./routes/category.ruotes.js";
import SubCate from "./routes/subCategory.routes.js";
import products from "./routes/product.routes.js";
import { config } from 'dotenv';

//import  fs  from "fs";

const app = express();
app.use(express.json());
app.use(router);
connectDB();
config();
app.use(UserRouter);
app.use(cate);
app.use(SubCate);
app.use(products);

// app.post("/createFile",(req,res)=>{
//     var data = []
//     data.push(req.body)
//     var convertToString = JSON.stringify(data)
//     fs.writeFile("data.json",convertToString,(err)=>{
//         if(err){
//             res.send({
//                 status:false,
//                 msg:"something wrong in code"
//             })
//         }else{
//             res.send({
//                 status:true,
//                 msg:"file create succesfully",
            
//             })
//         }
//     })
    
// })

// app.put("/updateFile",(req,res)=>{
//     fs.readFile("data.json",(err,data)=>{
//         if(err){
//             res.send({
//                 status:false,
//                 msg:"somethnig wrong with req.",
//                 data:err
//             })
//         }else{
//             var newData = req.body;
//             var oldData = JSON.parse(data);

//             oldData.push(newData);
//             var convertToString = JSON.stringify(oldData);
//             fs.writeFile("data.json",convertToString,(err)=>{
//                 if (err){
//                     res.send({
//                         status:false,
//                         msg:"something wrong with req.",
//                         data:err
//                     })
//                 }else{
//                     res.send({
//                         status:true,
//                         msg:"file update succesfully"
//                     })
//                 }
//             })
//         }
//     })
// })

app.listen(process.env.PORT||9003,(req,res)=>{
    console.log("ur server is working")
})
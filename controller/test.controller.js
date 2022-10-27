import fs from "fs";

export const writeFile = (req,res)=>{
    console.log("ur controller is working")
    var data = []
    data.push(req.body)
    var convertToString = JSON.stringify(data)
    fs.writeFile("bhati.json",convertToString,(err)=>{
        if (err){
            throw err;
        }else{
            res.send("file create succesfully")
        }
    })
}

export const readAlldata = (req,res)=>{
    fs.readFile("bhati.json",(err,data)=>{
        if(err){
            var response = {
                "status":false,
                "msg":"someting wrong",
                "data":err
            }
        }else{
            var response = {
                "status":true,
                "msg":"read file succesfully",
                "data":JSON.parse(data)

            }
        }
          
                res.send(response)
    })
}
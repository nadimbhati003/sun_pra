import jwt from "jsonwebtoken"

export const authentication = async(req,res,next)=>{
   // res.send("yes !")
   try{
    if (!req.headers["authorization"]){
        res.send({
            status:false,
            msg:"token ki requiredment hai",
            data:{}
        })
    }
    var token = req.headers["authorization"].replace("Bearer ",'')
    //res.send(token)
    var Tverify = jwt.verify(token,"try")
   // res.send(Tverify)
    if(Tverify){
        next();
    }else{
        res.send({
            status:false,
            msg:"token not valid",
            data:{}
        })
    }
   }catch(err){
    res.send({
        status:false,
        msg:"something wrong with req.",
        data:{}
    })
   }
}
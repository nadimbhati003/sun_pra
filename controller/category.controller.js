import Category from "../models/category.models.js";

export const Categorycreate = async (req,res)=>{
    try{
        var isexist = await Category.findOne({name:req.body.name})
        if(isexist){
            res.send({
                status:false,
                msg:"is cate already exist",
                data:[]
            })
            
        }else{
        

            var create = await Category.create(req.body)
            if (create){
                res.send({
                    status:true,
                    msg:"category create succesfully",
                    data:create
                })
            }else{
                res.send({
                    status:false,
                    msg:"category is not created",
                    data:{}
                })
            }
          
        }
   
}catch(err){
    res.send({
        status:false,
        msg:"something wrong wth req",
        data:err
    })
}
}


export const getAlldata = async (req,res)=>{
    //res.send("yes !")
    var getalldata = await Category.find({status:"Active"});
    if(getalldata.length > 0){
        res.send({
            status:true,
            msg:"data get succesfully.",
            data:getalldata
        })
    }else{
        res.send({
            status:false,
            msg:"data not found",
            data:[]
        })
    }
    //res.send(getalldata)
}

export const update = async (req,res)=>{
    //res.send("yes !")
    var updated = await Category.findOneAndUpdate({name:req.body.name},req.body);
    if (updated){
        res.send({
            status:true,
            msg:"updated succesfully",
            data:updated
        })
    }else{
        res.send({
            status:false,
            msg:"data not updated",
            data:{}
        })
    }
    //res.send(updated)
}

export const deleted = async (req,res)=>{
   // res.send("yes !")
   var deleted = await Category.findByIdAndDelete({_id:req.params.id})
   if(deleted){
    res.send({
        status:true,
        msg:"deleted succesfully",
        data:deleted
    })
   }else{
    res.send({
        status:false,
        msg:"data not delete",
        data:{}
    })
   }
}
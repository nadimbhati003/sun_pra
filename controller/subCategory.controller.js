import SubCategory from "../models/subCateory.models.js";

export const Createsubcate = async (req,res)=>{
    // res.send("yes !")
    try{
        var isexist = await SubCategory.findOne({name:req.body.name})
        if(isexist){
            res.send({
                status:false,
                msg:"is already exist",
                data:[]
            })
        }else{
    var created = await SubCategory.create(req.body)
    if (created){
        res.send({
            status:true,
            msg:"created succesfully",
            data:created
        })
    }else{
        res.send({
            status:false,
            msg:"something wrong",
            data:{}
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



export const getAlldata = async (req,res)=>{
    var data = await SubCategory.find({status:"Active"}).populate("cateId")
    if (data.length > 0){
        res.send({
            status:true,
            msg:"data get succesfully",
            data:data
        })
    }else{
        res.send({
            status:false,
            msg:"data not found",
            data:{}
        })
    }
    //res.send(data)
}



export const update = async (req,res)=>{
    var data = await SubCategory.findByIdAndUpdate({_id:req.query.id},req.body)
    if(data){
        res.send({
            status:true,
            msg:"data update succesfully",
            data:data
        })
    }else{
        res.send({
            status:false,
            msg:"something wrong",
            data:{}
        })
    }
}




export const deleted = async (req,res)=>{
    var data = await SubCategory.findByIdAndDelete({_id:req.body.id})
    if (data){
        res.send({
            status:true,
            msg:"deleted data succesfully",
            data:data
        })
    }else{
        res.send({
            status:false,
            msg:"something wrong",
            data:{}
        })
    }
}
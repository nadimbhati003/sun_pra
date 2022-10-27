import product from "../models/product.models.js";


export const Createproduct = async (req,res)=>{
   // res.send("yes !")
    //  try{
         var imageAlldata = []
        // console.log("file---",req.file)
        // return;
        // req.files.forEach(async(image,key) => {
            var imageType = ''
            if(req.file.mimetype == 'image/png'){
                imageType = 'png'
            }else if (req.file.mimetype == 'image/png'|| req.file.mimetype == 'image/jpeg'){
                imageType = 'jpg';
            }
            let imagedata = {
                path:req.file.filename,
                fullpath:"localhost:9000/"+req.file.path,
                type:imageType,
                // productId:productCreate._id
            }
           
        // });
        req.body.images = imagedata

    var productCreate = await product.create(req.body)
    res.send(productCreate)

   
// }catch(err){
//     res.send({
//         status:false,
//         msg:"something wrong with req.",
//         data:err
//     })
// }
}



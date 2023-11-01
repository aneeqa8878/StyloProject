const Contact=require("../models/contact.models")

exports.store=async(req,res)=>{
    try{
     const payload=req.body;
     {/*const email=await contact.findOne({email:payload.email})
     if(email){
         return res.json({message:"Email Already Exist"})
     }
    */}
     const contact=await Contact.create(payload)
     res.json({message:"Contact Created Successfully",status:200,contact})
    }
    catch(err){
  console.log(err)
    }
 }

 exports.index=async(req,res)=>{
    try{
const contacts=await Contact.find().sort({createdAt:-1});
res.json({status:200,message:"Contact Fetched Successfully",contacts})
    }
    catch(err){
console.log(err)
    }
    
}


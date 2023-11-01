const Product=require("../models/product.model");

exports.store=async(req,res)=>{
    try{
     const payload=req.body;
     const product=await Product.create(payload)
     res.json({message:"Product Created Successfully",status:200,product})
    }
    catch(err){
  console.log(err)
    }
 }
 exports.index=async(req,res)=>{
    try{
const products=await Product.find().sort({createdAt:-1});
res.json({status:200,message:"Products Fetched Successfully",products})
    }
    catch(err){
console.log(err)
    }
    
}
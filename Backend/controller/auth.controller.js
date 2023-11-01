const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User=require("../models/auth.model")


exports.store=async(req,res)=>{
    try{
     const payload=req.body;
     const email=await User.findOne({email:payload.email})
     if(email){
      return res.json({message:"Email already Exist",status:409})
     }
     const user=await User.create(payload)
     res.json({message:"User Created Successfully",status:200,user})
    }
    catch(err){
  console.log(err)
    }
 }
 exports.login = async (req, res) => {
  try {
    const {email,password}=req.body;
    const user =await User.findOne({email})
    if(!user){
      return res.json({message:"user not found",status:404,success:false})
    }
    else{
      bcrypt.compare(password,user.password,(err,result)=>{
        if(err){
          console.error(err)
          return;
        }
        if(result){
          const token=jwt.sign({value:req.body})
          return res.json({message:'password matches!',status:200,success:true,token})
        }
        else{
          return res.json({message:'password does not matches',status:403,success:false})
        }
      })
    }
  }
  catch(err){
    console.log(err)
  }
}
 
 
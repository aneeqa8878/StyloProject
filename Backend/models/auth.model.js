const mongoose=require("mongoose")


const signupSchema=mongoose.Schema({
    fname:{type:String,default:""},
    lname:{type:String,default:""},
    email:{type:String,default:""},
    phone:{type:String,default:""},
    password:{type:String,default:""},
},
{timestamps:true})

module.exports=mongoose.model("Signup",signupSchema)
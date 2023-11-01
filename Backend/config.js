const mongoose=require("mongoose")

const connect=async()=>{
   try{
      const response=await mongoose.connect("mongodb+srv://mmano0453:Abc12345@firstcluster.igbs5px.mongodb.net/")
    console.log("Mongodb connected successfully")
   }
   catch(err){
    console.log(err);

   }
}

module.exports=connect
const mongoose=require("mongoose")
const productSchema=mongoose.Schema({
  
    productName:{type:String,default:""},
    articleName:{type:String,default:""},
    discountedPercen:{type:String,default:""},
    originalPrice:{type:String,default:""},
    discountedPrice:{type:String,default:""},
},

{timestamps:true},
)


module.exports=mongoose.model("Product",productSchema)
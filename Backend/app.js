const express = require("express");
const port = 8000;

require("dotenv").config();
const app = express();
const connect = require("./config");

const userRoute = require("./routes/user.route");
const contactRoute = require("./routes/contact.route");
const productRoute = require("./routes/product.route");
const authRoute = require("./routes/auth.route");

var bodyParser = require("body-parser");
var cors = require("cors");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

 
// parse application/json
app.use(bodyParser.json());

connect();

app.use("/users", userRoute);
app.use("/contact", contactRoute);
app.use("/auth", authRoute);
app.use("/product", productRoute);


//app.get("/",(req,res)=>{
// res.json({message:"hello from server", status:200,success:true})
//})
app.listen(port, () => {
  console.log(`server is ready on ${port}`);
});

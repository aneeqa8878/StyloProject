const express=require('express');
const router= express.Router();
const controller=require("../controller/user.controller")



router.post("/",controller.store)

// router.post("/",controller.save)
// router.post("/",controller.savesignup)
// router.get("/",controller.index)
// router.get("/:id",controller.get)
// router.delete("/:id",controller.delete)
// router.put("/:id",controller.update)




module.exports=router
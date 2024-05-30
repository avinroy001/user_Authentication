const creatUser = require("../controller/user.controller");
const validateUser = require("../middleware/user.validate");

const router=require("express").Router();

router.post("/register",validateUser,creatUser)
module.exports=router
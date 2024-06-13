const {creatUser, findUser, authPath} = require("../controller/user.controller");
const validateUser = require("../middleware/user.validate");


const router=require("express").Router();

router.post("/register",validateUser,creatUser);
router.post("/login",findUser)
router.post("/dashboard",authPath)
module.exports=router
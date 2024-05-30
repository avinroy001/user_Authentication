const {creatUser, findUser} = require("../controller/user.controller");
const validateUser = require("../middleware/user.validate");

const router=require("express").Router();

router.post("/register",validateUser,creatUser);
router.post("/login",findUser)
module.exports=router
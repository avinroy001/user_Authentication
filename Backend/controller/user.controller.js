const user = require("../model/user.model")

const creatUser=async(req,res)=>{
    let d=await user.create(req.body)
    console.log(req.body)
    res.send(d)

}
module.exports=creatUser
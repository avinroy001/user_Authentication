const user = require("../model/user.model")

const creatUser=async(req,res)=>{
    let d=await user.create(req.body)
    console.log(req.body)
    res.send(d)

}

const findUser=async(req,res)=>{
    const{username,password}=req.body
    let d=await user.findOne({username:username,password:password})
    console.log(req.body)
    if(d){
        res.send(d)
    }else{
        return res.status(401).send("unauthorised")
    }
   

}
module.exports={creatUser,findUser}
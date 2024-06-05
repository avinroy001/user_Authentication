const user = require("../model/user.model")
const bcrypt=require("bcryptjs");




const creatUser=async(req,res)=>{
    const{username,password}=req.body;
    // const saltR=10;
    // const hashP=await bcrypt.hash(password,saltR)
    let d=await user.create({username:username,password:password})
    console.log(req.body)
    res.send(d)

}

const findUser=async(req,res)=>{
    const{username,password}=req.body
    let d=await user.findOne({username:username})
    if(d){
        bcrypt.compare(d.password,password,(err,response)=>{
            console.log(d.password)
            if(err){
                res.status(401).json("unauthorised")
            }else{
                res.status(200).json("success");
            }
        });
    }

   
   
   

}
module.exports={creatUser,findUser}
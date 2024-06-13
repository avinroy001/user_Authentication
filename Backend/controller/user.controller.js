const user = require("../model/user.model")
const bcrypt=require("bcryptjs");
const jwt=require("jsonwebtoken")

const secret="prajwal";

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
        bcrypt.compare(d.password,password,async(err,response)=>{
            console.log(d.password)
            if(err){
                res.status(401).json("unauthorised")
            }else{
                const payload={username:username,password:password}
                const token=jwt.sign(payload,secret)
                await user.findOneAndUpdate(
                    { username: username },
                    { token: token },
                    { new: true }
                );
            
                res.status(200).json(token);
            }
        });
    }
}

const authPath=async(req,res)=>{
    const token=req.headers["authorization"];
    console.log(token)
    jwt.verify(token,secret,(err,authData)=>{
        if(err){
            res.json({error:"invalid token"})
        }else{
            res.json({message:"authorised"})
        }
    })
}

module.exports={creatUser,findUser,authPath}
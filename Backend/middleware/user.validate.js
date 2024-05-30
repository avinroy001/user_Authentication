const Joi=require("joi");
const joiSchema=Joi.object().keys({
    username:Joi.string().email().lowercase().required(),
    password:Joi.string().min(3).max(6),
    cnfpassword:Joi.any().valid(Joi.ref('password')).required()
})

const validateUser=async(req,res,next)=>{
    const data=req.body;
    console.log(data);
    try{
        const result=await joiSchema.validateAsync(data);
        console.log(result);
        next();
    }catch(err){
        console.log(err);
       return res.status(400).json(err);
    }
}

module.exports=validateUser;
const mongoose=require("mongoose");
const bcrypt=require("bcryptjs");
const userSchema=new mongoose.Schema({
    username:String,
    password:String,
    token:String
},
{
    timestamps:true
}
)
userSchema.pre("save", async function(next){
    console.log("pre",this)
    if(!this.isModified("password")){
        next();

    }else{
        const salt=10;
        const hash=await bcrypt.hash(this.password,salt);
        this.password=hash;
    }
})
const user=mongoose.model("user",userSchema);
module.exports=user;
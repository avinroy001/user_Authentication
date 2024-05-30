const express=require("express");
const mongoose  = require("mongoose");
const userRoute=require("./routes/user.routes")
const server=express();
const cors=require("cors")
server.use(cors())
server.use(express.json())

server.use("/auth",userRoute);

mongoose.connect("mongodb://localhost:27017/UserAuth").then(()=>{
    console.log("db connected");
    server.listen(3001,()=>{
        console.log("listening");
    })
}  ).catch((e)=>{
    console.log(e);
})



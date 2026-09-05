import express from "express"
import bcrypt from "bcrypt";
import user2 from "../user2.js"

const authRouter=express.Router();



authRouter.post("/register",async(req,res)=>{
    try{
        //api level validation
       ValidateUser(req.body);

        req.body.passward=await bcrypt.hash(req.body.passward,10);
      
     await user2.create(req.body);
     res.send("user registered successfully")
  
   }
    
    catch(err){
        res.send(err.message);
    }
})


//Login

authRouter.post("/login",async(req,res)=>{
    try{
     const people=await user2.findById(req.body._id);
     if(!(req.body.emailId===people.emailId)){
        throw new Error("invalid credentials");
     }
     const IsAllowed=await bcrypt.compare(req.body.passward,people.passward);
     if(!IsAllowed){
        throw new Error("invalid credentials");

     }
     else{


        // jwt  tokken

        const token =people.getJWT();   //people become object of class user2
         res.cookie("token",token);
        res.send("Login successfully")

          
     }

    }
    catch(err){
        res.send(err.message);
    }
})


export default authRouter;
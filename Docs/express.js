import express from "express"
import main from "./database2.js"
import user2 from "./user2.js"
import ValidateUser from "./validateUser.js";
import bcrypt from "bcrypt";
import cookieParser from "cookie-parser"
import jwt from "jsonwebtoken"
import userAuth from "./userAuth.js";


const app=express();

app.use(cookieParser());
app.use(express.json());

app.post("/register",async(req,res)=>{
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

app.post("/login",async(req,res)=>{
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

        const token =jwt.sign({id:people._id,emailId:people.emailId},"Rohit@134125",{expiresIn:100});
         res.cookie("token",token);
        res.send("Login successfully")

          
     }

    }
    catch(err){
        res.send(err.message);
    }
})










app.get("/info",async(req,res)=>{
    try{
        const result=await user2.find();
      
        //validate the user first

        const payload=jwt.verify(req.cookies.token,"Rohit@134125");
        console.log(payload);
        res.send(result);
    }
    catch(err){
        res.send(err.message);
    }
})

app.get("/user",userAuth,async(req,res)=>{
    try{
        // const result=await user2.findById(req.params.id);

        // varify user first for every crud operation then do any action  so we can make middleware for this 

    //     const {token}=req.cookies;
    //     if(!token){
    //         throw new Error("invalid token");
    //     }
    //     const payload=jwt.verify(token,"Rohit@134125");
    //     const {id}=payload;
    //     if(!id){
    //         throw new Error("Id is missing");
    //     }
    //    const result=await user2.findById(id);

    //     res.send(result);

      res.send(req.result);


    }
    catch(err){
         res.send(err.message);
    }
})


app.delete("/user/:id",async (req,res)=>{
    try{
        await user2.findByIdAndDelete(req.params.id);
        res.send("Deleted succesfully");
    }
    catch(err){
        res.send(err)
    }
})


app.patch("/user",async(req,res,)=>{
    try{
        const {_id, ...toupdate}=req.body;
        await user2.findByIdAndUpdate(_id,toupdate,{runValidators:true});
        res.send("update successfull");
    }
    catch(err){
       
        res.send(err.message);
    }
})







main()
.then(async ()=>{
    console.log("connected to db")
    app.listen(3000,()=>{
        console.log("listening to port 3000")
    })
})
.catch((err)=>console.log(err));
import express from "express"
import main from "./database2.js"
import user2 from "./user2.js"
const app=express();

app.use(express.json());

app.post("/register",async(req,res)=>{
    try{
        //api level validation
   const mendatoryField=   ["firstName","emailId"]  
   const IsAllowed=mendatoryField.every((k)=>Object.keys(req.body).includes(k));

   if(!IsAllowed){
    throw new Error("Fields missing");
   }
        await user2.create(req.body);
        res.send("user registered successfully")
    }
    catch(err){
        res.send(err.message);
    }
})



app.get("/info",async(req,res)=>{
    try{
        const result=await user2.find();
        res.send(result);
    }
    catch(err){
        res.send(err);
    }
})

app.get("/user/:id",async(req,res)=>{
    try{
        const result=await user2.findById(req.params.id);
        res.send(result);
    }
    catch(err){
         res.send(err);
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
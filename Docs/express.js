import express from "express"
import main from "./database2.js"
import user2 from "./user2.js"
const app=express();

app.use(express.json());

app.post("/register",async(req,res)=>{
    try{
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





main()
.then(async ()=>{
    console.log("connected to db")
    app.listen(3000,()=>{
        console.log("listening to port 3000")
    })
})
.catch((err)=>console.log(err));
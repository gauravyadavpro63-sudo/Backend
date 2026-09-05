import express from "express"
import user2 from "../user2.js"
const userRouter = express.Router();
import userAuth from "../userAuth.js";


userRouter.get("/",userAuth,async(req,res)=>{
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


userRouter.delete("/:id",async (req,res)=>{
    try{
        await user2.findByIdAndDelete(req.params.id);
        res.send("Deleted succesfully");
    }
    catch(err){
        res.send(err)
    }
})


userRouter.patch("/",async(req,res,)=>{
    try{
        const {_id, ...toupdate}=req.body;
        await user2.findByIdAndUpdate(_id,toupdate,{runValidators:true});
        res.send("update successfull");
    }
    catch(err){
       
        res.send(err.message);
    }
})


export default userRouter;

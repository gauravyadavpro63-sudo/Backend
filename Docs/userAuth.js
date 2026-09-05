import jwt from "jsonwebtoken"
import user2 from "./user2.js"


//middleware for authenthication


const userAuth=async (req,res,next)=>{

       try{
        const {token}=req.cookies;
        if(!token){
            throw new Error("invalid token");
        }
        const payload=jwt.verify(token,"Rohit@134125");
        const {id}=payload;
        if(!id){
            throw new Error("Id is missing");
        }
               const result=await user2.findById(id);
        if(!result){
            throw new Error("user doestn exist");
        }
        req.result=result;
        next();
    }
    catch(err){
        throw new Error(err.message)
    }
}

export default userAuth
import mongoose from "mongoose";
import jwt from "jsonwebtoken"
import { Schema } from "mongoose";

const userSchema=new Schema({
    firstName:{
        type:String,
        required:true,
        minLength:3,
        maxLength:23,
        immutable:true  //user cant change name
    },
    lastName:{
        default:"this is default lastname",
        type:String
    },
    age:{
        type:Number,
        min:17,
        max:70
    },
    gender:{
        type:String,
        // enum:["male","female","others"],
        //or
        validate(value){
               if(!["male","female","others"].includes(value)){
                throw new Error("invalid gender");
               }
        }
        //but this things wont work for updating documents so we need to tell them
    },
    emailId:{
        type:String,
        unique:true,
        trim:true,  //prvent space at end and starting
        lowercase:true,
        required:true
    },
    passward:{
        type:String,
        required:true
     
    }
},{timestamps:true})


// methods in  mongoose


userSchema.methods.getJWT=function(){
   const ans= jwt.sign({id:this._id,emailId:this.emailId},"Rohit@134125",{expiresIn:100});
   return ans;
}







const user2=mongoose.model("user2",userSchema);
export default user2;
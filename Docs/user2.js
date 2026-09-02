import mongoose from "mongoose";
import { Schema } from "mongoose";

const userSchema=new Schema({
    firstName:{
        type:String
    },
    lastName:{
        type:String
    },
    age:{
        type:Number
    },
    gender:{
        type:String
    },
    emailId:{
        type:String
    }
})

const user2=mongoose.model("user2",userSchema);
export default user2;
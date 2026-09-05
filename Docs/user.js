import mongoose from "mongoose";
import { Schema } from "mongoose";


const userSchema =new Schema({
    name:String,
    age:Number,
    city:String,
    gender:String
})


const User=mongoose.model("user",userSchema);

export default User;
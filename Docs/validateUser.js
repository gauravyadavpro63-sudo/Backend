
import validator from "validator";

function ValidateUser(data){
const mendatoryField=   ["firstName","emailId","passward"]  
   const IsAllowed=mendatoryField.every((k)=>Object.keys(data).includes(k));
    if(!IsAllowed){
    throw new Error("Fields missing");
    }


    if(!validator.isEmail(data.emailId)){
        throw new Error("invalid Email")
    }
    

    if(!(validator.isStrongPassword(data.passward))){
        throw new Error("weak passward")
    }

    if(!(data.firstName.length>=3&&data.firstName.length<=20)){
        throw new Error("invalid name")
    }


    

}

export default ValidateUser;

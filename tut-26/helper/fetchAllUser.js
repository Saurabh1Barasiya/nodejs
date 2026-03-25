import { userModel } from "../models/users.model.js";
 
export const fetchAllUsers = async (req,res,next)=>{
    try{
        const allUsers = await userModel.find({});
        req.allUsers = allUsers;
        next();
    }catch(err){
        res.status(401).json({
            sucess:false,
            message:err.message
        })
    }
}
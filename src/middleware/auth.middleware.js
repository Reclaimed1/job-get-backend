import jwt from 'jsonwebtoken';
import User from '../model/user.model.js';
import { configDotenv } from 'dotenv';
configDotenv();
export const protection = async (req,res,next)=>{
    let token;
    if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")){
        try{
            token=req.headers.authorization.split(" ")[1];
            const decode = jwt.verify(token, process.env.JWT_SECRET);
            req.user=await User.findById(decode.id).select("-password");
            return next();
        }catch(error){
            console.log(error);
           return res.status(401).json({message:"Not Authorized token failed"});
        }
    }
    if(!token){
        return res.status(401).json({message:"Not Authorized,No Token Added"});
    }
}

export const user=(req,res,next)=>{
    if(req.user){
        next()
    }else{
        res.status(401).json({message:"You are not a User please register"});
    }
}
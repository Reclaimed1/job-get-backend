import User from '../model/user.model.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { configDotenv } from 'dotenv';
configDotenv();

export const register=async(userdata)=>{
    const userExist=await User.findOne({email:userdata.email});
    if(userExist){
        throw new Error("User already exist");
    }else{
        try {
            const salt=await bcrypt.genSalt(10);
            const hashedPassword=await bcrypt.hash(userdata.password,salt);
            const newUser=await User.create({
                name:userdata.name,
                email:userdata.email,
                role:userdata.role,
                password:hashedPassword,
                location:userdata.location,
                phone:userdata.phone,
                skills:userdata.skills,
                bio:userdata.bio,
                
        })   
        await newUser.save();
        return newUser;     
        } catch (error) {
             console.log(error);
            throw new Error("Error creating user");
           
        }
    }
};
export const login=async(email,password)=>{
    const user=await User.findOne({email});
    const isMatch=await bcrypt.compare(password,user.password);
    if(!user){
        throw new Error("Invalid email");
    }if(!isMatch){
        throw new Error("Invalid password");
    }
    else{
        try {
         const token = jwt.sign({id:user._id,role:user.role},process.env.JWT_SECRET,{
            expiresIn:"1h",
        });
        return {token,user};
        } catch (error) {
            console.log(error);
            throw new Error("Error logging in user");
        }
    }
}
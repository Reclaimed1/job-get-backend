import * as userServices from '../services/user.service.js';

export const getUserById=async(req,res)=>{
    const id=req.user;
    try {
        const res=await userServices.getUserById(id);
        res.status(200).json(res);
    } catch (error) {
        return res.status(404).json({error:"user Not Found"})
    }


}
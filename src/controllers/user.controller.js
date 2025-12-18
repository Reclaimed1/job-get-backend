import * as userServices from '../services/user.service.js';

export const getUserById=async(req,res)=>{
    try {
        const id=req.params.id;
        const user=await userServices.getUserById(id);
        if(!user){
        return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json(user);
    } catch (error) {
      console.error("Error getting user:", error);
    res.status(500).json({ message: "Internal server error" });
    }
}
export const getAllWorker=async(req,res)=>{
    try {
        const user=await userServices.getAllWorker();
        if(!user){
            return res.status(400).json({message:"No user Found"})
        }
        res.status(200).json(user);
    } catch (error) {
    console.error("Error getting user:", error);
    res.status(500).json({ message: "Internal server error" });
    }
}

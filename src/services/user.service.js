import User from "../model/user.model.js";

export const getUserById=async(id)=>{
    try {
        const resp=await User.findById(id).select("-password");
        return resp;
    } catch (error) {
    throw error;
    }
}
export const getAllWorker=async()=>{
    try {
        const resp=await User.find({role:'worker'}).select("-password");
        return resp;
    } catch (error) {
        throw error;
    }
}
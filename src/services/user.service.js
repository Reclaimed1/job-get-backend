import User from "../model/user.model";

export const getUserById=async(id)=>{
    try {
        const resp=await User.findById(id);
        return resp;
    } catch (error) {
        console.log(error);
        return error;
    }


}
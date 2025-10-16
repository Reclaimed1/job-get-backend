import { register,login } from '../services/auth.service.js';

export const registerUser=async(req,res)=>{
      try {
    const user = await register(req.body);
    return res.status(201).json({ message: "User created successfully", user });
  } catch (err) {
    if (err.message === "User already exist"|| err.message === "Error creating user") {
      return res.status(400).json({ error: err.message });
    }
    console.error("Unexpected error:", err);
    return res.status(500).json({ error: "Internal server error" });
}
}

export const loginUser=async(req,res)=>{
    try {
    const {email,password}=req.body;
    const user=await login(email,password);
    res.status(200).json(user);
    } catch (error) {
        if(error.message==="Invalid email" || error.message==="Invalid password" || error.message==="Error logging in user"){
            return res.status(400).json({error:error.message});
        }
        console.error("Unexpected error:", error);
        return res.status(500).json({ error: "Internal server error" });
        }
    }
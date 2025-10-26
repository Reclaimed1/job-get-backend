import { uploadToCloudinary,deleteFromCloudinary } from "../services/cloud.service.js";
import User from "../model/user.model.js";
export const uploadImage = async (req, res) => {
  try {
     const { id } = req.params;
    if (!req.file) return res.status(400).json({ error: "No file uploaded" });
    const result = await uploadToCloudinary(req.file.buffer, "uploads"); 
    const updateUser=await User.findByIdAndUpdate(id,{profileImage:result.secure_url},{new:true});
    res.json({
      message: "Upload successful",
      url: result.secure_url,
      public_id: result.public_id,
    });
     if (!updateUser) {
      return res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    console.error("Upload error:", error);
    res.status(500).json({ error: "Upload failed" });
  }
};

export const deleteImage = async (req, res) => {
  try {
    const { publicId } = req.params;
    const result = await deleteFromCloudinary(publicId);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
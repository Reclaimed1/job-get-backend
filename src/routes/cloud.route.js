import Router from "express";
import { uploadImage, deleteImage } from "../controllers/cloud.controller.js";
import {upload} from '../middleware/multer.middleware.js'

const router = Router();

router.post("/upload/:id", upload.single("file"), uploadImage);
router.delete("/delete/:publicId", deleteImage);

export default router;

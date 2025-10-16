import { Router } from "express";
import { createJob,getAllJobs,updateJob } from "../controllers/jobs.controller.js";

const router=Router();

router.post("/create",createJob);
router.get("/", getAllJobs);
router.put("/",updateJob);

export default router
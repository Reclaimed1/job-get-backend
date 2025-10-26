import { Router } from "express";
import { createJob,getAllJobs,updateJob,deleteJob } from "../controllers/jobs.controller.js";
import { user,protection } from "../middleware/auth.middleware.js";
const router=Router();

router.post("/create",protection,user,createJob);
router.get("/",protection,user, getAllJobs);
router.put("/",protection,user,updateJob);
router.delete("/",protection,user,deleteJob);
export default router
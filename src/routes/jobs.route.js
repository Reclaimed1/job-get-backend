import { Router } from "express";
import { createJob,getAllJobs,updateJob,deleteJob,getUserJob,applyForJob } from "../controllers/jobs.controller.js";
import { user,protection } from "../middleware/auth.middleware.js";
import { applyJob,getUserApp,deleteAppl } from "../controllers/application.controller.js";
const router=Router();

router.post("/create",protection,user,createJob);
router.get("/",protection,user, getAllJobs);
router.get('/:id',protection,getUserJob);
router.get('/userApply/:id',protection,getUserApp);
router.put("/",protection,user,updateJob);
router.delete("/:id",protection,deleteJob);
router.post("/apply/:id",protection,applyJob);
router.delete('/application/:id',deleteAppl);
export default router
import { Router } from "express";
import { applyJob,deleteAppl } from "../controllers/application.controller";
import { protection,user } from "../middleware/auth.middleware";
const router=Router();

router.post('/',protection,user,applyJob);

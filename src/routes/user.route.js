import Router from "express";
import { getUserById,getAllWorker } from "../controllers/user.controller.js";
import { protection } from "../middleware/auth.middleware.js";
const router=Router();

router.get('/:id',protection,getUserById);
router.get('/',getAllWorker);

export default router;
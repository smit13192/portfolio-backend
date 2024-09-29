import { Router } from "express";
import { userProfileController } from "../controller/UserProfileController";
import { Middleware } from "../../../core/middleware/Middleware";
import { userProfile } from "../validation/UserProfileValidator";

const router = Router();

router.post('/', 
    Middleware.bodyValidation(userProfile),
    userProfileController.post
);
router.get('/', userProfileController.get);

export default router;
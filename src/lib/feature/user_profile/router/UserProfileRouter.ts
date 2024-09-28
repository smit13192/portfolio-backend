import { Router } from "express";
import { cvUploader } from "../../../core/middleware/Multer";
import { userProfileController } from "../controller/UserProfileController";
import { Middleware } from "../../../core/middleware/Middleware";
import { userProfile } from "../validation/UserProfileValidator";

const router = Router();

router.post('/', 
    cvUploader.single("cv"),
    Middleware.bodyValidation(userProfile),
    userProfileController.post
);
router.get('/', userProfileController.get);

export default router;
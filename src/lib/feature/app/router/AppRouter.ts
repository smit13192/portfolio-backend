import { Router } from "express";
import { appController } from "../controller/AppController";

const router = Router();

router.get('/', appController.get);

export default router;
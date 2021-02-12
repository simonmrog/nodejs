import { Router } from "express";

import indexController from "../controllers";

const router: Router = Router();

router.get("/", indexController.root);

export default router;

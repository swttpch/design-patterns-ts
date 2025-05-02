import { Router } from "express";
import TaxController from "./TaxController";

const controller = new TaxController();
const router = Router();

router.post("/calculate", controller.calculateTax);

export default router;

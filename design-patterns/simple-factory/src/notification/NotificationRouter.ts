import express from "express";
import NotificationController from "./NotificationController";

const router = express.Router();
const Notification = new NotificationController();
router.post("/send", Notification.sendNotification);

export default router;

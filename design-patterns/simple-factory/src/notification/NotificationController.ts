import { RequestHandler } from "express";
import NotificationFactory from "./NotificationFactory";

class NotificationController {
  sendNotification: RequestHandler = (req, res) => {
    const { notificationType, recipient, message } = req.query;

    if (!notificationType || !recipient || !message) {
      res.status(400).json({ error: "Missing required parameters" });
      return;
    }
    try {
      const notification = NotificationFactory.create(
        notificationType as string,
      );
      notification.send(message as string, recipient as string);
      res.status(200).json({
        message: `Notification sent to ${recipient} via ${notificationType}`,
      });
      return;
    } catch (error) {
      res.status(400).json({ error: (error as Error).message });
      return;
    }
  };
}

export default NotificationController;

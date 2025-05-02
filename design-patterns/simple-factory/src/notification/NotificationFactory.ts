import { NotificationTypeInterface } from "../types/notification";
import EmailNotification from "./EmailNotification";
import SlackNotification from "./SlackNotification";
import SmsNotification from "./SmsNotification";

class NotificationFactory {
  public static create(notificationType: string): NotificationTypeInterface {
    if (notificationType === "email") {
      return new EmailNotification();
    }

    if (notificationType === "sms") {
      return new SmsNotification();
    }

    if (notificationType === "slack") {
      return new SlackNotification();
    }

    throw new Error(`Notification type ${notificationType} is not supported`);
  }
}

export default NotificationFactory;

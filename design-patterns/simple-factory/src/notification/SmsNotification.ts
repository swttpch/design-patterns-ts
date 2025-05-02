import { NotificationTypeInterface } from "../types/notification";

class SmsNotification implements NotificationTypeInterface {
  send(message: string, recipient: string): void {
    console.log(`Sending SMS to ${recipient} with message: ${message}`);
  }
}

export default SmsNotification;

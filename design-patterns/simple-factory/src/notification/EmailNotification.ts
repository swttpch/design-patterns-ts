import { NotificationTypeInterface } from "../types/notification";

class EmailNotification implements NotificationTypeInterface {
  send(message: string, recipient: string): void {
    console.log(`Sending email to ${recipient} with message: ${message}`);
  }
}

export default EmailNotification;

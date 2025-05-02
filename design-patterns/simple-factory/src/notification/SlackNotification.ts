import { NotificationTypeInterface } from "../types/notification";

class SlackNotification implements NotificationTypeInterface {
  send(message: string, recipient: string): void {
    console.log(
      `Sending Slack notification to ${recipient} with message: ${message}`,
    );
  }
}

export default SlackNotification;

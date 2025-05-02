import Order from "./Order";
import { OrderStateInterface } from "./OrderStateInterface";

class OrderComplete implements OrderStateInterface {
  prepare(order: Order): void {
    throw new Error("Order is already prepared.");
  }
  deliver(order: Order): void {
    throw new Error("Order is already delivered.");
  }
  complete(order: Order): void {
    throw new Error("Order is already completed.");
  }
}
export default OrderComplete;

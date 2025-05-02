import Order from "./Order";
import OrderComplete from "./OrderComplete";
import { OrderStateInterface } from "./OrderStateInterface";

class OrderDeliver implements OrderStateInterface {
  prepare(order: Order): void {
    throw new Error("Order is already prepared.");
  }
  deliver(order: Order): void {
    throw new Error("Order is already delivered.");
  }
  complete(order: Order): void {
    order.setState(new OrderComplete());
  }
}
export default OrderDeliver;

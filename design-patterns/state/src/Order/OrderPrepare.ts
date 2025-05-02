import Order from "./Order";
import OrderDeliver from "./OrderDeliver";
import { OrderStateInterface } from "./OrderStateInterface";

class OrderPrepare implements OrderStateInterface {
  prepare(order: Order): void {
    throw new Error("Order is already prepared.");
  }
  deliver(order: Order): void {
    order.setState(new OrderDeliver());
  }
  complete(order: Order): void {
    throw new Error("Order is not delivered yet.");
  }
}
export default OrderPrepare;

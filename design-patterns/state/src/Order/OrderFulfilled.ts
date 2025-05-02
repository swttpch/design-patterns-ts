import Order from "./Order";
import OrderPrepare from "./OrderPrepare";
import { OrderStateInterface } from "./OrderStateInterface";

class OrderFulfilled implements OrderStateInterface {
  prepare(order: Order): void {
    order.setState(new OrderPrepare());
  }
  deliver(order: Order): void {
    throw new Error("Order is not prepared yet.");
  }
  complete(order: Order): void {
    throw new Error("Order is not prepared yet.");
  }
}
export default OrderFulfilled;

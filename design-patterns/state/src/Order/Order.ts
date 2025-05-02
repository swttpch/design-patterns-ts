import OrderFulfilled from "./OrderFulfilled";
import { OrderStateInterface } from "./OrderStateInterface";

class Order implements OrderStateInterface {
  private state: OrderStateInterface;
  constructor() {
    this.state = new OrderFulfilled();
  }
  prepare(order: Order): void {
    this.state.prepare(order);
  }
  deliver(order: Order): void {
    this.state.deliver(order);
  }
  complete(order: Order): void {
    this.state.complete(order);
  }

  setState(state: OrderStateInterface): void {
    this.state = state;
  }
}

export default Order;

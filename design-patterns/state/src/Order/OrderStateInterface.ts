import Order from "./Order";

export interface OrderStateInterface {
  prepare(order: Order): void;
  deliver(order: Order): void;
  complete(order: Order): void;
}

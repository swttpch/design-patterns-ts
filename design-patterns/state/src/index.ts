import Order from "./Order/Order";

const pedido = new Order();
pedido.prepare(pedido);
pedido.deliver(pedido);
pedido.complete(pedido);
console.log(pedido);

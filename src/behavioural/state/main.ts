import { OrderContext } from './order/order-state';
import { PendingState } from './order/states/state';

console.log('=== State Pattern - Pedido ===\n');

const order = new OrderContext(new PendingState());

console.log(`Status: ${order.getStatus()}\n`);

order.proceed();
console.log(`Status: ${order.getStatus()}\n`);

order.proceed();
console.log(`Status: ${order.getStatus()}\n`);

order.proceed();
console.log(`Status: ${order.getStatus()}\n`);

console.log('--- Tentando cancelar pedido entregue ---');
order.cancel();

console.log('\n--- Novo pedido ---');
const order2 = new OrderContext(new PendingState());

order2.cancel();
console.log(`Status: ${order2.getStatus()}`);
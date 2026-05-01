import { OrderState, OrderContext } from '../order-state';

export class PendingState implements OrderState {
  public proceed(context: OrderContext): void {
    console.log('Pedido pendente -> Processando');
    context.transitionTo(new ProcessingState());
  }

  public cancel(context: OrderContext): void {
    console.log('Pedido pendente -> Cancelado');
    context.transitionTo(new CancelledState());
  }

  public getStatus(): string {
    return 'Pendente';
  }
}

export class ProcessingState implements OrderState {
  public proceed(context: OrderContext): void {
    console.log('Pedido processando -> Enviado');
    context.transitionTo(new ShippedState());
  }

  public cancel(context: OrderContext): void {
    console.log('Pedido processando -> Cancelado');
    context.transitionTo(new CancelledState());
  }

  public getStatus(): string {
    return 'Processando';
  }
}

export class ShippedState implements OrderState {
  public proceed(context: OrderContext): void {
    console.log('Pedido enviado -> Entregue');
    context.transitionTo(new DeliveredState());
  }

  public cancel(context: OrderContext): void {
    console.log('Não é possível cancelar pedido já enviado');
  }

  public getStatus(): string {
    return 'Enviado';
  }
}

export class DeliveredState implements OrderState {
  public proceed(context: OrderContext): void {
    console.log('Pedido já entregue');
  }

  public cancel(context: OrderContext): void {
    console.log('Não é possível cancelar pedido entregue');
  }

  public getStatus(): string {
    return 'Entregue';
  }
}

export class CancelledState implements OrderState {
  public proceed(context: OrderContext): void {
    console.log('Não é possível processar pedido cancelado');
  }

  public cancel(context: OrderContext): void {
    console.log('Pedido já cancelado');
  }

  public getStatus(): string {
    return 'Cancelado';
  }
}
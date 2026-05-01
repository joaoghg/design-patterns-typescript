export interface OrderState {
  proceed(context: OrderContext): void;
  cancel(context: OrderContext): void;
  getStatus(): string;
}

export class OrderContext {
  private state!: OrderState;

  constructor(state: OrderState) {
    this.transitionTo(state);
  }

  public transitionTo(state: OrderState): void {
    this.state = state;
  }

  public proceed(): void {
    this.state.proceed(this);
  }

  public cancel(): void {
    this.state.cancel(this);
  }

  public getStatus(): string {
    return this.state.getStatus();
  }
}
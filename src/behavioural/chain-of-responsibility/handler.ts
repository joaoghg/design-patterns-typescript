export interface Handler<T = unknown> {
  setNext(handler: Handler<T>): Handler<T>;
  handle(request: T): string | null;
}

export abstract class AbstractHandler<T = unknown> implements Handler<T> {
  private nextHandler: Handler<T> | null = null;

  setNext(handler: Handler<T>): Handler<T> {
    this.nextHandler = handler;
    return handler;
  }

  handle(request: T): string | null {
    if (this.nextHandler) {
      return this.nextHandler.handle(request);
    }
    return null;
  }
}
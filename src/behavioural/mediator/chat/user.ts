import { Mediator } from './mediator';

export class User {
  constructor(
    public name: string,
    private mediator: Mediator
  ) {
    mediator.addUser(this);
  }

  send(message: string): void {
    console.log(`${this.name} envia: "${message}"`);
    this.mediator.send(message, this);
  }

  receive(message: string, sender: User): void {
    console.log(`${this.name} recebe de ${sender.name}: "${message}"`);
  }
}
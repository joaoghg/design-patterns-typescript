import { Mediator } from './mediator';
import { User } from './user';

export class ChatRoom implements Mediator {
  private users: User[] = [];

  addUser(user: User): void {
    this.users.push(user);
    console.log(`${user.name} entrou no chat.`);
  }

  send(message: string, sender: User): void {
    console.log(`[ChatRoom] Repassando mensagem de ${sender.name}...`);
    this.users
      .filter((user) => user !== sender)
      .forEach((user) => user.receive(message, sender));
  }
}
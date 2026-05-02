import { User } from './user';

export interface Mediator {
  send(message: string, sender: User): void;
  addUser(user: User): void;
}
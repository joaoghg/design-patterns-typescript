import { ChatRoom } from './chat/chat-room';
import { User } from './chat/user';

console.log('=== Mediator Pattern - Chat Room ===\n');

const chatRoom = new ChatRoom();

const alice = new User('Alice', chatRoom);
const bob = new User('Bob', chatRoom);
const charlie = new User('Charlie', chatRoom);

console.log('');
alice.send('Olá, pessoal!');
console.log('');
bob.send('Oi Alice! Como vai?');
console.log('');
charlie.send('E aí galera!');
console.log('');
alice.send('Estou bem, obrigado!');
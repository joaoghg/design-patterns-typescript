import { User } from "../interfaces/user";

export class MyDatabaseClassic {
  private static _instance: MyDatabaseClassic | null = null;
  private users: User[] = [];

  private constructor() {}

  public static get instance(): MyDatabaseClassic {
    if (!MyDatabaseClassic._instance) {
      MyDatabaseClassic._instance = new MyDatabaseClassic();
    }
    return MyDatabaseClassic._instance;
  }

  add(user: User): void {
    this.users.push(user);
  }

  remove(index: number): void {
    this.users.splice(index, 1);
  }

  show(): void {
    for (const user of this.users) {
      console.log(user);
    }
  }
}

const db = MyDatabaseClassic.instance;
db.add({ id: 1, name: "John", age: 30 });
db.add({ id: 2, name: "Jane", age: 25 });
db.add({ id: 3, name: "Jack", age: 35 });
db.remove(1);
db.show();

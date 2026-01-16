import { MyDatabaseClassic } from "./db/my-database-classic";

const db = MyDatabaseClassic.instance;
db.add({ id: 1, name: "John", age: 30 });
db.add({ id: 2, name: "Jane", age: 25 });
db.add({ id: 3, name: "Jack", age: 35 });
db.remove(1);

export { db };

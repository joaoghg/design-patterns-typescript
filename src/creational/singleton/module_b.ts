import { MyDatabaseClassic } from "./db/my-database-classic";
import "./module_a";

const db = MyDatabaseClassic.instance;
db.add({ id: 4, name: "Alice", age: 30 });
db.add({ id: 5, name: "Bob", age: 25 });
db.add({ id: 6, name: "Charlie", age: 35 });
db.show();

const betterSqlite3 = require("better-sqlite3");
const path = require("path");

const db = betterSqlite3(path.resolve(__dirname, "foorbar.db"), {
  verbose: console.info,
});

db.exec("DROP TABLE cats");
db.exec(`
CREATE TABLE IF NOT EXISTS cats(
  ID INT PRIMARY KEY     NOT NULL,
  NAME           TEXT    NOT NULL,
  AGE            INT     NOT NULL,
  ADDRESS        CHAR(50),
  SALARY         REAL
);`);

const insert = db.prepare(
  "INSERT INTO cats (ID, NAME, AGE) VALUES (@id, @name, @age)"
);

const insertMany = db.transaction((cats) => {
  for (const cat of cats) insert.run(cat);
});

insertMany([
  { id: 1, name: "Joey", age: 2 },
  { id: 2, name: "Sally", age: 4 },
  { id: 3, name: "Junior", age: 1 },
]);

const stmt = db.prepare("SELECT name, age FROM cats");

let re = db.prepare("SELECT * FROM cats").run();
console.log(re);

// 婚姻，事业，孩子，健康，
// 好人，大人(血性)，能人，名人，伟人
// 成人，成熟，成才，成功
// 一不谈钱，二不谈女人，三不谈琐事

/**
 * 有本事：
 * 未成年：考高分
 * 成年：能思考，能自律，能交际，能做事，能成事
 * 软实力：教养、素质、思想深度、人脉，为人、品格、魅力、文化底蕴
 */

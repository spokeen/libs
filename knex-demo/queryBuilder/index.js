const knex = require("../index");

async function start() {
  // 如果表 users 不存在，就会报错
  //   await knex("users").insert({ name: "dd", age: 23 });
  //   let res = await knex("users").select().column("name", "age");
  let res = await knex.fromRaw(`select * from "users"`);
  console.log(res);
}

start();

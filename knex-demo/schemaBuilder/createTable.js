const knex = require("../index");

async function start() {
  await knex.schema.dropTableIfExists("students");
  await knex.schema.dropTableIfExists("hi");
  await knex.schema.createTable("students", function (table) {
    table.increments();
    table.string("name");
    table.string("age");
    table.string("grade");
  });

  await knex.schema.renameTable("students", "hi");

  await knex("hi").insert({
    name: "dd",
    age: "20",
    grade: "80",
  });

  console.log(await knex.schema.hasTable("hi"));
}

start();

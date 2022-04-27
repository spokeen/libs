const path = require("path");

const knex = require("knex")({
  client: "better-sqlite3", // or 'better-sqlite3'
  connection: {
    filename: "./mydb.db",
  },
  useNullAsDefault: true,
  debug: true,
});

module.exports = knex;

// async function createTable() {
//   await knex.schema.createTable("users", function (table) {
//     table.increments();
//     table.string("name");
//     table.string("age");
//     table.timestamps();
//   });
// }

// createTable();

// knex.migrate.latest();

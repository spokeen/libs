const knex = require("knex")({
  client: "better-sqlite3",
  connection: {
    filename: "./mydb.sqlite",
    flags: ["useNullAsDefault"],
  },
  log: {
    warn(message) {
      console.warn("warn", message);
    },
    error(message) {
      console.error("error", message);
    },
    deprecate(message) {
      console.deprecate("deprecate", message);
    },
    debug(message) {
      console.debug("debug", message);
    },
  },
});

knex.schema.createTable("users", function (table) {
  table.increments();
  table.string("name");
  table.timestamps();
});

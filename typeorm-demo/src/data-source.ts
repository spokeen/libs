import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "./entity/User";
import { Photo } from "./entity/Photo";
import { PhotoMetadata } from "./entity/PhotoMetadata";
const path = require("path");

export const AppDataSource = new DataSource({
  type: "better-sqlite3",
  database: path.resolve(__dirname, "database.db"),
  synchronize: true,
  logging: false,
  entities: [User, Photo, PhotoMetadata],
  migrations: ["src/migration/**/*.ts"],
});

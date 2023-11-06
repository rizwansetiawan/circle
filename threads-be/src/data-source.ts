import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "./entities/User";
import { Thread } from "./entities/Thread";
import { Follow } from "./entities/Follow";
import { Like } from "./entities/Like";
import { Reply } from "./entities/Reply";
export const AppDataSource = new DataSource({
  type: "postgres",
  host: "monorail.proxy.rlwy.net",
  port: 11845,
  username: "postgres",
  password: "Fde6c2Bae5Adef--21Bae4*GFcFE*fGC",
  database: "railway",
  synchronize: true,
  logging: false,
  entities: [User, Thread, Follow, Like, Reply],
  migrations: ["src/migration/*.ts"],
  subscribers: [],
});

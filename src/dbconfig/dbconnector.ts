import { Pool } from "pg";

export default new Pool({
  user: "postgres",
  host: "localhost",
  database: "todos",
  password: "1234",
  port: 5432,
});

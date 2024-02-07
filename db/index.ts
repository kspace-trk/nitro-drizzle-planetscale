import { connect } from "@planetscale/database";
import { drizzle } from 'drizzle-orm/planetscale-serverless'
import * as schema from "./schema"

const conn = connect({
  host: process.env.PLANETSCALE_DB_HOST,
  username: process.env.PLANETSCALE_DB_USERNAME,
  password: process.env.PLANETSCALE_DB_PASSWORD,
});

export const db = drizzle(conn, { schema })

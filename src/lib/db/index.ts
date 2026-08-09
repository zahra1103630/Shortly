// import { drizzle } from "drizzle-orm/neon-http";
// import { neon } from "@neondatabase/serverless";
// import * as schema from "./schema";

// const sql = neon(process.env.DATABASE_URL!);
// export const db = drizzle(sql, { schema });
import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";

import * as schema from "./schema";

console.log("DATABASE_URL EXISTS:", !!process.env.DATABASE_URL);

const sql = neon(process.env.DATABASE_URL!);

export const db = drizzle(sql, { schema });

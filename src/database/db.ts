///////////////////////////////////////////////////////////////////////
// Local Connection
///////////////////////////////////////////////////////////////////////

// Pool Connection

import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from 'pg';
import * as schema from './schemas';
import dotenv from 'dotenv';


// Load environment variables from .env file
dotenv.config();


const connectionString = process.env.LOCAL_DATABASE_URL as string;
if (!connectionString) {
  throw new Error('Environment variable for database is not defined');
}

const pool = new Pool({ connectionString: connectionString });
export const db = drizzle(pool, { schema, logger: true });




///////////////////////////////////////////////////////////////////////
// Neon Connection
///////////////////////////////////////////////////////////////////////


// Pool Connection


// import { Pool, neonConfig } from '@neondatabase/serverless';
// import { drizzle } from 'drizzle-orm/neon-serverless';
// import ws from 'ws';
// neonConfig.webSocketConstructor = ws;  // <-- this is the key bit

// import * as schema from './schemas';

// import dotenv from 'dotenv';
// // Load environment variables from .env file
// dotenv.config();


// const connectionString = process.env.NEON_POOL_DATABASE_URL as string;
// if (!connectionString) {
//   throw new Error('Environment variable for database is not defined');
// }

// const pool = new Pool({ connectionString: connectionString });
// export const db = drizzle(pool, { schema, logger: true });


// HTTP Connection


// import { drizzle } from 'drizzle-orm/neon-http';
// import { neon } from '@neondatabase/serverless';
// import * as schema from './schemas';


// import dotenv from 'dotenv';
// // Load environment variables from .env file
// dotenv.config();
// const connectionString = process.env.NEON_HTTP_DATABASE_URL as string;
// if (!connectionString) {
//   throw new Error('Environment variable for database is not defined');
// }
// const sql = neon(connectionString!);

// export const db = drizzle(sql, {schema, logger: true});




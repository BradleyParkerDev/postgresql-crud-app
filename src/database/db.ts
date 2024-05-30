import { drizzle } from 'drizzle-orm/neon-http';

import { neon } from '@neondatabase/serverless';
import * as schema from './schemas';


import dotenv from 'dotenv';
// Load environment variables from .env file
dotenv.config();
const connectionString = process.env.TEST_DB as string;
if (!connectionString) {
  throw new Error('Environment variable TEST_DB is not defined');
}
const sql = neon(connectionString!);

export const db = drizzle(sql, {schema, logger: true});




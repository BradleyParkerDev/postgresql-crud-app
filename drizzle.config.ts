import { defineConfig } from 'drizzle-kit';
import dotenv from 'dotenv';


// Load environment variables from .env file
dotenv.config();

const connectionString = process.env.TEST_DB as string;

if (!connectionString) {
	throw new Error('Environment variable TEST_DB is not defined');
}

export default defineConfig({
	schema: './src/database/schemas',
	out: './src/database/migrations',
	dialect: 'postgresql',
	dbCredentials: {
	url: connectionString,
	},

	verbose: true,
	strict: true,
})

// import { defineConfig } from 'drizzle-kit'

// export default defineConfig({
//  schema: "./schema.ts",
//   dialect: 'postgresql',
//   dbCredentials: {
//     url: process.env.DB_URL,
//   },
//   verbose: true,
//   strict: true,
// })
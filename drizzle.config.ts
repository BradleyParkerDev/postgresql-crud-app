import { defineConfig } from 'drizzle-kit';
import dotenv from 'dotenv';


// Load environment variables from .env file
dotenv.config();


// Local
const connectionString = process.env.LOCAL_DATABASE_URL as string;


// Neon

// const connectionString = process.env.NEON_HTTP_DATABASE_URL as string;
// const connectionString = process.env.NEON_POOL_DATABASE_URL as string;

if (!connectionString) {
	throw new Error('Environment variable for database is not defined');
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


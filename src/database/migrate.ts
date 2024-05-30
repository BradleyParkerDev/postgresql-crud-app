import { migrate } from 'drizzle-orm/neon-http/migrator';
import { db } from './db';

const main = async () =>{

    // This will run migrations on the database, skipping the ones already applied
    return await migrate(db, { migrationsFolder: './src/database/migrations' });


}
main().catch((err) => {
    console.error(err);
    process.exit(1);
})
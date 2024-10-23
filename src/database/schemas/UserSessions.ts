// database/schemas/sessions.js
import { pgTable, uuid, timestamp } from 'drizzle-orm/pg-core';
import User from './Users';

// Define UserSession table
const UserSession = pgTable('user_sessions', {
  sessionId: uuid('session_id').primaryKey().defaultRandom().unique(), // UUID v4 primary key for the session
  userId: uuid('user_id')
    // .notNull()
    .references(() => User.userId), // Foreign key that references userId in the Users table
  lastUpdated: timestamp('last_updated').defaultNow().notNull() // Automatically sets current timestamp on update
});

export default UserSession;


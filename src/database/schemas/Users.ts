// database/schemas/users.js
import  { pgTable, text, uuid, timestamp }  from 'drizzle-orm/pg-core';

const User = pgTable('users', {
	id: uuid('id').primaryKey().defaultRandom().unique(), // UUID v4 primary key
	userImage: text('user_image'),
	firstName: text('first_name').notNull(), // Not nullable text field
	lastName: text('last_name').notNull(), // Not nullable text field
	emailAddress: text('email_address').unique().notNull(), // Unique and not nullable
	userName: text('user_name').unique().notNull(), // Unique and not nullable
	password: text('password').notNull(), // Password field
	lastUpdated: timestamp('last_updated').defaultNow().notNull() // Automatically sets current timestamp on update
});

export default  User;

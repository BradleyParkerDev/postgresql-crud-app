"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// database/schemas/users.js
const pg_core_1 = require("drizzle-orm/pg-core");
const User = (0, pg_core_1.pgTable)('users', {
    id: (0, pg_core_1.uuid)('id').primaryKey().defaultRandom().unique(), // UUID v4 primary key
    firstName: (0, pg_core_1.text)('first_name').notNull(), // Not nullable text field
    lastName: (0, pg_core_1.text)('last_name').notNull(), // Not nullable text field
    emailAddress: (0, pg_core_1.text)('email_address').unique().notNull(), // Unique and not nullable
    userName: (0, pg_core_1.text)('user_name').unique().notNull(), // Unique and not nullable
    password: (0, pg_core_1.text)('password').notNull(), // Password field
    lastUpdated: (0, pg_core_1.timestamp)('last_updated').defaultNow().notNull() // Automatically sets current timestamp on update
});
exports.default = User;

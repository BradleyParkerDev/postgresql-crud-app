CREATE TABLE IF NOT EXISTS "users" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"first_name" text NOT NULL,
	"last_name" text NOT NULL,
	"email_address" text NOT NULL,
	"user_name" text NOT NULL,
	"password" text NOT NULL,
	"last_updated" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "users_id_unique" UNIQUE("id"),
	CONSTRAINT "users_email_address_unique" UNIQUE("email_address"),
	CONSTRAINT "users_user_name_unique" UNIQUE("user_name")
);

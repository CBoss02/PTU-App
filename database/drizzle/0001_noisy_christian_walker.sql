ALTER TABLE `users` RENAME TO `user`;--> statement-breakpoint
ALTER TABLE `user` RENAME COLUMN "created_at" TO "created_on";--> statement-breakpoint
CREATE TABLE `chat` (
	`id` integer PRIMARY KEY NOT NULL,
	`name` text,
	`model_id` integer NOT NULL,
	FOREIGN KEY (`model_id`) REFERENCES `model`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `group` (
	`chat_id` integer NOT NULL,
	`user_id` integer NOT NULL,
	PRIMARY KEY(`chat_id`, `user_id`),
	FOREIGN KEY (`chat_id`) REFERENCES `chat`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `message` (
	`id` integer PRIMARY KEY NOT NULL,
	`chat_id` integer NOT NULL,
	`user_id` integer NOT NULL,
	`query` text NOT NULL,
	`reply` text NOT NULL,
	`created_on` text DEFAULT CURRENT_TIMESTAMP NOT NULL,
	`last_updated` text DEFAULT CURRENT_TIMESTAMP NOT NULL,
	FOREIGN KEY (`chat_id`) REFERENCES `chat`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `metadata` (
	`id` integer PRIMARY KEY NOT NULL,
	`message_id` integer NOT NULL,
	`name` text NOT NULL,
	`page` text,
	`heading` text,
	`chunk` text NOT NULL,
	`created_on` text DEFAULT CURRENT_TIMESTAMP NOT NULL,
	`last_updated` text DEFAULT CURRENT_TIMESTAMP NOT NULL,
	FOREIGN KEY (`message_id`) REFERENCES `message`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `model` (
	`id` integer PRIMARY KEY NOT NULL,
	`name` text NOT NULL
);
--> statement-breakpoint
DROP INDEX `users_email_unique`;--> statement-breakpoint
PRAGMA foreign_keys=OFF;--> statement-breakpoint
CREATE TABLE `__new_user` (
	`id` integer PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`email` text NOT NULL,
	`password` text NOT NULL,
	`image` text,
	`provider` text,
	`created_on` text DEFAULT CURRENT_TIMESTAMP NOT NULL,
	`last_updated` text DEFAULT CURRENT_TIMESTAMP NOT NULL
);
--> statement-breakpoint
INSERT INTO `__new_user`("id", "name", "email", "password", "image", "provider", "created_on", "last_updated") SELECT "id", "name", "email", "password", "image", "provider", "created_on", "last_updated" FROM `user`;--> statement-breakpoint
DROP TABLE `user`;--> statement-breakpoint
ALTER TABLE `__new_user` RENAME TO `user`;--> statement-breakpoint
PRAGMA foreign_keys=ON;--> statement-breakpoint
CREATE UNIQUE INDEX `user_email_unique` ON `user` (`email`);
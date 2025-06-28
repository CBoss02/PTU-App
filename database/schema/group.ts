import {integer, primaryKey, sqliteTable} from "drizzle-orm/sqlite-core";
import {chat} from "./chat";
import {user} from "./user";
import type {InferSelectModel} from "drizzle-orm";
import {createInsertSchema} from "drizzle-zod";

export const group = sqliteTable('group', {
    chatId: integer('chat_id').notNull().references(() => chat.id),
    userId: integer('user_id').notNull().references(() => user.id),
}, (table) => ({
    pk: primaryKey({ columns: [table.chatId, table.userId] }),
}));

export type Group = InferSelectModel<typeof group>;
export const groupInsertSchema = createInsertSchema(group);

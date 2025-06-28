import {integer, sqliteTable, text} from "drizzle-orm/sqlite-core";
import {idField} from "../classes/idField";
import {timestamps} from "../classes/timestamps";
import {user} from "./user";
import {chat} from "./chat";
import type {InferSelectModel} from "drizzle-orm";
import {createInsertSchema} from "drizzle-zod";

export const message = sqliteTable('message', {
    ...idField,
    chatId: integer('chat_id').notNull().references(() => chat.id),
    userId: integer('user_id').notNull().references(() => user.id),
    query: text('query').notNull(),
    reply: text('reply').notNull(),
    ...timestamps,
});

export type Message = InferSelectModel<typeof message>;
export const messageInsertSchema = createInsertSchema(message);
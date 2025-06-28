import {integer, sqliteTable, text} from 'drizzle-orm/sqlite-core'
import {idField} from "../classes/idField";
import {model} from "./model";
import type {InferSelectModel} from "drizzle-orm";
import {createInsertSchema} from "drizzle-zod";

export const chat = sqliteTable('chat', {
    ...idField,
    name: text('name'),
    modelId: integer('model_id').notNull().references(() => model.id),
});

export type Chat = InferSelectModel<typeof chat>;
export const chatInsertSchema = createInsertSchema(chat);
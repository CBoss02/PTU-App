import {sqliteTable, text} from "drizzle-orm/sqlite-core";
import {idField} from "../classes/idField";
import type {InferSelectModel} from "drizzle-orm";
import {createInsertSchema} from "drizzle-zod";

export const model = sqliteTable('model', {
    ...idField,
    name: text('name').notNull(),
});

export type Model = InferSelectModel<typeof model>;
export const modelInsertSchema = createInsertSchema(model);

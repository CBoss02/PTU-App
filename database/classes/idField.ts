//import { sql, type InferSelectModel } from 'drizzle-orm'
import {integer, sqliteTable, text} from 'drizzle-orm/sqlite-core'

// Reusable ID field
export const idField = {
    id: integer('id').primaryKey().notNull(),
};
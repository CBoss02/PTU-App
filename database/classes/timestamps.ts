import { sql, type InferSelectModel } from 'drizzle-orm'
import {integer, sqliteTable, text} from 'drizzle-orm/sqlite-core'

// Reusable timestamp fields
export const timestamps = {
    createdOn: text('created_on').notNull().default(sql`CURRENT_TIMESTAMP`),
    lastUpdated: text('last_updated').notNull().default(sql`CURRENT_TIMESTAMP`),
};
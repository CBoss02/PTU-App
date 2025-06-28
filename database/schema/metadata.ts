import { idField } from "database/classes/idField";
import {integer, sqliteTable, text} from "drizzle-orm/sqlite-core";
import {message} from "./message";
import {timestamps} from "../classes/timestamps";


export const metadata = sqliteTable('metadata', {
    ...idField,
    messageId: integer('message_id').notNull().references(() => message.id),
    name: text('name').notNull(),
    page: text('page'),
    heading: text('heading'),
    chunk: text('chunk').notNull(),
    ...timestamps,
});
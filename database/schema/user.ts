import { type InferSelectModel } from 'drizzle-orm'
import {integer, sqliteTable, text} from 'drizzle-orm/sqlite-core'
// import { ulid } from 'ulidx'
import {idField} from "../classes/idField";
import {timestamps} from "../classes/timestamps";
import {createInsertSchema} from "drizzle-zod";

/*export const users = sqliteTable('users', {
  id: text('id').$defaultFn(ulid).primaryKey(),
  createdAt: text('created_at').default(sql`(CURRENT_TIMESTAMP)`),
  email: text('email').unique().notNull(),
  password: text('password'),
  name: text('name'),
  image: text('image'),
  provider: text('provider'),
})*/

export const user = sqliteTable('user', {
  ...idField,
  name: text('name').notNull(),
  email: text('email').notNull().unique(),
  password: text('password').notNull(),
  image: text('image'),
  provider: text('provider'),
  ...timestamps,
});

export type User = InferSelectModel<typeof user>
export const userInsertSchema = createInsertSchema(user)

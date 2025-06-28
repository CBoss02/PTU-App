import type { Config } from 'drizzle-kit'

export default {
  out: './database/drizzle',
  schema: './database/schema/index.ts',
  dialect: 'sqlite',
  driver: 'd1-http',
  dbCredentials: {
    databaseId: 'd925390b-d105-40f5-b7bb-a7560065cab7',
    accountId: process.env.CLOUDFLARE_ACCOUNT_ID!,
    token: process.env.CLOUDFLARE_TOKEN!,
  },
} satisfies Config

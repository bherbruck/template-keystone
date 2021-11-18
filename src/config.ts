import { config as updateEnv } from 'dotenv'

updateEnv()

export const DB_PROVIDER = process.env.DB_PROVIDER ?? 'sqlite'
export const DB_URL = process.env.DB_URL ?? 'file:./keystone.db'
export const PORT = process.env.PORT ?? '3000'
export const SESSION_SECRET = process.env.SESSION_SECRET

import { createAuth } from '@keystone-6/auth'
import { statelessSessions } from '@keystone-6/core/session'
import { SESSION_SECRET } from './config'

function getSessionSecret(secret: string | undefined) {
  if (secret) return secret
  if (process.env.NODE_ENV === 'production')
    throw new Error(
      'The SESSION_SECRET environment variable must be set in production'
    )
  return '-- DEV COOKIE SECRET; CHANGE ME --'
}

export const { withAuth } = createAuth({
  listKey: 'User',
  identityField: 'email',
  sessionData: 'name roles { name }',
  secretField: 'password',
  initFirstItem: {
    fields: ['name', 'email', 'password'],
  },
  magicAuthLink: {
    sendToken: async ({ itemId, identity, token, context }) => {
      console.log(`${identity}: ${token}`)
    },
    tokensValidForMins: 10,
  },
})

export const session = statelessSessions({
  maxAge: 60 * 60 * 24 * 30, // 30 days
  secret: getSessionSecret(SESSION_SECRET)!,
})

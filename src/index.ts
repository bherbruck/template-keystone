import { config } from '@keystone-6/core'
import { withAuth, session } from './auth'
import { lists } from './schema'

import { DB_PROVIDER, DB_URL, PORT } from './config'

export const app = withAuth(
  config({
    db: { provider: DB_PROVIDER as 'sqlite' | 'postgresql', url: DB_URL },
    ui: { isAccessAllowed: (context) => !!context.session?.data },
    lists,
    session,
    images: { upload: 'local' },
    server: { port: parseInt(PORT) },
  })
)

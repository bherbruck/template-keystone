import { list } from '@keystone-6/core'
import { text, relationship, password } from '@keystone-6/core/fields'

export const lists = {
  User: list({
    fields: {
      name: text({ validation: { isRequired: true } }),
      email: text({
        validation: { isRequired: true },
        isIndexed: 'unique',
        isFilterable: true,
      }),
      password: password({ validation: { isRequired: true } }),
      roles: relationship({ ref: 'Role.users', many: true }),
    },
  }),

  Role: list({
    fields: {
      name: text({ validation: { isRequired: true } }),
      users: relationship({ ref: 'User.roles', many: true }),
    },
  }),
}

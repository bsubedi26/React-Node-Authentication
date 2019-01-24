const { authenticate } = require('@feathersjs/authentication').hooks
const { hashPassword } = require('@feathersjs/authentication-local').hooks
const { removeFields } = require('../../hooks/globals')

module.exports = {
  before: {
    all: [],
    find: [],
    get: [ authenticate('jwt') ],
    create: [ hashPassword() ],
    update: [ hashPassword(), authenticate('jwt') ],
    patch: [ hashPassword(), authenticate('jwt') ],
    remove: [ authenticate('jwt') ]
  },

  after: {
    all: [
      removeFields(['password'])
    ],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
}

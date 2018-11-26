// Application hooks that run for every service
const log = require('./hooks/log')
const { disableMultiItemChange } = require('feathers-hooks-common/lib/services')

module.exports = {
  before: {
    all: [ log() ],
    find: [],
    get: [],
    create: [],
    update: [
      disableMultiItemChange()
    ],
    patch: [
      disableMultiItemChange()
    ],
    remove: [
      disableMultiItemChange()
    ]
  },

  after: {
    all: [ log() ],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [ log() ],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
}

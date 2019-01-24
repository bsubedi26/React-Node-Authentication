const { fastJoin } = require('feathers-hooks-common')
const { userLoader } = require('../../hooks/batchLoaders')

const resolvers = {
  before: ctx => {
    ctx.userLoader = userLoader(ctx)
  },
  joins: {
    _user: () => async (events, ctx) => {
      const user = await ctx.userLoader.load(events.creator_id)
      events._user = user
    }
  }
}

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [
      fastJoin(resolvers)
    ],
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

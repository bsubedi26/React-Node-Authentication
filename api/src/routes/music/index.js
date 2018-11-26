const createService = require('feathers-knex')
const createModel = require('../../models/music.model')
const hooks = require('./hooks')
const schema = require('./schema')

module.exports = function (app) {
  const Model = createModel(app)
  const paginate = app.get('paginate')

  const options = {
    name: 'music',
    Model,
    paginate
  }

  // Initialize our service with any options it requires
  app.use('/music', createService(options))

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('music')

  app.utils.validate(service, schema)

  service.hooks(hooks)
}

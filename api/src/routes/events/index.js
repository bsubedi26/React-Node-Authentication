const createService = require('feathers-knex')
const createModel = require('../../models/events.model')
const hooks = require('./hooks')

module.exports = function (app) {
  const Model = createModel(app)
  const paginate = app.get('paginate')
  const name = 'events'

  const options = {
    name,
    Model,
    paginate
  }

  // Initialize our service with any options it requires
  app.use(`/${name}`, createService(options))

  // Get our initialized service so that we can register hooks and filters
  const service = app.service(name)

  // app.utils.validate(service, schema)

  service.hooks(hooks)
}

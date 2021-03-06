// Initializes the `sessions` service on path `/sessions`
const createService = require('feathers-nedb');
const createModel = require('../../models/sessions.model');
const hooks = require('./sessions.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/sessions', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('sessions');

  service.hooks(hooks);
};

const errors = require('@feathersjs/errors')
const Joi = require('joi')
const utils = require('feathers-hooks-common/lib/services')
const logger = require('../../logger')

/*
 * USAGE: validate(service, type, {options})
 * Given a feathers service, a tcomb type and optional options for tcomb-validation,
 * will add a before hook to create, update, and patch methods to validate the incoming data.
 * On error, returns a 400 BadRequest with error message.
*/

module.exports = (service, type, options) => {
  service.hooks({
    before: {
      create: validateFunction(type, options),
      update: validateFunction(type, options)
    }
  })
}

const validateFunction = (schema, joiOptions) => {
  return (hook, next) => {
    utils.checkContext(hook, 'before', ['create', 'update'], 'validateFunction')
    const { data } = hook
    logger.info('data: ', data)

    const cb = (err, value) => {
      logger.info('err: ', err)
      if (err) {
        next(new errors.BadRequest('Invalid Request: Validation Error.', err))
      } else {
        return next(null, hook)
      }
    }
    Joi.validate(data, schema, cb)
  }
}

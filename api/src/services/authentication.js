const authentication = require('@feathersjs/authentication')
const jwt = require('@feathersjs/authentication-jwt')
const local = require('@feathersjs/authentication-local')

module.exports = function (app) {
  const config = app.get('authentication')

  // Set up authentication with the secret
  app.configure(authentication(config))
  app.configure(jwt())
  app.configure(local())

  // The `authentication` service is used to create a JWT.
  // The before `create` hook registers strategies that can be used
  // to create a new valid JWT (e.g. local or oauth2)
  app.service('authentication').hooks({
    before: {
      create: [
        authentication.hooks.authenticate(config.strategies)
      ],
      remove: [
        authentication.hooks.authenticate('jwt')
      ]
    },
    after: {
      create: [
        ctx => {
          delete ctx.params.user.password // Don't expose sensitive information.
          ctx.result = Object.assign({}, ctx.result, ctx.params.user)
          return ctx
        }
      ]
    }
  })
}

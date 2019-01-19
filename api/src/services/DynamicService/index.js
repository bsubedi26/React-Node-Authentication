const DynamicService = require('./service')

module.exports = (name, { Model, Schema }) => function (...args) {
  const app = args[0]
  const serviceOptions = { name, Model }

  app.use(`/${name}`, new DynamicService(...args, serviceOptions))

  const service = app.service(name)

  app.utils.validate(service, Schema())

  app.use(`/schema/${name}`, {
    async find () {
      return {
        name,
        schema: Schema().describe(),
        rawSchema: Schema.toString()
      }
    }
  })
}

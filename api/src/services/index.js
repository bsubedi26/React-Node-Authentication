const DynamicService = require('./DynamicService')
const Shirts = require('../models/shirts.model')
const Pants = require('../models/pants.model')

module.exports = function (app) {
  const services = {
    shirts: DynamicService('shirts', { Model: Shirts.Model(app), Schema: Shirts.Schema }),
    pants: DynamicService('pants', { Model: Pants.Model(app), Schema: Pants.Schema })
  }
  for (const key in services) {
    app.configure(services[key])
  }
}

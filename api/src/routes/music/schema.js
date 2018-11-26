const Joi = require('joi')

const schema = Joi.object().keys({
  name: Joi.string().required(),
  category: Joi.string().required()
})

module.exports = schema

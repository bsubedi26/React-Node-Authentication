const Joi = require('joi')

const schema = Joi.object().keys({
  text: Joi.string().required()
})

module.exports = schema

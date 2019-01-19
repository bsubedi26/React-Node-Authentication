const Joi = require('joi')

const schema = () => Joi.object().keys({
  size: Joi.string().required(),
  color: Joi.string().required()
})

exports.Schema = schema

exports.Model = function (app) {
  const db = app.get('knexClient')
  const tableName = 'shirts'

  db.schema.hasTable(tableName).then(exists => {
    if (!exists) {
      db.schema.createTable(tableName, table => {
        table.increments('id')
        table.string('size').notNullable()
        table.string('color').notNullable()
      })
        .then(() => console.log(`Created ${tableName} table`))
        .catch(e => console.error(`Error creating ${tableName} table`, e))
    }
  })

  return db
}

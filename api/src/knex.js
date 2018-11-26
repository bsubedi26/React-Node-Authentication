const knex = require('knex')

module.exports = function (app) {
  const { client, connection, useNullAsDefault } = app.get('sqlite')
  const db = knex({
    client,
    connection,
    useNullAsDefault,
    pool: {
      afterCreate (conn, cb) {
        conn.run('PRAGMA foreign_keys = ON', cb)
      }
    }
  })

  app.set('knexClient', db)
}

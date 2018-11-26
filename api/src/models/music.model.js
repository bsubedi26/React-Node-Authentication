module.exports = function (app) {
  const db = app.get('knexClient')
  const tableName = 'music'
  db.schema.hasTable(tableName).then(exists => {
    if (!exists) {
      db.schema.createTable(tableName, table => {
        table.increments('id')
        table.string('category').notNullable()
        table.string('name').notNullable()
      })
        .then(() => console.log(`Created ${tableName} table`))
        .catch(e => console.error(`Error creating ${tableName} table`, e))
    }
  })

  return db
}

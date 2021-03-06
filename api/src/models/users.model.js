module.exports = function (app) {
  const db = app.get('knexClient')
  const tableName = 'users'
  db.schema.hasTable(tableName).then(exists => {
    // if (exists) {
    //   db.schema.table(tableName, table => {
    //     table.boolean('online')
    //   })
    //     .then(() => console.log(`Updated ${tableName} table`))
    //     .catch(e => console.error(`Error updating ${tableName} table`, e))
    // }
    if (!exists) {
      db.schema.createTable(tableName, table => {
        table.increments('id')
        table.string('email').unique()
        table.string('password')
      })
        .then(() => console.log(`Created ${tableName} table`))
        .catch(e => console.error(`Error creating ${tableName} table`, e))
    }
  })

  return db
}

module.exports = function (app) {
  const db = app.get('knexClient')
  const tableName = 'events'
  db.schema.hasTable(tableName).then(exists => {
    // if (exists) {
    //   db.schema.table(tableName, table => {

    //   })
    //     .then(() => console.log(`Updated ${tableName} table`))
    //     .catch(e => console.error(`Error updating ${tableName} table`, e))
    // }
    if (!exists) {
      db.schema.createTable(tableName, table => {
        table.increments('id')
        table.string('title').notNullable()
        table.string('description')
        table.string('date')
        table.boolean('checked')
        table.string('created_by')
        table.integer('creator_id').unsigned().references('id').inTable('users').onDelete('cascade')
      })
        .then(() => console.log(`Created ${tableName} table`))
        .catch(e => console.error(`Error creating ${tableName} table`, e))
    }
  })

  return db
}

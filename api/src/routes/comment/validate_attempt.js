const { omit } = require('lodash')
// const sqlValidator = require('mysql-validator')

const validator = () => {
  return async context => {
    const { data } = context
    console.log('data: ', data)
    const knex = context.app.get('knexClient')
    // const r = await knex.raw(`SELECT * FROM information_schema.columns;`)
    // const r = await knex.raw(`SELECT * FROM sqlite_master;`)
    const columns = await knex.table('comment').columnInfo()
    const columnsNoId = omit(columns, 'id')

    Object
      .keys(columnsNoId)
      .forEach(column => {
        console.log('column: ', column)
        const value = columns[column]
        console.log('value: ', value)
        // const err = sqlValidator.check(data[column], value.type)
        // const err = sqlValidator.check('1', 'varchar')
        // console.log('err: ', err)
      })

    return context
  }
}
module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [
      validator()
    ],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
}

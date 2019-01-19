const errors = require('@feathersjs/errors')

class DynamicService {
  constructor (app, options) {
    // setters
    this.app = app
    this.name = options.name
    this.db = app.get('knexClient')

    // functions
    this._validations(options)
  }

  async create (data, params) {
    console.log('-------- create --------')
    await this.db(this.name).insert(data)
    return data
  }
  async find (params) {
    console.log('-------- find --------')
    console.log(this.name)
    const data = await this.db.select('*').from(this.name)
    return {
      data
    }
  }
  async get (id, params) {
    console.log('-------- get --------')
    const data = await this.db.select('*').from(this.name).where({ id })
    if (!data.length) {
      throw new errors.NotFound(`No record found for id '${id}'`)
    }
    return {
      data
    }
  }

  async update (id, data, params) {
    console.log('-------- update --------')
    return this._update(id, data, params)
  }

  async patch (id, data, params) {
    console.log('-------- patch --------')
    return this._update(id, data, params)
  }

  async _update (id, data, params) {
    console.log('-------- _update --------')
    console.log('_update id: ', id)
    console.log('this.name: ', this.name)
    console.log('data: ', data)
    await this.db(this.name).update(data).where({ id })
    const result = await this.db.select('*').from(this.name)
    return {
      data: result
    }
  }

  async remove (id, params) {
    const item = await this.db.select('*').from(this.name).where({ id })
    if (!item.length) {
      throw new errors.NotFound(`No record found for id '${id}'`)
    }

    const data = await this.db(this.name).where({ id }).del()
    console.log('data: ', data)
    return this.db.select('*').from(this.name)
  }

  _validations (options) {
    if (!options) {
      throw new Error('DynamicService options object required!')
    }

    if (!options.Model) {
      throw new Error('DynamicService options.Model object required!')
    }

    if (typeof options.name !== 'string') {
      throw new Error('No table name specified.')
    }
  }
}

module.exports = DynamicService

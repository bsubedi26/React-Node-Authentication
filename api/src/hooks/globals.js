const { path, omit, map } = require('ramda')

const removeFields = (fields) => async ctx => {
  if (path(['result', 'data'], ctx)) {
    const list = path(['result', 'data'], ctx)
    const omitFields = object => omit(fields, object)
    const omitted = map(omitFields, list)
    ctx.result.data = omitted
  }
  return ctx
}

module.exports = {
  removeFields
}

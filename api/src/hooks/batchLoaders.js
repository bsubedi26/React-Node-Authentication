const BatchLoader = require('@feathers-plus/batch-loader')
const { getUniqueKeys, getResultsByKey } = BatchLoader

/*
 **** BATCH LOADER FUNCTION ****
*/

const getByIds = ({ ctx, service, id, query }) => {
  return async (ids) => {
    const userService = ctx.app.service(service)
    const idArray = getUniqueKeys(ids)
    const idField = id || 'id'
    const objectId = obj => obj[idField]
    query = { ...query, [idField]: { $in: idArray } }
    const { data } = await userService.find({ query })
    const results = getResultsByKey(idArray, data, objectId, '!')
    return results
  }
}

/*
 **** BATCH LOADERS ****
*/

const userLoader = (ctx) => new BatchLoader(getByIds({ ctx, service: 'users', id: 'id' }))
const commentsLoader = (ctx) => new BatchLoader(getByIds({ ctx, service: 'comments', id: 'thread_id' }))

module.exports = {
  userLoader,
  commentsLoader
}

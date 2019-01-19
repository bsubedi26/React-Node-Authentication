import reduxifyServices from 'feathers-redux'

export const models = ['comment', 'music', 'shirts', 'pants']

export default (app) => {
  const services = reduxifyServices(app, models)
  return services
}

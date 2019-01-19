// import { combineReducers } from 'redux'
import storage from 'redux-persist/lib/storage' // or whatever storage you are using
import { persistCombineReducers } from 'redux-persist'
import auth from './auth'
import { services } from '../util/feathers'
import { models } from '../util/feathers/reduxServices'
import { flatten, mergeAll } from 'ramda'

console.log('services: ', services)
console.log('models: ', models)
const config = {
  key: 'primary',
  storage
}

// const rootReducer = combineReducers({
//   auth,
// })

// const serviceReducers = models.map(m => ({ [m]: services[m].reducer }))
const serviceReducers = Object.keys(services).map(key => ({
  [key]: services[key].reducer
}))

const rootReducer = persistCombineReducers(config, {
  auth,
  ...mergeAll(serviceReducers)
  // comment: services.comment.reducer,
  // music: services.music.reducer
})

export default rootReducer

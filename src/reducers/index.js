// import { combineReducers } from 'redux'
import storage from 'redux-persist/lib/storage' // or whatever storage you are using
import { persistCombineReducers } from 'redux-persist'
import auth from './auth'

const config = {
  key: 'primary',
  storage,
}

// const rootReducer = combineReducers({
//   auth,
// })

const rootReducer = persistCombineReducers(config, {
  auth,
})

export default rootReducer

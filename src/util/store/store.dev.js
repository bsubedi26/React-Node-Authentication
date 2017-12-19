import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from 'reducers'
import promiseMiddleware from 'redux-promise-middleware'
import { persistStore } from 'redux-persist'

export default function configureStore(initialState = {}) {
  const middlewares = [
    ReduxThunk,
    promiseMiddleware(),
  ]
  const enhancers = [
    applyMiddleware(...middlewares),
    // other store enhancers if any
  ]
  const composeEnhancers = composeWithDevTools(
    {
      // other compose enhancers if any
      // Specify here other options if needed
    }
  )
  let store = createStore(rootReducer, initialState, composeEnhancers(...enhancers))
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('reducers', () => {
      /* eslint-disable global-require */
      const nextReducer = require('reducers').default
      store.replaceReducer(nextReducer)
    })
  }

  let persistor = persistStore(store)
  

  return { store, persistor }
}
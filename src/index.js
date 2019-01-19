import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/es/integration/react'

import configureStore from 'util/store'
import Routes from 'routes'
import { bindWithDispatch } from 'feathers-redux'
import { services } from 'util/feathers'
import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'assets/styles/main.css'

import ReactJoiValidations from 'react-joi-validation'
import Joi from 'joi-browser'
ReactJoiValidations.setJoi(Joi)

const { store, persistor } = configureStore()
const servicesWithDispatch = bindWithDispatch(store.dispatch, services)
window.services = servicesWithDispatch

render(
  <Provider store={store}>
    {/* <PersistGate persistor={persistor}> */}
    <Routes />
    {/* </PersistGate> */}
  </Provider>,
  document.getElementById('root')
)

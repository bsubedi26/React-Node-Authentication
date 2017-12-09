import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import configureStore from 'util/store'
import Routes from 'routes'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import 'assets/styles/main.css'

render(
  <Provider store={configureStore()}>
    <Routes />
  </Provider>,
  document.getElementById('root')
)

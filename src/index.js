import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from 'util/store'
import Routes from 'routes'
import 'assets/styles/global-styles'
import 'bootstrap/dist/css/bootstrap.css'

render(
  <Provider store={configureStore()}>
    <Routes />
  </Provider>,
  document.getElementById('root')
)

import React from 'react'
import { render } from 'react-dom'
import Routes from 'routes'
import app from './util/feathers'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery.js'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'assets/styles/main.css'

window.app = app

render(<Routes />, document.getElementById('root'))

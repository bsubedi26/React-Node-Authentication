import React from 'react'
import { Home, Login, Signup, Settings } from 'containers'

import { Header } from 'components'
import { HashRouter as Router, Route } from 'react-router-dom'
import styled from 'styled-components'
import PrivateRoute from './private'

const Container = styled.div`text-align: center;`

function Routes() {
  return (
    <Router>
      <Container>
        <Header />
        <Route exact path="/" component={Home} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/signup' component={Signup} />

        <PrivateRoute path='/settings' component={Settings} />
      </Container>
    </Router>
  )
}

export default Routes

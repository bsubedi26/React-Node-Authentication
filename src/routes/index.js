import React from 'react'
import { Home, Login, Signup, Settings, Events } from 'containers'

import Navbar from 'components/Navbar'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import styled from 'styled-components'
import PrivateRoute from './private'

const Container = styled.div`text-align: center;`

const Routes = () => {
  return (
    <Router>
      <Container>
        <Navbar />
        <Route exact path='/' component={Home} />
        <Route exact path='/events' component={Events} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/signup' component={Signup} />

        <PrivateRoute path='/settings' component={Settings} />
      </Container>
    </Router>
  )
}

export default Routes

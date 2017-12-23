import React from 'react'
import { Home, Login, Signup, Settings, ForumPage, ForumDetailById } from 'containers'

import { Header } from 'components'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import styled from 'styled-components'
import PrivateRoute from './private'

const Container = styled.div`text-align: center;`

function Routes() {
  return (
    <Router>
      <Container>
        <Header />
        <Route exact path="/" component={Home} />
        <Route exact path='/forum/:name' component={ForumPage} />
        <Route exact path='/forum/:name/:id' component={ForumDetailById} />

        {/* <Route path=":forum/discussion/:discussion" component={SingleDiscussion} /> */}
        {/* <Route path=":forum/new_discussion" component={NewDiscussion} /> */}
        {/* <Route path="user/:username" component={UserProfile} /> */}

        <Route exact path='/signup' component={Signup} />

        <PrivateRoute path='/settings' component={Settings} />
      </Container>
    </Router>
  )
}

export default Routes

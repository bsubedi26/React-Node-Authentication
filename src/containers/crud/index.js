import React from 'react'
import { Route } from 'react-router-dom'
import Home from './home'
import Create from './create'
import Edit from './edit'

const CrudRoutes = () => (
  [
    <Route exact path='/crud' component={Home} key={1} />,
    <Route exact path='/crud/create' component={Create} key={2} />,
    <Route exact path='/crud/edit/:id' component={Edit} key={3} />
    // <Route exact path='/crud/:id/show' component={Create} key={4} />
    // <Route exact path='/crud/:id/delete' component={Create} key={5} />
  ]
)

export default CrudRoutes

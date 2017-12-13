import React from 'react'
import { connect } from 'react-redux'

class Home extends React.Component {

  render() {
    return (
      <div>
        <div className="jumbotron">
          <h1 className="display-3">Hello, world!</h1>
          <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
          <hr className="my-4" />
          <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
          <p className="lead">
            <a href="/auth/github"><button className="btn btn-primary btn-lg">Learn more</button></a>
          </p>
        </div>
      </div>
    )
  }
}

export default Home

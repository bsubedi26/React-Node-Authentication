import React from 'react'

class Home extends React.Component {

  render() {
    return (
      <div>
        <div className="jumbotron animated fadeInLeft">
          <h1 className="display-3">Hello, world!</h1>
          <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
          <hr className="my-4" />
          <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
          <p className="lead">
            <button className="btn btn-primary btn-lg pointer hvr-float-shadow hvr-bounce-to-right">Learn more</button>
          </p>
        </div>
      </div>
    )
  }
}

export default Home

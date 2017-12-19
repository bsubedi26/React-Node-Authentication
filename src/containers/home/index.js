import React from 'react'
import { FadeInLeft } from 'animate-css-styled-components'

class Home extends React.Component {

  handleClick = (e) => {
    e.preventDefault();
    window.fetch('/auth/github')
    .then(function(res) {
      console.log('RES ', res)
    })
    .catch(function(err) {
      console.log('ERR ', err)
    })
  }

  render() {
    return (
      <div>
        <FadeInLeft>
          <div className="jumbotron animated fadeInLeft">
            <h1 className="display-3">Hello, world!</h1>
            <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
            <hr className="my-4" />
            <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
            <p className="lead">
              <button onClick={this.handleClick} className="btn btn-primary btn-lg pointer hvr-float-shadow hvr-bounce-to-right">Learn more</button>
            </p>
          </div>
        </FadeInLeft>
      </div>
    )
  }
}

export default Home

import React from 'react'
import { FadeIn } from 'animate-css-styled-components'

class Home extends React.Component {
  handleClick = (e) => {
    e.preventDefault()
    console.log(this.props)
  }

  handleVerify = async (e) => {
    e.preventDefault()
    const r = await window.app.authenticate()
    console.log('r: ', r)
  }

  render () {
    return (
      <div>
        <FadeIn>
          <div className='jumbotron'>
            <h1 className='display-3'>Hello, world!</h1>
            <p className='lead'>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
            <hr className='my-4' />
            <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
            <p className='lead'>
              <button onClick={this.handleClick} className='btn btn-primary btn-lg pointer mr-3'>Learn more</button>
              <button onClick={this.handleVerify} className='btn-outline-primary btn btn-lg pointer'>Verify</button>
            </p>
          </div>
        </FadeIn>
      </div>
    )
  }
}

export default Home

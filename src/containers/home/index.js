import React from 'react'
import { connect } from 'react-redux'
import { actions as AuthActions } from 'reducers/auth'
/* global services */

class Home extends React.Component {
  handleClick = (e) => {
    e.preventDefault()
    console.log(this.props)
    services.comment.create({ text: 'Hello!' })
    services.comment.find()
      .then(r => console.log(r))
  }

  handleVerify = (e) => {
    e.preventDefault()
    this.props.dispatch(AuthActions.verifyJwtOAuth())
  }

  render () {
    return (
      <div>
        <div className='jumbotron animated fadeInLeft'>
          <h1 className='display-3'>Hello, world!</h1>
          <p className='lead'>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
          <hr className='my-4' />
          <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
          <p className='lead'>
            <button onClick={this.handleClick} className='btn btn-primary btn-lg pointer hvr-float-shadow hvr-bounce-to-right m-3'>Learn more</button>
            <button onClick={this.handleVerify} className='btn btn-info btn-lg pointer hvr-float-shadow hvr-bounce-to-right'>Verify</button>
          </p>
        </div>
      </div>
    )
  }
}

const mapState = state => ({
  propState: state
})

export default connect(mapState)(Home)

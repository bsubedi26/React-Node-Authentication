import React from 'react'
import FormContainer from './form'
import { actions as AuthActions } from 'reducers/auth'
import { connect } from 'react-redux'
import { Wobble, FadeIn, FadeInLeft } from 'animate-css-styled-components';

class Login extends React.Component {
  state = {
    error: false,
    errorMessage: null
  }

  handleSubmit = (formValues) => {
    const { dispatch, history } = this.props
    const credentials = { ...formValues, strategy: 'local' }
    // const credentials = { ...formValues, strategy: 'facebook' }
    
    return dispatch(AuthActions.authenticate(credentials))
    .then(res => {
      console.log('SUCCESSFUL LOGIN ', res)
      this.setState({ error: false, errorMessage: null })
      history.push('/settings/profile')
    })
    .catch(err => {
      console.log(err)
      this.setState({ error: true, errorMessage: err.message })
      return Promise.reject(err)
    })
    
  }

  renderErrorAlert = (message) => 
  (
    <div className="alert alert-danger" role="alert">
      { message }
    </div>
  )

  render() {
    return (
      <div>
        <FadeIn>
          <div className="jumbotron">
              <h1 className="display-3">Login Below!</h1>
              <p className="lead">Login to access the featured content and information.</p>
            
            { this.state.error ? this.renderErrorAlert(this.state.errorMessage) : null }
            <hr className="my-4" />
            <FadeInLeft>
              <FormContainer handleSubmit={this.handleSubmit} />
            </FadeInLeft>

            {/* <a href="http://localhost:3030/auth/github"> */}
            <a href="/auth/github">
              <button className="mt-3 btn btn-default pointer">
                Login With Github
                <i className="fa fa-github fa-lg m-2" aria-hidden="true"></i>
              </button>
            </a>
          </div>
        </FadeIn>
      </div>
   
    )
  }
}

export default connect(null)(Login)
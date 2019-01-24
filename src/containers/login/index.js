/* global app */
import React from 'react'
import FormContainer from './form'
import { FadeIn } from 'animate-css-styled-components'

class Login extends React.Component {
  state = {
    error: false,
    errorMessage: null
  }
  onSubmit = async (formValues) => {
    const credentials = { ...formValues, strategy: 'local' }
    try {
      const resp = await app.authenticate(credentials)
      console.log('Logged in: ', resp)
      app.emit('login', resp)
      return resp
    } catch (e) {
      console.error('Authentication error', e)
      return e
    }
  }

  renderErrorAlert = (message) => (
    <div className='alert alert-danger' role='alert'>
      { message }
    </div>
  )

  appAuth = async () => {
    const res = await window.app.authenticate()
    console.log('res: ', res)
  }

  render () {
    return (
      <div>
        <FadeIn>
          <div className='jumbotron'>
            <h1 className='display-3'>Login Below!</h1>
            <p className='lead'>Login to access the featured content and information.</p>

            { this.state.error ? this.renderErrorAlert(this.state.errorMessage) : null }
            <hr className='my-4' />
            <FadeIn>
              <FormContainer onSubmit={this.onSubmit} />
            </FadeIn>
            <button onClick={this.appAuth} className='mt-3 btn btn-default pointer'>
              app.authenticate()
              <i className='fa fa-github fa-lg m-2' aria-hidden='true' />
            </button>
            {/* <a href='/auth/github'>
              <button className='mt-3 btn btn-default pointer'>
                Login With Github
                <i className='fa fa-github fa-lg m-2' aria-hidden='true' />
              </button>
            </a> */}
          </div>
        </FadeIn>
      </div>

    )
  }
}

export default Login

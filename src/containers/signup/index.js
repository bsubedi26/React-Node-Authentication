/* global app */
import React from 'react'
import FormContainer from './form'
import { FadeIn } from 'animate-css-styled-components'

class Signup extends React.Component {
  state = {
    error: false,
    errorMessage: null
  }

  onSubmit = async (formValues) => {
    const { history } = this.props
    console.log('formValues: ', formValues)
    try {
      const res = await app.service('users').create(formValues)
      console.log('SUCCESSFUL SIGNUP ', res)
      this.setState({ error: false, errorMessage: null })
      return history.push('/login')
    } catch (err) {
      console.log('.catch ', err)
      this.setState({ error: true, errorMessage: err.message })
      return Promise.reject(err)
    }
  }

  renderErrorAlert = (message) => {
    return (
      <div className='alert alert-danger' role='alert'>
        { message }
      </div>
    )
  }

  render () {
    return (
      <div>
        <FadeIn>
          <div className='jumbotron'>
            <h1 className='display-3'>Signup Below!</h1>
            <p className='lead'>Join the community to access featured content and information.</p>
            { this.state.error ? this.renderErrorAlert(this.state.errorMessage) : null }
            <hr className='my-4' />
            <FadeIn>
              <FormContainer onSubmit={this.onSubmit} />
            </FadeIn>
          </div>
        </FadeIn>
      </div>
    )
  }
}

export default Signup

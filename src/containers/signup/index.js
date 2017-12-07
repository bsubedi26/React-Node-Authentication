import React from 'react'
import FormContainer from './FormContainer'
import { connect } from 'react-redux'
import { getFormValues } from 'redux-form'
import { actions as AuthActions } from 'reducers/auth'

class Signup extends React.Component {
  state = {
    error: false,
    errorMessage: null
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { dispatch, formValues, history } = this.props

    dispatch(AuthActions.signup(formValues))
    .then(res => {
      console.log('SUCCESSFUL SIGNUP ', res)
      this.setState({ error: false, errorMessage: null })
      history.push('/login')
    })
    .catch(err => {
      console.log(err)
      this.setState({ error: true, errorMessage: err.message })
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
        <div className="jumbotron">
          <h1 className="display-3">Signup Below!</h1>
          <p className="lead">Join the community to access featured content and information.</p>

          { this.state.error ? this.renderErrorAlert(this.state.errorMessage) : null }
          <hr className="my-4" />
          
          <FormContainer handleSubmit={this.handleSubmit} />
        </div>
      </div>
   
    )
  }
}

const mapState = (state) => ({
  formValues: getFormValues('signup')(state),
})

export default connect(mapState)(Signup)

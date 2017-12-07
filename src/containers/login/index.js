import React from 'react'
import FormContainer from './FormContainer'
import { getFormValues } from 'redux-form'
import { connect } from 'react-redux'
import { actions as AuthActions } from 'reducers/auth'

class Login extends React.Component {
  state = {
    error: false,
    errorMessage: null
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { dispatch, formValues, history } = this.props
    const credentials = { ...formValues, strategy: 'local' }
    
    dispatch(AuthActions.authenticate(credentials))
    .then(res => {
      console.log('SUCCESSFUL LOGIN ', res)
      this.setState({ error: false, errorMessage: null })
      history.push('/settings')
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
          <h1 className="display-3">Login Below!</h1>
          <p className="lead">Login to access the featured content and information.</p>
          { this.state.error ? this.renderErrorAlert(this.state.errorMessage) : null }
          <hr className="my-4" />
          <FormContainer handleSubmit={this.handleSubmit} />
        </div>
      </div>
   
    )
  }
}


const mapState = (state) => ({
  formValues: getFormValues('login')(state),
})

export default connect(mapState)(Login)

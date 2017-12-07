import React from 'react'
import { Field, reduxForm } from 'redux-form'

const validate = values => {
  const errors = {}

  if (!values.email) {
    errors.email = 'The email address is required.'
  }
  else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Please provide a valid email address.'
  }

  if (!values.password) {
    errors.password = 'The password field is required.'
  }
  else if (values.password.length > 15) {
    errors.password = 'The password must be 15 characters or less.'
  }

  return errors
}

const renderInputCmp = (props) => {
  const { input, label, type, meta: { touched, error, warning } } = props

    return (
      <div>
        <label>{label}</label>
        <div>
          <input className="form-control" {...input} placeholder={label} type={type} />
          {touched &&
            ((error && <span className="text-danger">{error}</span>) ||
              (warning && <span className="text-warning">{warning}</span>))}
        </div>
      </div>
    )
}

const LoginForm = props => {
  const { handleSubmit, submitting } = props
  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="form-group">
        <Field name="email" type="email" component={renderInputCmp} label="Email Address" />
      </div>
      <div className="form-group">
        <Field name="password" type="password" component={renderInputCmp} label="Password" />
      </div>

      <div>
        <button type="submit" className="btn btn-primary m-2" disabled={submitting}>
          { submitting ? <i className="p-1 fa fa-spinner fa-spin"></i> : null }
          Submit
        </button>
        {/* <button type="button" className="btn btn-danger m-2" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button> */}
      </div>
      
    </form>
  )
}

export default reduxForm({
  form: 'login', // a unique identifier for this form
  validate, // <--- validation function given to redux-form
})(LoginForm)
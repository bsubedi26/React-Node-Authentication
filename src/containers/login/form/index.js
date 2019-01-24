import React from 'react'
import { Formik } from 'formik'
import validate from './validate'
import FormFields from './fields'

export default ({ onSubmit }) => (
  <Formik
    initialValues={{ email: '', password: '' }}
    validate={validate}
    onSubmit={async (values, actions) => {
      actions.setSubmitting(true)
      await onSubmit(values)
      actions.setSubmitting(false)
    }}
    render={FormFields}
  />
)

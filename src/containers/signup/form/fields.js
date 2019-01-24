import React from 'react'

const FormFields = (props) => {
  const { values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting } = props

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className='form-group'>
        <label>Email Address</label>
        <input
          type='email'
          name='email'
          placeholder='Email Address'
          className='form-control'
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
        />
        {touched.email && errors.email && <span className='text-danger'>{errors.email}</span>}
      </div>

      <div className='form-group'>
        <label>Password</label>
        <input
          type='password'
          name='password'
          placeholder='Password'
          className='form-control'
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.password}
        />
        {touched.password && errors.password && <span className='text-danger'>{errors.password}</span>}
      </div>
      <button type='submit' className='btn btn-primary m-2' disabled={isSubmitting}>
        {isSubmitting && <i className='p-1 fa fa-spinner fa-spin' />}
        Submit
      </button>

    </form>
  )
}

export default FormFields

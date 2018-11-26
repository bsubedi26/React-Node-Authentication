import { withFormik } from 'formik'
import validate from './validate'
import FormFields from './fields'

const handleError = error => error

// Wrap our form with the using withFormik HoC
const FormContainer = withFormik({
  // Transform outer props into form values
  mapPropsToValues: props => ({ email: '', password: '' }),
  // Add a custom validation function (this can be async too!)
  validate: validate,
  // Submission handler
  handleSubmit: (values, { props, setSubmitting, setErrors }) => {
    setSubmitting(true)

    props.handleSubmit(values)
      .then(data => {
        // setSubmitting(false);
      })
      .catch(err => {
        setSubmitting(false)
        handleError(err)
      })
  }
})

export default FormContainer(FormFields)

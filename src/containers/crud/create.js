/* global app */
import React from 'react'
import Joi from 'joi-browser'
import validate from 'react-joi-validation'

var schema = Joi.object().keys({
  username: Joi.string().required(),
  password: Joi.string().min(8).required()
})

class SignupForm extends React.Component {
  render () {
    const {
      user: { username, password },
      errors, changeHandler, validateHandler
    } = this.props

    return (
      <div >
        <input type='text'
          value={username}
          onChange={changeHandler('username')}
          onBlur={validateHandler('username')}
        />

        <span className='text-danger'> { errors.username } </span>

        <input type='password'
          value={password}
          onChange={changeHandler('password')}
          onBlur={validateHandler('password')}
        />

        <span className='text-danger'> { errors.password } </span>

        <input type='Submit' value='Sign In' />
      </div>
    )
  }
}

SignupForm.defaultProps = {
  username: '',
  password: ''
}

var validationOptions = {
  joiSchema: schema,
  only: 'user'
}

const SignupFormView = validate(SignupForm, validationOptions)

class Create extends React.Component {
  state = { schema: { children: {} } }
  async componentWillMount () {
    const service = app.service(`/schema/shirts`)
    const { name, schema } = await service.find()
    console.log('schema: ', schema)
    this.setState({ schema })
    // console.log('func: ', func)
    // console.log('joj', f())
  }
  makeForm = () => {
    if (this.state.schema.type !== 'object') return

    return Object.keys(this.state.schema.children)
      .map((field, idx) => {
        console.log('field: ', field)
        const type = this.state.schema.children[field].type
        console.log('type: ', type)
        return <div key={idx}>done</div>
      })
  }
  render () {
    return (
      <div>
        <div className='jumbotron animated fadeInLeft'>
          <p className='lead'>Create.</p>
          <hr className='my-4' />
          {/* <SignupFormView /> */}
          {this.makeForm()}
        </div>
      </div>
    )
  }
}
export default Create

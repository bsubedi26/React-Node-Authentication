/* global app */
import React, { Component } from 'react'

const resetState = () => ({
  title: '',
  description: '',
  date: ''
})
class AddEvent extends Component {
  constructor (p) {
    super(p)
    this.state = resetState()
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = async (event) => {
    event.preventDefault()
    const user = await window.app.authenticate()
    const payload = { ...this.state, created_by: user.email, creator_id: user.id }
    await app.service('events').create(payload)
    this.setState(resetState())
  }

  render () {
    return (
      <div>
        <div className='jumbotron'>
          <form onSubmit={this.handleSubmit}>
            <div className='form-group'>
              <label>Title:</label>
              <input
                type='text'
                className='form-control'
                placeholder='Enter event title'
                name='title'
                value={this.state.title}
                onChange={this.handleChange}
              />
            </div>
            <div className='form-group'>
              <label>Description:</label>
              <input
                type='text'
                className='form-control'
                placeholder='Enter event description'
                name='description'
                value={this.state.description}
                onChange={this.handleChange}
              />
            </div>
            <div className='form-group'>
              <label>Event Date:</label>
              <input
                type='text'
                className='form-control'
                placeholder='Enter date in the format mm.dd.yyyy'
                name='date'
                value={this.state.date}
                onChange={this.handleChange}
              />
            </div>
            <button type='submit' className='btn btn-primary'>Add Event</button>
          </form>
        </div>
      </div>
    )
  }
}

export default AddEvent

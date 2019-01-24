import React from 'react'
import EventsList from './List'
import EventsAdd from './Add'
// import UserList from './UserList'

class Events extends React.Component {
  handleClick = (e) => {
    e.preventDefault()
    console.log(this.props)
  }

  render () {
    return (
      <div className='container'>
        {/* <UserList /> */}
        <EventsAdd />
        <EventsList />
      </div>
    )
  }
}

export default Events

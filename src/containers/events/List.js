/* global app */
import React, { Component } from 'react'

const style = {
  title: link => ({
    border: link.checked ? '2px solid green' : '2px solid red'
  })
}

class List extends Component {
  state = {
    items: []
  }
  async componentDidMount () {
    const res = await app.service('events').find()
    console.log('[events].find: ', res)
    this.setState({ items: res.data })
    this.eventListeners('init')
  }
  eventListeners = (type) => {
    const name = 'events'
    if (type === 'init') {
      this.onCreated = data => {
        this.setState({
          items: [...this.state.items, data]
        })
      }
      this.onPatched = patchedItem => {
        const updatePatched = item => item.id === patchedItem.id ? patchedItem : item
        this.setState(prevState => ({
          items: prevState.items.map(updatePatched)
        }))
      }
      this.onRemoved = removedItem => {
        const updateRemoved = item => item.id !== removedItem.id
        this.setState(prevState => ({
          items: prevState.items.filter(updateRemoved)
        }))
      }

      app.service(name).on('created', this.onCreated)
      app.service(name).on('patched', this.onPatched)
      app.service(name).on('removed', this.onRemoved)
    }

    if (type === 'remove') {
      app.service(name).removeListener('created', this.onCreated)
      app.service(name).removeListener('patched', this.onPatched)
      app.service(name).removeListener('removed', this.onRemoved)
    }
  }
  componentWillUnmount () {
    this.eventListeners('remove')
  }

  // event handlers
  handleDelete = (id) => {
    app.service('events').remove(id)
  }
  handleUpdate = item => {
    app.service('events').patch(item.id, { checked: !item.checked })
  }
  // mappers
  makeItem (item) {
    return (
      <li key={item.id} className='d-flex flex-1-childs'>
        <a href={item.url} style={style.title(item)}>{item.created_by}</a>
        <a href={item.url} style={style.title(item)}>{item.title}</a>
        <button onClick={() => this.handleUpdate(item)}>Update</button>
        <button onClick={() => this.handleDelete(item.id)}>Delete</button>
      </li>
    )
  }
  render () {
    const items = this.state.items.map(item => this.makeItem(item))
    const headers = () => (
      <li className='d-flex flex-1-childs mb-2'>
        <h4>User</h4>
        <h4>Title</h4>
        <h4>Action</h4>
        <h4>Action</h4>
      </li>
    )
    return (
      <div>
        <h2 className='my-3'>Events List:</h2>
        <ul>
          { headers() }
          { items }
        </ul>
      </div>
    )
  }
}

export default List

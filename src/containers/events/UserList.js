/* global app */
import React, { Component } from 'react'

const style = {
  title: link => ({
    // border: link.checked ? '2px solid green' : '2px solid red'
  })
}

class List extends Component {
  state = {
    items: []
  }
  async componentDidMount () {
    const res = await app.service('users').find({
      query: {
        online: true
      }
    })
    console.log('res: ', res)
    this.setState({ items: res.data })
    this.initEventListeners()
  }
  initEventListeners = () => {
    const name = 'users'
    this.onPatched = patchedItem => {
      console.log('CALLING USER patched: ', patchedItem)
      if (!patchedItem.online) {
        this.setState({
          items: this.state.items.filter(item => item.id !== patchedItem.id)
        })
      }
      const findIn = (arr, id) => arr.find(o => o.id === id)
      if (patchedItem.online && !findIn(this.state.items, patchedItem.id)) {
        this.setState({
          items: [...this.state.items, patchedItem]
        })
      }
    }
    app.service(name).on('patched', this.onPatched)
  }
  removeEventListeners = () => {
    app.service('users').removeListener('patched', this.onPatched)
  }
  componentWillUnmount () {
    this.removeEventListeners()
  }

  handleDelete = (id) => {
    app.service('events').remove(id)
  }
  handleUpdate = item => {
    app.service('events').patch(item.id, { checked: !item.checked })
  }
  makeItem (item) {
    console.log('item: ', item)
    return (
      <li key={item.id} className='d-flex flex-1-childs'>
        <a href={item.url}>{item.id}</a>
        <a href={item.url} style={style.title(item)}>{item.email}</a>
      </li>
    )
  }
  render () {
    const items = this.state.items.map(item => this.makeItem(item))

    return (
      <div>
        <h2 className='mb-3'>Online Users:</h2>
        <ul>{ items }</ul>
      </div>
    )
  }
}

export default List

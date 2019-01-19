/* global services */
import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class CrudHome extends React.Component {
  handleClick = (e) => {
    e.preventDefault()
    console.log(this.props)
    console.log('services: ', services)
    // services.comment.create({ text: 'Hello!' })
    // services.comment.find()
    //   .then(r => console.log(r))
  }

  async componentDidMount () {
    await services.shirts.find()
  }

  handleVerify = (e) => {
    e.preventDefault()
    // this.props.dispatch(AuthActions.verifyJwtOAuth())
  }
  renderList = data => {
    if (!data.length) return
    const headers = Object.keys(data[0])
    return (
      <Fragment>
        <tr>
          {headers.map(h => <th key={h}>{h}</th>)}
        </tr>
        {
          data.map((o, idx) => (
            <tr key={o.id}>
              {headers.map(header => header === 'id'
                ? <td key={header}><Link to={`/crud/edit/${o.id}`}>{o[header]}</Link></td>
                : <td key={header}>{o[header]}</td>)}
            </tr>
          ))
        }
      </Fragment>
    )
  }
  render () {
    return (
      <div>
        <div className='jumbotron animated fadeInLeft'>
          <p className='lead'>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
          <hr className='my-4' />
          <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
          <p className='lead'>
            <button onClick={this.handleClick} className='btn btn-primary btn-lg pointer'>Log</button>
            <Link to='/crud/create'><button className='btn btn-primary btn-lg pointer'>Create new</button></Link>
          </p>
        </div>

        <div>
          <h2 className='mb-4'>Shirts</h2>
          <table style={{ width: '100%' }}>
            {this.renderList(this.props.shirts.data)}
          </table>
        </div>
      </div>
    )
  }
}

const mapState = state => ({
  propState: state,
  shirts: state.shirts.queryResult
})

export default connect(mapState)(CrudHome)

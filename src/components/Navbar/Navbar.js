import React from 'react'
import { Link, withRouter } from 'react-router-dom'

const routeLinks = [
  { name: 'Home', path: '/' },
  { name: 'Login', path: '/login' },
  { name: 'Signup', path: '/signup' },
  { name: 'Events', path: '/events' },
  { name: 'Account Settings', path: '/settings/profile' }
]
const HamburgerMenu = () => (
  <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
    <span className='navbar-toggler-icon' />
  </button>
)

class NavbarCmp extends React.Component {
  state = {
    isOpen: false,
    isLoggedIn: false,
    user: {},
    authLinks: [],
    guestLinks: routeLinks
  };
  componentDidMount () {
    this.checkIfLoggedIn()
    // console.log('componentDisdMount: ', window.app)
    window.app.on('login', user => {
      // console.log('onLogin: ', user)
      this.setState({ isLoggedIn: true, user })
    })
    window.app.on('logout', async data => {
      // console.log('onLogout: ', data)
      this.setState({ isLoggedIn: false, user: {} })
    })
  }
  checkIfLoggedIn = async () => {
    try {
      const user = await window.app.authenticate()
      if (user) {
        this.setState({ isLoggedIn: true, user })
      }
    } catch (err) {}
  }
  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  handleLogout = async (e) => {
    e.preventDefault()
    // const { history } = this.props
    await window.app.logout()
    // history.push('/')
  }

  renderLoggedInDropDown = () => {
    return (
      <ul className='navbar-nav mr-auto'>
        <button onClick={this.handleLogout} className='dropdown-item'>Sign out</button>
        <li className='nav-item dropdown pointer'>
          { this.state.user.email }
        </li>

        {/* <li className='nav-item dropdown pointer'>
          <button className='nav-link dropdown-toggle' id='navbarDropdown' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'><i className='fa fa-user-circle' /></button>
          <div className='dropdown-menu' aria-labelledby='navbarDropdown'>
            <Link to='/settings/profile' className='dropdown-item'>Profile</Link>
            <Link to='/settings' className='dropdown-item'>Settings</Link>
            <div className='dropdown-divider' />
            <button onClick={this.handleLogout} className='dropdown-item'>Sign out</button>
          </div>
        </li> */}
      </ul>
    )
  }

  renderOAuthLogin = () => {
    return (
      <ul className='navbar-nav mr-auto'>
        <li className='nav-item dropdown pointer'>
          <button className='nav-link dropdown-toggle' id='navbarDropdown' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>
            <img width='16' height='16' src={this.props.auth.oAuth.github.profile.photos[0].value} alt='github avatar' />
          </button>
          <div className='dropdown-menu' aria-labelledby='navbarDropdown'>
            <Link to='/settings/profile' className='dropdown-item'>Profile</Link>
            <Link to='/settings' className='dropdown-item'>Settings</Link>
            <div className='dropdown-divider' />
            <button onClick={this.handleLogout} className='dropdown-item'>Sign out</button>
          </div>
        </li>
      </ul>
    )
  }

  render () {
    const renderLink = (link) => (
      <li className='nav-item mx-2' key={link.name}>
        <Link className='nav-link' to={link.path}>{link.name}</Link>
      </li>
    )
    return (
      <nav className='navbar navbar-expand-md navbar-light'>
        <Link to='/' className='navbar-brand'>Auth</Link>
        <HamburgerMenu />
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav mr-auto'>
            {this.state.guestLinks.map(renderLink)}
          </ul>

          <form className='form-inline mr-5'>
            {/* <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" /> */}
            { this.state.isLoggedIn && this.renderLoggedInDropDown() }
          </form>
        </div>
      </nav>
    )
  }
}

export default withRouter(NavbarCmp)

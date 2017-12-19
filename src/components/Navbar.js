import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { actions as AuthActions } from 'reducers/auth'
import { connect } from 'react-redux'

class NavbarCmp extends React.Component {

  state = {
    isOpen: false,
    authLinks: [],
    guestLinks: [
      { name: 'Home', path: '/' },
      { name: 'Login', path: '/login' },
      { name: 'Signup', path: '/signup' },
      { name: 'Account Settings', path: '/settings/profile' },
    ],
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  handleLogout = async (e) => {
    e.preventDefault()
    const { dispatch, history } = this.props
    await dispatch(AuthActions.logout())
    history.push('/')
  }
  renderLoggedInDropDown = () => {
    return (
      <ul className="navbar-nav mr-auto">
        <li className="nav-item dropdown pointer">
          <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i className="fa fa-user-circle"></i>
          </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <a className="dropdown-item">Profile</a>
            <a className="dropdown-item">Settings</a>
            <div className="dropdown-divider"></div>
            <a onClick={this.handleLogout} className="dropdown-item">Sign out</a>
          </div>
        </li>
      </ul>
    )
  }

  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-light">
        <Link to="/" className="navbar-brand">Auth</Link>
        {/* HAMBURGER MENU TOGGLER FOR MOBILE */}
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            {/* <li className="nav-item active">
              <a className="nav-link">Home <span className="sr-only">(current)</span></a>
            </li>
             */}
            { this.state.guestLinks.map((link) => 
              (
                <li className="nav-item mx-2" key={link.name}>
                  <Link className="nav-link" to={link.path}>{link.name}</Link>
                </li>    
              )
            )}
      
          </ul>

          <form className="form-inline mr-5">
            {/* <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" /> */}
            {
              this.props.userId ?
                this.renderLoggedInDropDown()
                // <button onClick={this.handleLogout} className="btn btn-outline-success my-2 my-sm-0">Logout</button>
                : null
            }
          </form>
        </div>
      </nav>
    );
  }
}

const mapState = state => ({
  userId: state.auth.id
})

export default withRouter(connect(mapState)(NavbarCmp))

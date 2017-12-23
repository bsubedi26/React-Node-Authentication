import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { actions as AuthActions } from 'reducers/auth'
import { connect } from 'react-redux'
import styled from 'styled-components'


const NavLink = styled.li`
  background-color: ${ prop =>  prop.activeTab ? 'beige' : '' };
`

class NavbarCmp extends React.Component {

  state = {
    isOpen: false,
    activeTab: this.props.location.pathname,
    guestLinks: [
      { name: 'Home', path: '/' },
      { name: 'React', path: '/forum/react' },
      { name: 'Redux', path: '/forum/redux' },
      { name: 'NodeJS', path: '/forum/nodejs' },
    ],
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  

  setActive(path) {
    this.setState({ activeTab: path })
  }

  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-light">
        <Link to="/" className="navbar-brand">ReForum</Link>
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
                <NavLink activeTab={this.state.activeTab === link.path} onClick={this.setActive.bind(this, link.path)} className="nav-item mx-2" key={link.name}>
                  <Link className="nav-link" to={link.path}>{link.name}</Link>
                </NavLink>    
              )
            )}
      
          </ul>

          <form className="form-inline mr-5">
            {/* <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" /> */}

          </form>
        </div>
      </nav>
    );
  }
}

const mapState = state => ({
  auth: state.auth
})

export default withRouter(connect(mapState)(NavbarCmp))

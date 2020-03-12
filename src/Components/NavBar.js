import React from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'

import Menu from './Menu'

import axios from 'axios'

class NavBar extends React.Component {
  constructor() {
    super()
    this.state = {
      navMobileOpen: false,
    }
  }
  componentDidUpdate(prevProps) {
    this.props.location.pathname !== prevProps.location.pathname
      ? this.setState({ navMobileOpen: false })
      : ''
  }

  render() {
    return (
      <nav className="navbar is-warning">
        <div className="container">
          <div className="navbar-brand">
            <Link className="navbar-item" to="/" id="logo">
              JJDb
            </Link>
            <a
              role="button"
              className={`navbar-burger burger ${
                this.state.navMobileOpen ? 'is-active' : ''
              }`}
              aria-label="menu"
              aria-expanded="false"
              data-target="navbarBasicExample"
              onClick={() =>
                this.setState({ navMobileOpen: !this.state.navMobileOpen })
              }
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>
          <div
            className={`navbar-menu ${
              this.state.navMobileOpen ? 'is-active' : ''
            }`}
          >
            <div className="navbar-end">
              <div className="navbar-item">
                <Menu />
              </div>
              <div className="navbar-item">
                <Link to="/CompareMovie">Compare</Link>
              </div>
              <div className="navbar-item">
                <Link to="/SearchMovie">Search</Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}
export default withRouter(NavBar)

import React from 'react'
const Menu = () => {
  return (
    <div className="dropdown is-hoverable">
      <div className="dropdown-trigger">
        <button
          className="button"
          aria-haspopup="true"
          aria-controls="dropdown-menu3"
        >
          <span>Menu</span>
          <span className="icon is-small">
            <i className="fas fa-angle-down"></i>
          </span>
        </button>
      </div>
      <div className="dropdown-menu" id="dropdown-menu3" role="menu">
        <div className="dropdown-content">
          <a href="#" className="dropdown-item">
            Latest Movies
          </a>
          <a href="#" className="dropdown-item">
            Now Playing
          </a>
          <a href="#" className="dropdown-item">
            Popular
          </a>
          <a href="#" className="dropdown-item">
            Top Rated
          </a>
          <a href="#" className="dropdown-item">
            Upcoming
          </a>
        </div>
      </div>
    </div>
  )
}
export default Menu

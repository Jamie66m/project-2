import React from 'react'
import { Link } from 'react-router-dom'
const SearchForm2 = () => {
  return (
    <div className="SearchForm2">
      <div className="container">
        <div className="field has-addons">
          <div className="control is-expanded">
            <input
              className="input is-normal"
              type="search"
              placeholder="search movie..."
            />
          </div>
          <div className="control">
            <Link to="/" className="button is-info is-normal" id="searchbutton">
              Search
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchForm2

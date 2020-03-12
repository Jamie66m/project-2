import React from 'react'
import { Link } from 'react-router-dom'

const SearchForm = ({ query, onChange }) => {
  return (
    <div className="SearchForm ">
      <div className="container is-centered">
        <div className="field has-addons">
          <div className="control is-expanded">
            <input
              className="input is-normal"
              type="search"
              placeholder="search movie..."
              value={query}
              onChange={onChange}
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
export default SearchForm

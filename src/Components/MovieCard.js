import React from 'react'

const MovieCard = ({ title, release_date, poster_path }) => {
  return (
    <div className="column is-one-quarter-desktop is-one-third-tablet is-half-mobile">
      <div className="card">
        <div className="card-header">
          <h4 className="card-title">{title}</h4>
        </div>
        <div className="card-image">
          <figure className="image">
            <img
              src={`https://image.tmdb.org/t/p/w185/${poster_path}`}
              alt={title}
            />
          </figure>
          <div className="card-content">
            <h5 className="title">{release_date}</h5>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieCard

import React from 'react'
import axios from 'axios'

class LatestMovies extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      movies: []
    }
  }

  componentDidMount() {
    axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=3f28c5c611a8e649594298eef308b64c&language=en-US')
      .then(res => this.setState({ movies: res.data }))
      .catch(error => console.error(error))
  }

  render() {
    if (!this.state.movies) {
      return <h1>Movies not ready...</h1>
    }
    return <section className="section">
      <div className="container">
        <div className="columns is-multiline is-mobile">
          {this.state.movies.map(movie => {
            return <div key={movie.results.id} className="column is-one-quarter-desktop is-one-third-table is-one-half-mobile">
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title">{movie.results.title}</h4>
                </div>
              </div>
              <div className="card-content">
                <p>{movie.results.overview}</p>
              </div>
            </div>
          })}
        </div>
      </div>
    </section>
  }

}

export default LatestMovies
import React from 'react'
import axios from 'axios'
// import ShowModal from './MovieModal'
import SearchForm from './SearchForm'
import MovieCard from './MovieCard'
// import {Link} from 'react-router-dom'

class DisplayMovies extends React.Component {
  constructor() {
    super()
    this.state = {
      movies: [],
      filteredMovies: [],
      query: '',
    }
  }

  // componentDidMount() {
  // DOING EXACTLY THE SAME AS ABOVE BUT USING AXIOS

  fetchAxios() {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=77ec028641c2e3e8a7aeefbf47a24816&language=en-US&query=${this.state.query}&page=1`,
      )
      .then(response => {
        console.log(response.data)
        // this.setState({
        //   movies: response.data.results,
        //   filteredMovies: response.data.results,
        // })
      })
      .catch(error => console.error(error))
  }

  filterMovies(event) {
    const searchQuery = event.target.value
    const filteredMovies = this.state.movies.filter(movie => {
      const regex = new RegExp(searchQuery, 'i')
      return movie.title.match(regex)
    })
    this.setState({
      query: searchQuery,
      filteredMovies,
    })
    console.log(this.state.query)
  }

  render() {
    return (
      <>
        <section className="MoviesIndex">
          <SearchForm
            query={this.state.query}
            onChange={() => this.filterMovies(event)}
            onSubmit={() => this.fetchAxios()}
          />
          <div className="section">
            <div className="container">
              <div className="columns is-multiline is-mobile">
                {this.state.filteredMovies.map((movie, index) => {
                  return <MovieCard key={index} {...movie} />
                })}
              </div>
            </div>
          </div>
        </section>
      </>
    )
  }
}

export default DisplayMovies

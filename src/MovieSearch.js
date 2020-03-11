import React from 'react'
import { Link } from 'react-router-dom'

import axios from 'axios'

class MovieSearch extends React.Component {
  constructor() {
    super()
    this.state = {
      data: {
        movies: [],
      },
    }
  }
  componentDidMount() {
    axios
      .get({
        url: `https://movie-database-imdb-alternative.p.rapidapi.com/?page&1r=json&s=ant`,
        headers: {
          'content-type': 'application/json',
          'x-rapidapi-host': 'movie-database-imdb-alternative.p.rapidapi.com',
          'x-rapidapi-key':
            '3ab72deec2msh1a38cc127a929b8p18fd0bjsn1a104e907491',
        },
      })
      .then(resp => this.setState({ movies: resp }))
      .catch(err => console.error(err))
  }

  render() {
    return <ul></ul>
  }
}

export default MovieSearch

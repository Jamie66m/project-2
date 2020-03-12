import React from 'react'
import axios from 'axios'
// import {Link} from 'react-router-dom'

// import slick from 'slick-carousel'

class DisplayMovies extends React.Component {
  constructor() {
    super()
    this.state = {
      movie1: '',
      movie2: '',
      movie3: '',
      movie4: '',
      movie5: '',
      movie6: '',
      movie7: '',
      movie8: '',
      movie9: '',
      movie10: '',
    }
  }
  componentDidMount() {
    axios
      .get('https://movie-database-imdb-alternative.p.rapidapi.com/', {
        headers: {
          'content-type': 'octet/stream',
          'x-rapidapi-host': 'movie-database-imdb-alternative.p.rapidapi.com',
          'x-rapidapi-key':
            '3ab72deec2msh1a38cc127a929b8p18fd0bjsn1a104e907491',
        },
        params: {
          s: 'shazam',
        },
      })
      .then(resp => {
        this.setState({
          movie1: resp.data.Search[0],
          movie2: resp.data.Search[1],
          movie3: resp.data.Search[2],
          movie4: resp.data.Search[3],
          movie5: resp.data.Search[4],
          movie6: resp.data.Search[5],
          movie7: resp.data.Search[6],
          movie8: resp.data.Search[7],
          movie9: resp.data.Search[8],
          movie10: resp.data.Search[9],
        })
        // console.log(resp)
        console.log(resp.data.Search)
      })
      .catch(err => console.error(err))
  }
  render() {
    const movie1 = this.state.movie1
    const movie2 = this.state.movie2
    const movie3 = this.state.movie3
    const movie4 = this.state.movie4
    const movie5 = this.state.movie5
    const movie6 = this.state.movie6
    const movie7 = this.state.movie7
    const movie8 = this.state.movie8
    const movie9 = this.state.movie9
    const movie10 = this.state.movie10

    return (
      <section>
        <ul>
          <li>{movie1.Title}</li>
          <li>{movie2.Title}</li>
          <li>{movie3.Title}</li>
          <li>{movie4.Title}</li>
          <li>{movie5.Title}</li>
          <li>{movie6.Title}</li>
          <li>{movie7.Title}</li>
          <li>{movie8.Title}</li>
          <li>{movie9.Title}</li>
          <li>{movie10.Title}</li>
        </ul>
      </section>
    )
  }
}
export default DisplayMovies

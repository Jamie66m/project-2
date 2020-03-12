import React from 'react'
import axios from 'axios'
// import {Link} from 'react-router-dom'

// import slick from 'slick-carousel'

class SlickCarousel extends React.Component {
  constructor() {
    super()
    this.state = {
      slickPoster1: [],
      slickPoster2: '',
      // slickPoster3: '',
      // slickPoster4: '',
      // slickPoster5: '',
      // slickPoster6: '',
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
          s: 'step brothers',
        },
      })
      .then(resp => {
        this.setState({
          slickPoster1: resp.data.Search[0].Poster,
        })
        // console.log(resp)
        console.log(resp.data.Search[0].Poster)
      })
      .catch(err => console.error(err))
  }
  // componentDidMount() {
  //   axios
  //     .get('https://movie-database-imdb-alternative.p.rapidapi.com/', {
  //       headers: {
  //         'content-type': 'octet/stream',
  //         'x-rapidapi-host': 'movie-database-imdb-alternative.p.rapidapi.com',
  //         'x-rapidapi-key':
  //           '3ab72deec2msh1a38cc127a929b8p18fd0bjsn1a104e907491',
  //       },
  //       params: {
  //         s: 'Avengers',
  //       },
  //     })
  //     .then(resp => {
  //       this.setState({
  //         slickPoster2: resp.data.Search[0].Poster,
  //       })
  //       // console.log(resp)
  //       console.log(resp.data.Search[0].Poster)
  //     })
  //     .catch(err => console.error(err))
  // }

  render() {
    // const movies = this.state.movies
    const poster1 = this.state.slickPoster1
    const poster2 = this.state.slickPoster2

    return (
      <section>
        <h1>hey</h1>
        <figure>
          <img src={poster1} alt="A piece of art" />
        </figure>
        <figure>
          <img src={poster2} alt="A piece of art" />
        </figure>
        {/* <figure>
          <img src={poster3} alt="A piece of art" />
        </figure>
        <figure>
          <img src={poster4} alt="A piece of art" />
        </figure> */}
      </section>
    )
  }
}
export default SlickCarousel

//step brothers
//avengers
//inception
//sonic the hedgehog
//emma lkb
//shazam

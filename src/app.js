import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './styles/style.scss'
// import bulma from 'bulma'
//pages
// import MovieSearch from './MovieSearch'
// import SlickCarousel from './Components/SlickCarousel'
import DisplayMovies from './Components/DisplayMovies'

const App = () => (
  <BrowserRouter>
    <Switch>
      {/* <Route path="/" component={MovieSearch} /> */}
      {/* <Route path="/" component={SlickCarousel} /> */}
      <Route path="/" component={DisplayMovies} />
    </Switch>
  </BrowserRouter>
)

ReactDOM.render(<App />, document.getElementById('root'))

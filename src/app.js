import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './styles/style.scss'

import axios from 'axios'
import MovieSearch from './MovieSearch'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={MovieSearch} />
    </Switch>
  </BrowserRouter>
)

ReactDOM.render(<App />, document.getElementById('root'))

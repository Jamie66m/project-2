import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './styles/style.scss'
import 'bulma'

import Home from './Components/Home'
import NavBar from './Components/NavBar'
import CompareMovie from './Components/CompareMovie'
import SearchMovie from './Components/SearchMovie'

const App = () => (
  <BrowserRouter>
    <NavBar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/CompareMovie" component={CompareMovie} />
      <Route path="/SearchMovie" component={SearchMovie}></Route>
    </Switch>
  </BrowserRouter>
)
ReactDOM.render(<App />, document.getElementById('root'))

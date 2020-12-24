import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/Home';
import NotFound from './components/NotFound';
import ImageSearch from './components/ImageSearch'
import './sass/main.scss'

function App() {
  
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/ImageSearch" component={ImageSearch} />
        {/* <Route exact path="/search" component={result} /> */}
        <Route component={NotFound} />
      </Switch>
    </Router>    
  )
}
export default App;

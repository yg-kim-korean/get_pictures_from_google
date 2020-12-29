import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomePage from './containers/HomePage';
import NotFound from './containers/NotFound';
import SearchPage from './containers/SearchPage';
import ImageSearchPage from './containers/ImageSearchPage';
import './sass/main.scss'

function App() {
  
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/image" component={ImageSearchPage} />
        <Route exact path="/searchnews" component={SearchPage} />
        <Route component={NotFound} />
      </Switch>
    </Router>    
  )
}
export default App;

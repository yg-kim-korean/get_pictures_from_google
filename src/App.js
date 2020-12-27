import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/Home';
import NotFound from './components/NotFound';
import SearchPage from './components/SearchPage';
import ImageSearchPage from './components/ImageSearchPage';
import './sass/main.scss'

function App() {
  
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/image" component={ImageSearchPage} />
        <Route exact path="/search" component={SearchPage} />
        <Route component={NotFound} />
      </Switch>
    </Router>    
  )
}
export default App;

import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomePage from './containers/HomePage';
import NotFound from './containers/NotFound';
import SearchPage from './containers/SearchPage';
import ImageSearchPage from './containers/ImageSearchPage';
import ImageSearchPageFromAxios from './containers/ImageSearchPageFromAxios';
import './sass/main.scss'

function App() {
  
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/imagefromnaverapi" component={ImageSearchPage} />
        <Route exact path="/searchnews" component={SearchPage} />
        <Route exact path="/imagefromaxios" component={ImageSearchPageFromAxios} />
        <Route component={NotFound} />
      </Switch>
    </Router>    
  )
}
export default App;

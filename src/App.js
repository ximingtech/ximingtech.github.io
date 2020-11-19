import React from 'react';
import {Home,Resume,Contact,Portfolio} from './pages';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import NavBar from './module/views/AppBarV2'
function App() {
  return (
    // <Router>
    <div>
      {/* <NavBar/>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/home' component={Home} />
        <Route path='/resume' component={Resume} />
        <Route path='/contact' component={Contact} />
        <Route path='/portfolio' component={Portfolio} />
      </Switch> */}
        <div id="home">
          <Home/>
        </div>
        <div id="resume">
          <Resume/>
        </div>
        <div id="portfolio"> 
          <Portfolio/>
        </div>
        <div id="contact"> 
          <Contact/>
        </div>
    </div>
    // </Router>
  );
}

export default App;

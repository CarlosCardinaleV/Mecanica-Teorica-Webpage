import React from 'react';
import './App.css';
import Nav from './Nav';
import MainPage from './MainPage.js';
import Problema1Lg from './Problemas/Problema1Lg.js';
import Problema2Lg from './Problemas/Problema2Lg.js';
import Problema1H from './Problemas/Problema1H.js';
import Problema2H from './Problemas/Problema2H.js';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={MainPage} />
          <Route path="/Problema_1_Hamilton" component={Problema1H} />
          <Route path="/Problema_2_Hamilton" component={Problema2H} />
          <Route path="/Problema_1_Lagrangiano" component={Problema1Lg} />
          <Route path="/Problema_2_Lagrangiano" component={Problema2Lg} />
        </Switch>
      </div>
    </Router>
  );  
}

export default App;
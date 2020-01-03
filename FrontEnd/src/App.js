import React, { Component } from 'react';

import { HashRouter as Router, Route,Switch ,Link, NavLink } from 'react-router-dom';
import axios from 'axios';
import Switcher from './components/switcher';
import MainPage from './components/mainPage';
import './components/sign.css';
import CheckStudent from './components/checkStudent';




class App extends Component {
 /*
        <div>
          
        
        </div>
       https://data.police.uk/api/forces
       <div>
           <CheckStudent/>
         </div>
          
        */
  render() {
    
    return (
      <Router basename="/schoolPlanet">        
        <div> 
          <Route exact path="/"  component={Switcher}></Route>
          <Route path="/home" component={MainPage}></Route>
          <Route exact path="/hello" component={CheckStudent}></Route>
        </div>    
      </Router>
    );
  }
}

export default App;



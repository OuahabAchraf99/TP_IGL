import React, { Component } from 'react';
import SignInForm from './signInForm';

import './sign.css';

class Switcher extends Component {
  render() {
    return (
        <div className="switcherApp">
          <div className="AppAside">
          <div className="AppForm">
              <div className="FormTitle">
                  <h1 to="/sign-in" activeClassName="FormTitleLink--Active" className="FormTitleLink">Sign In</h1> 
              </div>
              <SignInForm/>          
          </div>
          </div>
        </div>
        
    );
  }
}

export default Switcher;

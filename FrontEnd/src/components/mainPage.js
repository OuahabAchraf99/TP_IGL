import React, { Component } from 'react';
import { HashRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import Header from './header';
import Main from './main';
import './sign.css';
import SignUpForm from './signUpForm';
import AjouterDocument from './ajouterDocument';

class MainPage extends Component {
  render() {
    return (
      
        <div className="MainPage">
            <Header/>
            <SignUpForm/>
            <AjouterDocument/>
            
            
        </div>
    );
  }
}

export default MainPage;

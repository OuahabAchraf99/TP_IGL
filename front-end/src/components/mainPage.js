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
            <div className="problemnav"/>
            <Route exact path="/home" component={Main}/>
            <Route exact path="/home/ajouterEtudiant" component={SignUpForm}/>
            <Route exact path="/home/ajouterDocument" component={AjouterDocument}/>
        </div>
    );
  }
}

export default MainPage;

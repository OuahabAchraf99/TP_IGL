import React, { Component } from 'react';

import { HashRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import Form from "./form";
import Axios from 'axios';

class Main extends Component {

  state={
    persons:[],
  }

  

  render() {
    return (
      <main>
       
     
        

        <div className="servicePartie">
            <div className="services">
                <div className="service-one">
                <p className="service-icon"><i className="far fa-calendar-alt"></i></p>
                <p className="service-title"><b>Ajouer Document</b></p>
                <p>ici vous pouvez consulter vos emploi du temps, et tout les documents envoyer par l administration. </p>
                </div>
                
                  <div className="service-two">
                    <p className="service-icon"><i className="fas fa-crop"></i></p>
                    <p className="service-title"><b>Ajouter Etudiant</b></p>
                    <p>ici vous pouvez poser vos question et repondre au question de vos camarades.</p>
                  </div>
                
            </div>
          
        </div>
    
      </main>
      
    );
  }
}

export default Main;

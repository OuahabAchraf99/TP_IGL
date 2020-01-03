import React, { Component } from 'react';
import SignInForm from './signInForm';
import Axios from 'axios';

import './sign.css';



class CheckStudent extends Component {

    state={
        persons:[],
    };
  componentDidMount(){
    Axios.get('http://localhost:8000/Etudiants').then(res=>{

    console.log(res);
        this.setState({persons:res.data});
        
    });
  }

  render() {
    return (
        <div className="CheckStudent">
          <table>
                    <tr>
                      <th>id</th>
                      <th>name</th>
                      <th>username</th>
                      <th>email</th>
                      <th>address.street</th>
                      <th>phone</th>
                      <th>website</th>
                      <th>company.name</th>
                    </tr>
                {this.state.persons.map(person=>
                    <tr>
                        
                      <th>{person.id}</th>
                      <th>{person.Nom}</th>
                      <th>{person.Prenom}</th>
                      <th>{person.Datenaissance}</th>
                      <th>{person.Lieunaissance}</th>
                      <th>{person.Adress}</th>
                      <th>{person.Numtelephone}</th>
                      <th>{person.Matricule}</th>
                    </tr>
                )}
          </table>
        </div>
        
    );
  }
}

export default CheckStudent;

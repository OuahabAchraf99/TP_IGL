import React, { Component } from 'react';
import SignInForm from './signInForm';
import Axios from 'axios';

import './sign.css';



class CheckStudent extends Component {

    state={
        persons:[],
    };
  componentDidMount(){
    Axios.get('http://jsonplaceholder.typicode.com/users').then(res=>{

    console.log('no problem here');
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
                      <th>{person.name}</th>
                      <th>{person.username}</th>
                      <th>{person.email}</th>
                      <th>{person.address.street}</th>
                      <th>{person.phone}</th>
                      <th>{person.website}</th>
                      <th>{person.company.name}</th>
                    </tr>
                )}
          </table>
        </div>
        
    );
  }
}

export default CheckStudent;

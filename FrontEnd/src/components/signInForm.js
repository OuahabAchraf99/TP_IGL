import React, { Component } from 'react';
import { Link , Redirect} from 'react-router-dom';
import "./sign.css";
import Axios from 'axios';
import { link } from 'fs';

 var incorectVisibility;

class SignInForm extends Component {
    constructor() {
        super();

        this.state = {
            email: '',
            password: '',
        };

        incorectVisibility = 'hidden';
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        let target = e.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;

        this.setState({
          [name]: value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
    }

    render() {
        return (
        <div className="SignInForm">
            <form className="FormFields" onSubmit={this.handleSubmit}>
            <table>
                <tr>
                    <th>
                      <div className="FormField">
                        <label className="FormFieldLabel" htmlFor="email">Address Mail </label>
                        <input type="email" id="email" className="FormFieldInput" placeholder="Entrer votre e-mail " name="email" value={this.state.email} onChange={this.handleChange} />
                      </div>
                    </th>
                </tr>
                <tr>
                  <th>
                      <div className="FormField">
                        <label className="FormFieldLabel" htmlFor="password">Mot De Pass</label>
                        <input type="password" id="password" className="FormFieldInput" placeholder="Entrer votre password" name="password" value={this.state.password} onChange={this.handleChange} />
                      </div>
                  </th>
                </tr>
                    
                </table>
              <div className="FormField">
                  <Link to="/home"> <button className="FormFieldButton mr-20" >Sign In</button> </Link>
              </div>
            </form>
          </div>
        );
    }
}

export default SignInForm;

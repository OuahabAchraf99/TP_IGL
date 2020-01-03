import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./sign.css";
import axios from 'axios';

class SignUpForm extends Component {
    constructor() {
        super();

        this.state = {
            userName : '',
            password : '',
            email: '',
            prenom: '',
            name: '',
            numeroTele : '',
            lieuNaissance : '',
            dateNaissance : '',
            adress : '',
            year : '',
            groupe : '',
            matricule : ''
        };

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
        axios.post("http://localhost:8000/Etudiant",
            {
                "Nom":this.state.name,
            	"Prenom":this.state.prenom,
                "Datenaissance":this.state.dateNaissance,
	            "Lieunaissance":this.state.lieuNaissance,
            	"Adress":this.state.adress,
            	"Numtelephone":this.state.numeroTele,
            	"Matricule":this.state.matricule
            }
        ).
        then(
            res=>{
                console.log(res);
            }
        ).catch(
            res=>{
                console.log(res);
            }
        );
        
        
    }

    

    render() {
        return (
        <div className="SignUpForm">
            <form onSubmit={this.handleSubmit} className="FormFields">
              <table>
                <tr>
                    <th>
                        <div className="FormField">
                            <label className="FormFieldLabel" htmlFor="userName">Nom d'utilisatur</label>
                            <input type="text" id="userName" className="FormFieldInput" name="userName" disabled value={this.state.userName=this.state.name + this.state.prenom} onChange={this.handleChange} />
                        </div>
                    </th>
                    <th>
                        <div className="FormField">
                            <label className="FormFieldLabel" htmlFor="password">Mot de pass</label>
                            <input type="password" id="password" className="FormFieldInput" name="password" disabled value={this.state.password=this.state.prenom} onChange={this.handleChange} />
                        </div>
                    </th>
                
                    <th>
                        <div className="FormField">
                            <label className="FormFieldLabel" htmlFor="name">Nom</label>
                            <input type="text" id="name" className="FormFieldInput" placeholder="Entrer le nom copmlet" name="name" value={this.state.name} onChange={this.handleChange} />
                        </div>
                    </th>
               </tr>
                <tr>
                    <th>
                        <div className="FormField">
                            <label className="FormFieldLabel" htmlFor="prenom">Prenom</label>
                            <input type="text" id="prenom" className="FormFieldInput" placeholder="Entrer le prenom" name="prenom" value={this.state.prenom} onChange={this.handleChange} />
                        </div>
                    </th>
                    <th>   
                        <div className="FormField">
                            <label className="FormFieldLabel" htmlFor="email">Address E-Mail </label>
                            <input type="email" id="email" className="FormFieldInput" placeholder="Entrer l'e-mail" name="email" value={this.state.email} onChange={this.handleChange} />
                        </div>
                    </th>
                    <th>
                        <div className="FormField">
                            <label className="FormFieldLabel" htmlFor="numeroTele">Numero De Telephone</label>
                            <input type="tel" id="numeroTele" className="FormFieldInput" placeholder="Entrer le numero de telephone" name="numeroTele" value={this.state.numeroTele} onChange={this.handleChange} />
                        </div>
                        
                    </th>
                </tr>    
                <tr>
                    <th>
                        <div className="FormField">
                            <label className="FormFieldLabel" htmlFor="dateNaissance">Date De Naissance</label>
                            <input type="date" id="lieuNaisssance" className="FormFieldInput"  name="dateNaissance" value={this.state.dateNaissance} onChange={this.handleChange} />
                        </div>
                    </th>
                    <th>
                    <div className="FormField">
                            <label className="FormFieldLabel" htmlFor="lieuNaissance">Lieu De Naissance </label>
                            <input type="text" id="lieuNaissance" className="FormFieldInput" placeholder="Entrer le lieu de naissance" name="lieuNaissance" value={this.state.lieuNaissance} onChange={this.handleChange} />
                        </div>
                    </th>
               
                    <th>
                        <div className="FormField">
                            <label className="FormFieldLabel" htmlFor="adress">Adress </label>
                            <input type="text" id="adress" className="FormFieldInput" placeholder="Entrer l'adress" name="adress" value={this.state.adress} onChange={this.handleChange} />
                        </div>
                    </th>
                 </tr>
                <tr>
                    <th>
                        <div className="FormField">
                            <label className="FormFieldLabel" htmlFor="year">Niveau d'etude </label>
                            <input type="text" id="year" className="FormFieldInput" placeholder="Entrer l'annee" name="year" value={this.state.year} onChange={this.handleChange} />
                        </div>
                    </th>
                
                    <th>
                        <div className="FormField">
                            <label className="FormFieldLabel" htmlFor="groupe">Groupe </label>
                            <input type="number" id="groupe" className="FormFieldInput" placeholder="Entrer le numero de groupe" name="groupe" value={this.state.groupe} onChange={this.handleChange} />
                        </div>
                    </th>
                    <th>
                        <div className="FormField">
                            <label className="FormFieldLabel" htmlFor="matricule">Matricule</label>
                            <input type="text" id="matricule" className="FormFieldInput" placeholder="Entrer le matricule" name="matricule" value={this.state.matricule} onChange={this.handleChange} />
                        </div>
                    </th>
                </tr>
                <tr>
                    <th>
                    <div className="FormField">
                            <label className="FormFieldLabel" htmlFor="pieceIdentite">piece d'identite</label>
                            <input type="file" id="pieceIdentite"  name="pieceIdentite" accept="image/png, image/jpeg"  value={this.state.pieceIdentite} onChange={this.handleChange} />
                        </div>
                    </th>
                    <th></th>
                    <th>
                      < div className="FormField">
                            <Link to="/home"><button className="FormFieldButton mr-20" onClick={this.handleSubmit}>Ajouter</button></Link>
                        </div>
                    </th>
                </tr>
              </table>

              
            </form>
          </div>
        );
    }
}

export default SignUpForm;

import React, { Component } from 'react';
import { HashRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import axios,{post} from 'axios';
import './sign.css';



class AjouterDocument extends Component {
    constructor(props) {
        super(props);
        this.state = {
          selectedFile:''
        };
    }
    
    handleItemClick = (e) => {console.log(e.target.innerHTML)}
    
    fileSelectedHandler= event =>{
      this.setState({
        selectedFile: event.target.files[0]
      });
      
    }

    fileUploadHandler= (e)=>{
      const fd = new FormData();
      fd.append('file',this.state.selectedFile);
        axios.post('http://127.0.0.1:8000/uploadfile',fd
        ).then(res=>{
          console.log('it works');
        }).catch(
          console.log('problem here')
        );
    }
    
    render() {
        return (     
              <div className="mainAjouterDocument">
                <div className="divAjouterDocument"> 

                    <input style={{display:'none'}} type="file" onChange={this.fileSelectedHandler}
                    ref={fileInput=>this.fileInput=fileInput} fullPath/>
                      <h3>Information sur le fichier selectioner</h3>
                      
                      <label  >Nom du document :  </label>
                      <label  >{this.state.selectedFile.name}</label>
                      <br/><br/>
                      <label  >Taille du document :  </label>
                      <label  >{this.state.selectedFile.size} oct</label>
                      <br/><br/>
                      <label  >Type du fichier :  </label>
                      <label  >{this.state.selectedFile.type}</label>
                    <br/><br/><br/>
                    <br/>
                    <button className="addButton" onClick={() => this.fileInput.click()}/>
                    <button className="uploadButton" onClick={this.fileUploadHandler}/>
                
               </div>    
              </div>
    );
  }
}
export default AjouterDocument;

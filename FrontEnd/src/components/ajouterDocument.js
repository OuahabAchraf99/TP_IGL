import React, { Component } from 'react';
import { HashRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import axios from 'axios';
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
      console.log(this.state.selectedFile);

    }

    fileUploadHandler= ()=>{
      console.log(this.state.selectedFile);
      const fd = new FormData();
      fd.append('image',this.state.selectedFile,this.state.selectedFile.name);
        axios.post('http://127.0.0.1:8000/uploadfile',{
          "fileLink":this.state.selectedFile.name,
          "fileName":this.state.selectedFile.name,
          }).then(res=>{
          console.log(this.state.selectedFile.name);
          console.log(this.state.selectedFile.webkitRelativePath);
        }).catch(
          console.log('problem here')
        );
    }
    /*
    onChange(e){
      let files=e.target.files;
      let reader=new FileReader();
      reader.readAsDataURL(files[0]);
      reader.onload=(e)=>{
        
        console.warn("img data",e.target.result);
        const FormData={file:e.target.result}
        return post("127.0.0.1:8000",formData)
          .then(res=> console.warn("result",res));<input type="file" name="file" onChange={(e)=>this.onChange(e)}/>
      }
      
    }*/
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
                      <label  >Derniere modification :  </label>
                      <label  >{this.state.selectedFile.name}</label>
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

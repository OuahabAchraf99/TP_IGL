import React, { Component } from 'react';
import { HashRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import axios from 'axios';
import './sign.css';



const ListItem = ({ value, onClick }) => (
    <div className="divListItem" onClick={onClick}>{value}</div>
  );
  
  const List = ({ items, onItemClick }) => (
    <div >
      {
        items.map((item, i) => <ListItem key={i} value={item} onClick={onItemClick} />)
      }
    </div>
  );
  

class AjouterDocument extends Component {
    constructor(props) {
        super(props);
        this.state = {
          inputValue: '',
          fruites: ['Apple', 'Banana', 'Orange'],

          selectedFile:null
        };
    }

    onClick = () => {
        const { inputValue, fruites } = this.state;
        if (inputValue) {
          const nextState = [...fruites, inputValue];
          this.setState({ fruites: nextState, inputValue: '' });
        }
    }
    
    onChange = (e) => this.setState({ inputValue: e.target.value });
    
    handleItemClick = (e) => {console.log(e.target.innerHTML)}
    
    fileSelectedHandler= event =>{
      this.setState({
        selectedFile: event.target.files[0]
      })
    }

    fileUploadHandler= ()=>{
      const fd = new FormData();
      fd.append('image',this.state.selectedFile,this.state.selectedFile.name)
        axios.post('i need to put le link here',fd,{
          onUploadProgress: progressEvent=>{
            console.log('onUploadProgress'+Math.round(ProgressEvent.loaded / progressEvent.total)*100+'%')
        }
      }).then(res=>{
          console.log(res);
        });
    }
    render() {
        const { fruites,inputValue} = this.state;
    
        return (     
              
              <div className="mainAjouterDocument">
                <div className="divAjouterDocument">

                    <input type="text" value={inputValue} onChange={this.onChange} />
                    <button onClick={this.onClick}>Add</button>
                      <p>voila mon fichier <a href="./TD1.pdf" download="TD1.pdf">voila</a>  </p>
                      <List items={fruites} onItemClick={this.handleItemClick} />

                    <input style={{display:'none'}} type="file" onChange={this.fileSelectedHandler}
                    ref={fileInput=>this.fileInput=fileInput}/>
                    <button onClick={() => this.fileInput.click()}>select file</button>
                    <button onClick={this.fileUploadHandler}>UpLoad</button>
                </div>    
              </div>
    );
  }
}
export default AjouterDocument;

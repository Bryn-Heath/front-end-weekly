import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';
import Cal from './components/Cal'
import Login from './Login/Login'

 

class App extends Component {
    
  constructor() {
      super();
      this.state = {
        signedIn: false,
        user: null,
        name: "",
        email: "",
        password: "",
        events: [],
      };
    }
  
    // componentDidMount() {
      
    // }


//used for input capture on input forms
    handleChange = (e) => {
      this.setState({
        [e.target.name]: e.target.value,
      });
    };
  

 render(){
  return (
    <div className="App">
    
      {this.state.signedIn ? <Cal />  : <Login  handleChange={this.handleChange}/> }
    </div>
  );
 }
}

export default App;

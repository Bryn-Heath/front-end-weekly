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
        users:""
      };
    }
  
    // componentDidMount() {
      
    // }


    handleSignup = (event) => {
      event.preventDefault()
      fetch("http://localhost:3000/owners", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: this.state.username.trim(),
          email: this.state.email.trim(),
          password: this.state.password.trim(),
        }),
      })
        .then(res => res.json())
        .then(data => {
          this.setState({
            signedIn: true,
            user: {
              id: data.id,
              username: data.username.charAt(0).toUpperCase() + data.name.slice(1),
              email: data.email
            }
          });
        });
    };


    handleLogin = (event) => {
      event.preventDefault()
      fetch("http://localhost:3000/owners")
        .then(res => res.json())
        .then(data => {
          const user = data.filter(
            u => u.username == this.state.username && u.password == this.state.password
          );
          console.log(data)
          if (user.length == 1) {
            this.setState({
              signedIn: true,
              user: {
                id: user[0].id,
                username:
                  user[0].username.charAt(0).toUpperCase() + user[0].username.slice(1),
              },
              users: data.filter(u => u.username)
            });
          }
        });
    };


//used for input capture on input forms
    handleChange = (e) => {
      this.setState({
        [e.target.name]: e.target.value,
      });
    };
  

 render(){
  return (
    <div className="App">
    
      {this.state.signedIn ? 
     
      
      <Login  
      handleChange={this.handleChange}
      handleSignup={event => this.handleSignup(event)}
      handleLogin={event => this.handleLogin(event)}
      /> : <Cal />  
      }
    </div>
  );
 }
}

export default App;

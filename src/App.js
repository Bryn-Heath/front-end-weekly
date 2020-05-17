import React, { Component } from "react";
import './App.css';
import Cal from './components/Cal'
import Login from './Login/Login'

 
class App extends Component {
    
  constructor() {
      super();
      this.state = {
        signedIn: true,
        user: null,
        username: "",
        email: "",
        password: "",
        events: [],
        users:"",
        message:""
      };
  };

    
    componentDidMount() {
      this.fetchCategories();
    }

 

    fetchCategories = () => {
      fetch("http://localhost:3000/categories")
        .then(res => res.json())
        .then(data => this.setState({ categories: data.map(ea => ea.name)}))
    };

    handleSignup = (event) => {
      event.preventDefault()
      fetch("http://localhost:3000/owners", {
        method: "POST",
        headers: {"Content-Type": "application/json", 
                  "Accept": "application/json" },
        body: JSON.stringify({
          username: this.state.username.trim(),
          email: this.state.email.trim(),
          password: this.state.password.trim(),
        }),
      })
        .then(res => res.json())  
        .then(data => this.setState({message: data}))
   
          // {this.setState
          //   ({
          //   signedIn: data > 1 ? true : false,
          //     user: {
          //       id: data.id,
          //       username: data.username.charAt(0).toUpperCase() + data.username.slice(1),
          //       email: data.email
          //     } 
          //   })
          // }
         
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
    handleChange = (event) => {
      this.setState({
        [event.target.name]: event.target.value,
      });
    };
  

 render(){
  return (
    <div className="App">
    
      {this.state.signedIn ? 
     
        <Cal 
          username={this.state.username}
          categories={this.state.categories}
        />  
      
        :

        <Login  
          handleChange={this.handleChange}
          handleSignup={event => this.handleSignup(event)}
          handleLogin={event => this.handleLogin(event)}
          message={this.state.message}
        /> 
    
      }



    </div>
  );
 }
}

export default App;

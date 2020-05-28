import React, { Component } from "react";
import './App.css';
import Cal from './components/Cal'
import Login from './Login/Login'
import DataPage from './components/DataPage'
import Nav from './components/Nav'
// import { login, signup } from 'API'

const API = "https://weekly-bryn-heath.herokuapp.com/"
class App extends Component {
    
  constructor() {
      super();
      this.state = {
        signedIn: false,
        user: null,
        username: "", 
        categories: null,
        email: "",
        password: "",
        events: [],
        users:"",
        message:"",
        clickedData: false
      };
  };

    
    componentDidMount() {

      
      fetch(`${API}categories`)
        .then(res => res.json())
        .then(data => this.setState({ categories : data  })
        )
   
    }

 
   

    handleSignup = (event) => {
      event.preventDefault()
      fetch(`${API}owners`, {
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
         
    };


    handleLogin = (event) => {
      event.preventDefault() 
      fetch(`${API}login_and_init`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({username: this.state.username})
      })
      .then( r => r.json() )
      .then( userData => {
        this.setState({ 
          user: userData,
          signedIn: true, })
      })
    };
 
//used for input capture on input forms
    handleChange = (event) => {
      this.setState({
        [event.target.name]: event.target.value,
      });
    };
  


    handleClickData = () => {
      this.setState({
         clickedData: !this.state.clickedData,
      });
    };
  

 render(){
  return ( 
    <div className="App">
      {this.state.signedIn ?  
      <div className="nav">
        WEEKLY 
          <Nav  
          handleClickData={this.handleClickData}
          /> 
        STATS
      </div> 
      : null
      }
      
 {/* <hr/>  */}
      {this.state.signedIn ? 
     
        this.state.clickedData ? 
        
        <DataPage 
        userData={this.state.user.appointments}
        /> 
        
        :

        <Cal
          userData={this.state.user.appointments}
          username={this.state.username}
          categories={this.state.categories}
          user={this.state.user}
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

import React, { Component } from "react";
import './App.css';
import Cal from './components/Cal'
import Login from './Login/Login'
import DataPage from './components/DataPage'
import Nav from './components/Nav'
// import { login, signup } from 'API'

 
class App extends Component {
    
  constructor() {
      super();
      this.state = {
        signedIn: false,
        user: null,
        username: "", 
        categories:[],
        email: "",
        password: "",
        events: [],
        users:"",
        message:"",
        clickedData: false
      };
  };

    
    componentDidMount() {
      this.fetchCategories();
     
    }

 

    fetchCategories = () => {
      fetch("http://localhost:3000/categories")
        .then(res => res.json())
        .then(data => {
          const categories = data.map(ea => ea)
          this.setState({ categories })
        })
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
         
    };


    handleLogin = (event) => {
      event.preventDefault()
      // fetch("http://localhost:3000/owners")
      //   .then(res => res.json())
      //   .then(data => {
      //     console.log(data)
      //     const user = data.filter(
      //       u => u.username == this.state.username && u.password == this.state.password
      //     );

      //     console.log(data)
      //     if (user.length == 1) {
      //       this.setState({
      //         signedIn: true,
      //         user: {
      //           id: user[0].id,
      //           username:
      //             user[0].username.charAt(0).toUpperCase() + user[0].username.slice(1),
      //         },
      //         users: data.filter(u => u.username)
      //       });
      //     }
      //   });
      fetch('http://localhost:3000/login_and_init', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          
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
        METRICS
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

import React, { Component } from "react";
import "./login.css";

class Login extends Component {
  constructor(){
    super()
    this.state = {
      currentView: "signUp",
      username:"",
      email:"",
      password:""
    }
  }

//swap views
  changeView = (view) => {
    this.setState({
      currentView: view
    })
  }

  currentView = () => {
    switch(this.state.currentView) {
      
      case "signUp":
        return (
          <form className="form">
            <h2>Join WEEKLY to discover your weekly metrics</h2>
            <fieldset>
              <legend>Create Account</legend>
              <ul>
                <li>
                  <label for="username">Username:</label>
                  
                  <input 
                  className="input"
                  name="username"
                  type="text"
                  onChange={(e) => this.props.handleChange(e)}
                  id="username" 
                  required/>

                </li>
                <li>
                  <label for="email">Email:</label>
                  
                  <input 
                  type="email" 
                  id="email"
                  name="email"
                  required
                  onChange={(e) => this.props.handleChange(e)}
                  />

                </li>
                <li>
                  <label for="password">Password:</label>
                  
                  <input 
                  type="password" 
                  id="password" 
                  name="password"
                  required
                  onChange={(e) => this.props.handleChange(e)}
                  />

                </li>
              </ul>
            </fieldset>
            <button onClick={this.props.handleLogin} >Submit</button>
            <button 
            type="button"  
            onClick={ () => this.changeView("logIn")}>
            Have an Account?</button>
          </form>
        )
        break
      
        case "logIn":
        return (
          <form className="form">
            <h2>Welcome Back!</h2>
            <fieldset>
              <legend>Sign In</legend>
              <ul>
                <li>
                  <label for="username">Username:</label>
                  
                  <input 
                  type="text" 
                  id="username" 
                  name="username"
                  required
                  onChange={(e) => this.props.handleChange(e)}
                  />

                </li>
                <li>
                  <label for="password">Password:</label>

                  <input 
                  type="password" 
                  id="password" 
                  name="password"
                  required
                  onChange={(e) => this.props.handleChange(e)}
                  />

                </li>
                <li>
                  <i/>
                   
                </li>
              </ul>
            </fieldset>
            <button
            onClick={event => this.props.handleLogin(event)}
            >Login</button>
            <button 
            type="button" 
            onClick={ () => this.changeView("signUp")}
            >Create an Account</button>
          </form>
        )
        default:
        break
    }
  }


  render() {
    return (
       
      <section   id="entry-page" >
        {this.currentView()}
      </section>
   
    )
  }
}

 
export default Login
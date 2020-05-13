import React, { Component } from "react";
import "./login.css";

class Login extends Component {
  constructor(){
    super()
    this.state = {
      currentView: "signUp"
    }
  }

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
                  // onChange={(e) => props.handleChange(e)}
                  name="name"
                  type="text"

                  
                  id="username" 
                  required/>
                </li>
                <li>
                  <label for="email">Email:</label>
                  <input type="email" id="email" required/>
                </li>
                <li>
                  <label for="password">Password:</label>
                  <input type="password" id="password" required/>
                </li>
              </ul>
            </fieldset>
            <button>Submit</button>
            <button type="button" onClick={ () => this.changeView("logIn")}>Have an Account?</button>
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
                  <input type="text" id="username" required/>
                </li>
                <li>
                  <label for="password">Password:</label>
                  <input type="password" id="password" required/>
                </li>
                <li>
                  <i/>
                   
                </li>
              </ul>
            </fieldset>
            <button>Login</button>
            <button type="button" onClick={ () => this.changeView("signUp")}>Create an Account</button>
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
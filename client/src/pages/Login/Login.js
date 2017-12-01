import React, { Component } from "react";
import API from "../../utils/API"
import "./Login.css";
import { withRouter } from "react-router-dom";

class Login extends Component {

  state = {
    username: "",
    password: "",
  };
  
  handleInputChange = event => {

    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
    console.log(this.state);
  };

  ProceedLogin = event => {
    // event.preventDefault();
    API.loginChecker({
      username: this.state.username,
      password: this.state.password
    }).then(function(response){
      if(response.data){
        console.log("logged in yay")
        withRouter(({history}) => (
          history.push("/home")
        ))
      }
    })

  }

  render(){
    return(
    <div className="container">
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">Sign In!</h3>
        </div>
        <div className="panel-body">
          <form>
            <div className="form-group">
              <label htmlFor="query">Username</label>
              <input 
                value={this.state.username}
                onChange={this.handleInputChange}
                name="username"
                className="form-control" 
                id="username" 
                placeholder="Username" 
              />
            </div>
            <div className="form-group">
               <label htmlFor="endDate">Password</label>
              <input 
                type="password" 
                className="form-control" 
                id="password" 
                placeholder="Password"
                value={this.state.password}
                onChange={this.handleInputChange}
                name="password" 
                />
            </div>
            <button 
              type="submit" 
              className="btn btn-default"
              onClick={this.ProceedLogin}
              >Submit
            </button>
          </form>
        </div>
      </div>
      <div className="panel-heading">
          <a href="/newuser"><button 
          id="createAcc"
          className="panel-title btn btn-default"
          >Create An Account</button></a>
      </div>
    </div>
  )}
}

export default Login;
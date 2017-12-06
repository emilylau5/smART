import React, { Component } from "react";
import API from "../../utils/API"
import "./Login.css";
var Link = require("react-router-dom").Link


class Login extends Component {
  constructor(props){

    super(props);

    this.state = {
      username: "",
      password: "",
    };

    this.ProceedLogin = this.ProceedLogin.bind(this)
}
  
  handleInputChange = event => {

    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
    console.log(this.state);
  };

  ProceedLogin(event) {
    event.preventDefault();
    console.log(this.state.username)
    API.loginChecker({
      username: this.state.username,
      password: this.state.password
    }).then(function(response){
      console.log(response)
      if(response){
        console.log(response.data)
        sessionStorage.setItem("userID", response.data._id)
        sessionStorage.setItem("username", response.data.username)
         window.location.href = "/"
      }
      else{
        alert("Login information incorrect!")
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
        <Link to="/newuser"><button 
        id="createAcc"
        className="btn btn-default"
        >Create An Account</button></Link>
    </div>
  )}
}

export default Login;
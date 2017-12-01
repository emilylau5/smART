import React, { Component } from "react";
import API from "../../utils/API"

class NewLogin extends Component {

  state = {
    first_name: "",
    last_name: "",
    username: "",
    password: "",
    email: ""
  };

  handleInputChange = event => {

    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
    console.log(this.state);
  };

  SignUp = event => {
    event.preventDefault()
    API.createUser({
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      username: this.state.username,
      password: this.state.password,
      email: this.state.email
    })
  }

  render(){
    return(
    <div className="container">
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">Create An Account!</h3>
        </div>
        <div className="panel-body">
          <form>
            <div className="form-group">
              <label htmlFor="first_name">First Name</label>
              <input 
                value={this.state.first_name}
                onChange={this.handleInputChange}
                name="first_name"
                className="form-control" 
                id="firstname" 
                placeholder="First Name" 
              />
            </div>
            <div className="form-group">
              <label htmlFor="last_name">Last Name</label>
              <input 
                value={this.state.last_name}
                onChange={this.handleInputChange}
                name="last_name"
                className="form-control" 
                id="lastname" 
                placeholder="Last Name" 
              />
            </div>
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
            <div className="form-group">
              <label htmlFor="first_name">Email</label>
              <input 
                value={this.state.email}
                onChange={this.handleInputChange}
                name="email"
                className="form-control" 
                id="email" 
                placeholder="Email" 
              />
            </div>
            <button 
              type="submit" 
              className="btn btn-default"
              onClick={this.SignUp}
              >Submit
            </button>
          </form>
        </div>
      </div>
      <div className="panel-heading">
          <a href="/"><button 
          id="login"
          className="panel-title btn btn-default"
          >Already Have One?</button></a>
      </div>
    </div>
  )}
}

export default NewLogin;
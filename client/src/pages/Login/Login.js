import React, { Component } from "react";
import API from "../../utils/API"
import "./Login.css";
class Login extends Component {

  state = {
    username: "",
    password: ""
  };

//   ProceedLogin = event => {
//     event.preventDefault();
// ======== API.loginChecker();
//     if (this.state.username && this.state.password) {
//       API.getArticles({
//         query: this.state.query,
//         startDate: this.state.startDate,
//         endDate: this.state.endDate
//       })
//       .then(res => this.setState({ articles: res.data.response.docs, articlesSubmitted: true}))
//       .catch(err => console.log(err))
//     }
//   }

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
          <a href="/users"><button 
          id="createAcc"
          className="panel-title btn btn-default"
          >Create An Account</button></a>
      </div>
    </div>
  )}
}

export default Login;
import React, { Component } from "react";
import './Navbar.css';
var Link = require("react-router-dom").Link

class Nav extends Component {
  
  logout = event => {
    sessionStorage.clear();
  };
  
  render() {
    return (
      <div>
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <Link className="navbar-brand" to="/"><b>smART</b></Link>
            </div>
              {sessionStorage.getItem('username') 
              ? 
              (<div className="navbar-right">
              <Link to="/creart" className="navbar-brand"><b>New Post</b></Link>
              <Link to="/" className="navbar-brand" onClick={this.logout}><b>Logout</b></Link></div>)
              :
              (<div className="navbar-right">
              <Link to="/newuser" className="navbar-brand"><b>New User</b></Link>
              <Link to="/login" className="navbar-brand"><b>Login</b></Link></div>)}
          </div>
        </nav>
      </div>
    )};
}
export default Nav;
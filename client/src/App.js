import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
// import Manage from "./pages/AccManage";
import Home from "./pages/Home";
import Login from './pages/Login';
import NewAcc from './pages/CreateAcc'
        
const App = () => 
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/home" component={Home}/>
          <Route exact path="/" component={Login}/>
          <Route exact path="/newuser" component={NewAcc}/>
        </Switch>
      </div>
    </Router>

export default App;
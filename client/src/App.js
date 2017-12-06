import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Login from './pages/Login';
import NewAcc from './pages/CreateAcc';
import CreatePost from './pages/CreatePost';
        
const App = () => 
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/newuser" component={NewAcc}/>
          <Route exact path="/creart" component={CreatePost}/>
        </Switch>
      </div>
    </Router>

export default App;
import React, { Component } from "react";
import API from "../../utils/API"
import Post from "../../components/Posts"
import './Home.css';

class Home extends Component {
  state = {
    userID: "",
    posts: []
  };

  componentDidMount() {
    if(sessionStorage.getItem('userID')) {
      this.setState({
        userID: sessionStorage.getItem('userID')
      })
    }
    API.findAll()
    .then(res => {
      console.log(res.data)
      this.setState({posts: res.data})
      console.log(this.state.posts)
    })
  }

  render() {
    return (
      <Post results={this.state.posts}/>
    )}
}
export default Home;
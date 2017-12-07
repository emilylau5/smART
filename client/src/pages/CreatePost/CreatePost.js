import React, { Component } from "react";
import API from "../../utils/API"
import './CreatePost.css';
const Link = require("react-router-dom").Link

class NewPost extends Component {

  state = {
    username: "",
    caption: "",
    imgSRC: "",
    imgHREF: "",
    videoLink: "",
    img: ""
  };

  componentDidMount() {
    if(sessionStorage.getItem('username')) {
      this.setState({
        username: sessionStorage.getItem('username')
      })
      
    }
  }

  handleInputChange = event => {

    const { name, value } = event.target;
    this.setState({
      [name]: value
    });

  };

  PostIt = event => {
    event.preventDefault()
    let imgSlice = this.state.img
    let hrefIndex = imgSlice.indexOf("href")
    let srcIndex = imgSlice.indexOf("src")
    let altIndex = imgSlice.indexOf("alt")
    let imgLink = imgSlice.slice(srcIndex + 5, altIndex - 2)
    let imgHREF = imgSlice.slice(hrefIndex + 6, srcIndex - 7)
    console.log(imgLink + "link")
    console.log(imgHREF + "href")
    let vidSlice = this.state.videoLink
    let linkInfo = vidSlice.substring(vidSlice.length - 11)
    let vidLink = "https://www.youtube.com/embed/" + linkInfo
    if (this.state.caption){
      API.createPost({
        username: this.state.username,
        caption: this.state.caption,
        imgSRC: imgLink,
        imgHREF: imgHREF,
        videoLink: vidLink
      }).then(function(res){
        console.log("post made!")
        window.location.href = "/"
      })
    }
  }

  render(){
    return(
      <body>
        <div className="container">
          <form>
            <div className="form-group">
              <label htmlFor="caption">Caption</label>
              <input 
                value={this.state.caption}
                onChange={this.handleInputChange}
                name="caption"
                className="form-control" 
                id="Caption" 
                placeholder="Caption" 
              />
            </div>
            <div className="form-group">
              <label htmlFor="videoLink">Link to Video</label>
              <input 
              value={this.state.videoLink}
              onChange={this.handleInputChange}
              name="videoLink" 
              type="url"
              className="form-control" 
              id="videoLink" 
              placeholder="Link"/>
            </div>
            <div className="form-group">
              <a href="https://imgbb.com/" target="_blank">
                <div className="picLink btn btn-default">
                  Create Image Link & Copy HTML Thumbnail Link
                </div>
              </a>
            </div>
            <div className="form-group">
              <label htmlFor="img">Paste HTML Thumbnail Link</label>
              <input 
              value={this.state.img}
              onChange={this.handleInputChange}
              name="img" 
              type="url"
              className="form-control" 
              id="img"
              placeholder="HTML Thumbnail Link"/>
            </div>
            <button 
            type="submit" 
            className="postsubmit btn btn-default"
            onClick={this.PostIt}
            >Submit</button>
            <Link to="/">
            <button
            className="postcancel btn btn-default"
            >Cancel</button></Link>
          </form>
        </div>
      </body>
    )
  }
}

export default NewPost;
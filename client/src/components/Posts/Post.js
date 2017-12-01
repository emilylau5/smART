import React, { Component }from "react";
import API from "../../utils/API"

export default class Post extends Component {

  state = {
    posts: []
  }

  render() {
    return(
      <div>
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">Search Results</h3>
        </div>
      {this.state.posts.map((value, i) =>(
        <div className="panel-body" key={i}>
          <div className="postCard">
            <div className="postTitle">
              <h3>{value.caption}</h3>
            </div>
            <div className="postDate">
              <p>{value.createdAt}</p>
            </div>
            <button type="button" className="btn btn-info postLike" data-title={value.caption} data-date={value.createdAt} data-img={value.img} data-url={value.url} onClick={this.updateMongo}>👍</button>
            <a href={value.web_url} className="btn btn-info viewUser" target="_blank" role="button">View Profile</a>
          </div>
        </div>
       ))}
      </div>
    </div>
    )
  }
}
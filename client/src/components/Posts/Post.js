import React, { Component }from "react";
import API from "../../utils/API"

export default class Post extends Component {

  state = {
    posts: this.props.results
  }

  componentDidMount = event => {
    console.log(this.state.posts);
  }

  likeThisPost = event => {
    const find = event.target.attributes
    let caption = find.getNamedItem("data-caption").value
    let userID = sessionStorage.getItem('userID')
    const obj = {
      "caption": caption,
      "userID": userID
    }
    API.likePost(obj);
  }

  render() {
    return(
      <div>
      {this.props.results.map((value, i) =>(
        <div className="panel panel-default" key={i}>
          <div className="panel-heading">{value.caption}</div>
          <div className="panel-body">
            <div className="postTitle">
              <h5>By: {value.username}</h5>
            </div>
            <div className="postDate">
              <p>{value.createdAt}</p>
            </div>
            {value.img ?
              (<div className="postImg">
                <a><img src={value.img}/></a>
              </div>)
            : (<div className="postVid">
              <iframe width="560" height="450" 
              src={value.videoLink} 
              frameBorder="0" gesture="media" 
              allow="encrypted-media" allowFullScreen></iframe>
            </div>)}
            <button 
            type="button" 
            className="btn btn-info postLike" 
            data-caption={value.caption} 
            data-date={value.createdAt} 
            data-img={value.img} 
            data-videolink={value.videoLink} 
            onClick={this.likeThisPost}>❤</button>
          </div>
        </div>
        ))}
    </div>
    )
  }
}
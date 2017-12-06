import React, { Component }from "react";
import API from "../../utils/API"
import './Post.css';


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
          <div className="panel-heading postTitle">{value.caption}<br/><p className="postUser">Posted By: {value.username}</p></div>
          <div className="panel-body">
            {value.imgSRC ?
              (<div className="postImg">
                <a href={value.imgHREF}><img src={value.imgSRC}/></a>
              </div>)
            : (<div className="postVid">
              <iframe width="560" height="450" 
              src={value.videoLink} 
              frameBorder="0" gesture="media" 
              allow="encrypted-media" allowFullScreen></iframe>
            </div>)}
            <div>
              <p className="postDate">{value.createdAt}</p>
            </div>
          </div>
        </div>
        ))}
    </div>
    )
  }
}
           // <button 
           //  type="button" 
           //  className="btn btn-info postLike" 
           //  data-caption={value.caption} 
           //  data-date={value.createdAt} 
           //  data-imgsrc={value.imgSRC} 
           //  data-videolink={value.videoLink} 
           //  onClick={this.likeThisPost}>❤</button>
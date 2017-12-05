import axios from "axios";

export default {
  loginChecker: (data) => {
    return axios.post("/api/user/current", data)
    .then(function(response){
      console.log(response)
      if(response.data) {
        return response
      }
      else{
        return false
      }
    })
  },
  createUser: (data) => {
    return axios.post("/api/user/new", data)
    .then(function(response){
      console.log(response)
    })
  },
  createPost: (data) => {
    return axios.post("/api/posts/new", data)
    .then(function(response){
      console.log(response)
    })
  },
  likePost: (data) => {
    return axios.post("/api/posts/like", data)
    .then(function(response){
      console.log(response)
    })
  },
  findAll: (data) => {
    return axios.get("api/posts/home")
    .then(function(res){
      return res
    })
  }
}
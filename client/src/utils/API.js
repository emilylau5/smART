import axios from "axios";

export default {
  loginChecker: function(data){
    return axios.post("/api/user/current", data)
    .then(function(response){
      if(response) {
        return true
      }
      else{
        return false
      }
    })
  },
  createUser: function(data){
    return axios.post("/api/user/new", data)
    .then(function(response){
      console.log(response)
    })
  }
}
import axios from "axios";

export default {
  // Gets all users
    getPosts: function() {
    return axios.get("/api/posts");
  },
  getPost: function(id) {
    return axios.get("/api/posts/" + id);
  },
  deletePost: function(id) {
    return axios.delete("/api/posts/" + id);
  }
};
import axios from "axios";
import api_url from "./api_url";

function auth_header() {
  return { Authorization: `Bearer ${localStorage.getItem("fuji-token")}` };
}

export default {
  get: function(url) {
    return axios.get(api_url + url, { headers: auth_header() });
  },
  post: function(url, obj) {
    return axios.post(api_url + url, obj, { headers: auth_header() });
  },
  put: function(url, obj) {
    return axios.put(api_url + url, obj, { headers: auth_header() });
  },
  delete: function(url) {
    return axios.delete(api_url + url, { headers: auth_header() });
  }
};

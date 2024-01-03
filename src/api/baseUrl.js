import axios from "axios";

//allow setting of credentials
axios.defaults.withCredentials = true;

export default axios.create({
  baseURL: "http://127.0.0.1:8000",
});

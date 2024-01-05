import axios from "axios";

//axios.defaults.withCredentials = true;

export default axios.create({
  withCredentials: true,
  baseURL: "http://localhost:8000",
});

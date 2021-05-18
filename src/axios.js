import axios from "axios";

// base url to make requests to the movie database
const instance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
});

export default instance;

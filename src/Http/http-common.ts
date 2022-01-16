import axios from "axios";

export default axios.create({
  baseURL: "https://ndapi.azurewebsites.net/api/provider/"
  //baseURL: "https://localhost:5001/api/provider/"
});
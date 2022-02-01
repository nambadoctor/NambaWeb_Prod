import axios from "axios";

export default axios.create({
  baseURL: "https://ndapitest.azurewebsites.net/api/provider/"
  //baseURL: "https://localhost:5001/api/provider/"
});

import axios from "axios";

export default axios.create({
  baseURL: "https://ndapi.azurewebsites.net/api/provider/"
});

//local: https://localhost:5001/api/provider/
//prod: https://ndapi.azurewebsites.net/api/provider/

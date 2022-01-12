import axios from "axios";

export default axios.create({
  baseURL: "https://ndapi.azurewebsites.net/"
});
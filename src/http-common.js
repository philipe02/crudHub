import axios from "axios";

export default axios.create({
  baseURL: "https://60c0016fb8d36700175540df.mockapi.io/",
  headers: {
    "Content-type": "application/json"
  }
});
import axios from "axios";

const talksApi = axios.create({
  baseURL: "https://talks.oztamir.com/api",
});

export default talksApi;

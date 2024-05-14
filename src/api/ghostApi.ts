import axios from "axios";

const api = axios.create({
  baseURL: "https://posts.oztamir.com/ghost/api/v3/content",
  params: {
    key: "03c8c51ca4d53993141e23da22",
  },
});

export default api;

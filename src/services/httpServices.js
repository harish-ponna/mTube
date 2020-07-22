import Axios from "axios";

const baseUrl = `https://www.googleapis.com/youtube/v3`;

Axios.defaults.baseURL = baseUrl;

const withToken = () => {
  if (localStorage.getItem("user")) {
    Axios.defaults.headers.common["Authorization"] =
      "Bearer " + JSON.parse(localStorage.getItem("user")).tokenId;
    return Axios;
  }
};

export {
  Axios,
  //  withToken
};

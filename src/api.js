import axios from "axios";

export function PostUrl(id, longUrl) {
  return axios.post(`https://myurlapp.herokuapp.com/urlshortner/${id}`, longUrl, {
    headers: {
      authorization: window.localStorage.getItem("app_token"),
    },
  });
}
export function PostUserRegister(userData) {
  return axios.post("https://myurlapp.herokuapp.com/register", userData);
}

export function PostLogin(loginData) {
  return axios.post("https://myurlapp.herokuapp.com/login", loginData);
}
export function getUrl(id) {
  return axios.get(`https://myurlapp.herokuapp.com/urlshortner/${id}`, {
    headers: {
      authorization: window.localStorage.getItem("app_token"),
    },
  });
}

import axios from "axios";

export function PostUrl(id, longUrl) {
  return axios.post(`http://localhost:8080/urlshortner/${id}`, longUrl, {
    headers: {
      authorization: window.localStorage.getItem("app_token"),
    },
  });
}
export function PostUserRegister(userData) {
  return axios.post("http://localhost:8080/register", userData);
}

export function PostLogin(loginData) {
  return axios.post("http://localhost:8080/login", loginData);
}
export function getUrl(id) {
  return axios.get(`http://localhost:8080/urlshortner/${id}`, {
    headers: {
      authorization: window.localStorage.getItem("app_token"),
    },
  });
}

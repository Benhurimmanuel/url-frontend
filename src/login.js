import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { PostLogin } from "./api";

export default function Login() {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const loginData = { userEmail, userPassword };
  let history = useHistory();

  return (
    <>
      <form
        className="mt-5"
        onSubmit={async (e) => {
          e.preventDefault();
          try {
            let login = await PostLogin(loginData);
            window.localStorage.setItem("app_token", login.data.token);
            let token = login.data.token;
            // console.log(login.data.id);
            if (token) {
              history.push(`/urlshortner/${login.data.id}`);
            } else {
              alert("Email or Password is incorrect");
              history.push("/login");
            }
          } catch (error) {
            console.log(error);
          }
        }}
      >
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            name="email"
            type="email"
            className="form-control"
            placeholder="name@example.com"
            value={userEmail}
            onChange={(e) => {
              setUserEmail(e.target.value);
            }}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="Password" className="form-label">
            Password
          </label>
          <input
            name="Password"
            type="Password"
            className="form-control"
            placeholder="Enter password"
            value={userPassword}
            onChange={(e) => {
              setUserPassword(e.target.value);
            }}
          />
        </div>
        <div className="d-flex justify-content-end mt-4">
          <button className="col-2 btn btn-warning" type="submit">
            Login
          </button>
        </div>
      </form>
    </>
  );
}

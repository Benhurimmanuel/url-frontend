import React, { useState } from "react";
import { PostUserRegister } from "./api";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from "react-router-dom";

export default function Register() {
  let history = useHistory();
  const [userEmail, setUserEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const userData = { userEmail, userName, userPassword };

  return (
    <>
      <form
        className="mt-5"
        onSubmit={async (e) => {
          e.preventDefault();
          await PostUserRegister(userData);
          if (userData) {
            history.push(`/login`);
          } else {
            alert("register");
          }
        }}
      >
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
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
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            name="name"
            type="text"
            className="form-control"
            placeholder="John Doe"
            value={userName}
            onChange={(e) => {
              setUserName(e.target.value);
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
        <div className="mb-3">
          <button type="submit" className="form-control btn btn-warning">
            Submit
          </button>
        </div>
        <div className="mb-3">
          <h6 className="offset-1 offset-sm-3 offset-md-4 offset-lg-4 mt-5">
            Already Signed up! <Link to="/login">click here</Link> to login
          </h6>
        </div>
      </form>
    </>
  );
}

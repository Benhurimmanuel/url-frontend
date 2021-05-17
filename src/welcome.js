import react from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function Welcome() {
  return (
    <>
      <h1 className="mt-5 mb-5">URL Shortener App </h1>
      <div className="mainpage">
        <div className="row p-3">
          <h3 className="offset-2 offset-md-1 offset-lg-1 offset-xl-2 h3">
            Lengthy URL's are outdated, Why dont you Shortern em up!
          </h3>
        </div>
        <h5 className="offset-2 offset-sm-3 offset-md-4 offset-lg-4 mt-4 ">
          Signup/Login now to Start Using
        </h5>
        <div className="offset-3 offset-sm-4  offset-md-4 offset-lg-5 mt-5">
          <Link to="/register">
            <button className="mr-4 btn btn-warning">Signup</button>
          </Link>
          <Link to="/login">
            <button className="btn btn-warning">Login</button>
          </Link>
        </div>
      </div>
    </>
  );
}

import React, { useState } from "react";
import "./Loginpage.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./Firebase";

function Loginpage() {
  const History = useHistory();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const signinloginhandler = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        History.push("/");
      })
      .catch((error) => alert(error.message));
    setemail("");
    setpassword("");
  };
  //use some firebase procees for register and login the details
  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          History.push("/");
        }
      })
      .catch((error) => alert(error.message));

    setemail(" ");
    setpassword(" ");
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="Login_image"
          src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
          alt="logoamazon"
        />
      </Link>
      <div className="login_container">
        <h1>Sign-in</h1>
        <form onSubmit={signinloginhandler}>
          <p>E-mail:</p>
          <input
            type="text"
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />
          <p>Password:</p>
          <input
            type="password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
          <button className="loginsignin_button" type="submit">
            Sign In
          </button>
        </form>
        <p>Please make sure that it is a FAKE CLONE.</p>
        <button className="loginregister_button" onClick={register}>
          {" "}
          Create an Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Loginpage;

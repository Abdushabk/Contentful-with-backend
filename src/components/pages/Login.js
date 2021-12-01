import React, { useState, useEffect } from "react";
import * as ReactBootStrap from "react-bootstrap";
//import {useHistory} from "react-router-dom";
import Header from "../header/Header";
import { Redirect } from "react-router-dom";
import "./Login.css";
import axios from "axios";

function Login() {
  const [username, setUsername] = useState("");
  const [usernameTemp, setUsernameTemp] = useState("");
  const [loginMsg, setLoginMsg] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //const history= useHistory ();
  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      //history.push ("/add")
    }
  }, []);

  async function login() {
    // we are not creating new user, only logging-in.
    console.warn(username, email, password);
    let item = { username, email, password };
    try {
      let result = await axios.get(
        `https://avc-food-blog.herokuapp.com/api/users/${username}`
      );
      // authorization here ??
      setLoginMsg(`${username} is logged in!`);
      localStorage.setItem("user-info", JSON.stringify(result));
      console.log(result);
    } catch (error) {
      // "Invalid Login"
    }

    // let result= await fetch("https://avc-food-blog.herokuapp.com/api/users",{
    //     method:'POST',
    //     headers: {
    //         "Content-Type":"application.json",
    //         "Accept": "application.json"
    //     },
    //     body: JSON.stringify(item)
    // });
    // result= await result.json();

    //history.push("/add")
  }

  return (
    <div className="login">
      <div className="login-title">
        <h1>Login Page</h1>
      </div>

      <div className="login-container">
        <div className="col-8"></div>

        {loginMsg ? (
          <div>{loginMsg}</div>
        ) : (
          <>
            <input
              type="text"
              placeholder="username"
              onChange={(e) => setUsernameTemp(e.target.value)}
              className="form-control"
            />
            <br />
            <input
              type="text"
              placeholder="email"
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
            />
            <br />
            <input
              type="password"
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
            />
            <br />
            <button onClick={login} className="btn btn-primary">
              Login
            </button>
          </>
        )}
      </div>
    </div>
  );

  /*var data = {
        username: "someone", 
        email: "some@email", 
        password: 999
    };

    var json = JSON.stringify(data);

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "/example/");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(json);
}*/
}

export default Login;

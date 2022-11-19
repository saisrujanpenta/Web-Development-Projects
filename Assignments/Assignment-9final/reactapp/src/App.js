// import logo from './logo.svg';
import "./App.css";
import axios from "axios";
import React from "react";
// import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

const PORT = process.env.PORT || 3000;

function App() {
  return (
    <div className="container">
      <h2>Login</h2>
      <br></br>
      <form>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Email address
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" class="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Password
          </label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <button type="submit" class="btn btn-primary" onClick={(e) => login(e)}>
          Submit
        </button>
      </form>
    </div>
  );
}

async function login(e) {
  console.log("login");
  e.preventDefault();

  const email = document.getElementById("exampleInputEmail1").value;
  const password = document.getElementById("exampleInputPassword1").value;

  
  console.log("email: " + email);
  console.log("password: " + password);

  const data = {};
  data.email = email;
  data.password = password;

  console.log(data);

  const result = await fetch("http://localhost:3000/user/login", {
    mode: "no-cors",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

//   axios
//     .post("http://localhost:3000/user/login", request)
//     .then((resp) => {
//       alert(resp.data.message);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
}

export default App;

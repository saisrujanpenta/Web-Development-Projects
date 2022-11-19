// function App() {
import axios from 'axios';  
import React, { Component } from 'react';
  
//   // function login() {
//   //   // e.preventDefault();
//   //   let request = {
//   //     email: document.getElementById('exampleInputEmail1').value,
//   //     password: document.getElementById('exampleInputPassword1').value
//   //   }
//   //   axios.post('http://localhost:3000/user/login', request)
//   //   .then( resp => {
//   //     alert(resp.data.message);
//   //   })
//   //   .catch( err => {
//   //     console.log(err);
//   //   })
//   // }
  
//   return (
//     <div className="container">
//       <h2>Login</h2><br></br>
//       <form onSubmit={this.handleSubmit}>
//         <div class="mb-3">
//           <label for="exampleInputEmail1" class="form-label">Email address</label>
//           <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => this.setState({ email: e.target.value })}/>
//           <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
//         </div>
//         <div class="mb-3">
//           <label for="exampleInputPassword1" class="form-label">Password</label>
//           <input type="password" class="form-control" id="exampleInputPassword1" onChange={(e) => this.setState({ password: e.target.value })}/>
//         </div>
//         <button type="submit" class="btn btn-primary">Submit</button>
//       </form>
//     </div>
//   );

//   export default App;

export default class Login extends Component { constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    const { email, password } = this.state;
    console.log(email, password);
    axios.post("http://localhost:3000/user/login", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
        if (data.status === "ok") {
          alert("login successful");
          window.localStorage.setItem("token", data.data);
          window.location.href = "./userDetails";
        }
      });
  }
  
  render(){
    return (
        <div className="container">
        <h2>Login</h2><br></br>
        <form onSubmit={this.handleSubmit}>
            <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => this.setState({ email: e.target.value })}/>
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" onChange={(e) => this.setState({ password: e.target.value })}/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        </div>
    );
    }
}
  

  
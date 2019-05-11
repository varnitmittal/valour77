import React from "react";
import { Link, Redirect } from "react-router-dom";
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import Navbar from '../layout/navbar.component';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      errors: {},
      email: "",
      id: "",
      isLoggedIn: false
    }
  }

componentDidMount(){
    //checking if already logged in using jwt Token
    const lsToken = localStorage.getItem('tokenx77');
    if(lsToken){
      //decoding token to extract payload data
      const decoded = jwtDecode(lsToken);
      this.setState({
        username: decoded.username,
        email: decoded.email,
        id: decoded.id,
        isLoggedIn: true
      })
    }
  }

renderDashboard(){
  if(this.state.isLoggedIn){
    return <Redirect to={{
      pathname: "/dashboardWrap"
    }} />
  }
}

onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };
onSubmit = e => {
  e.preventDefault();
  const userData = {
    username: this.state.username,
    password: this.state.password
  };
  axios.post('/login', userData)
  .then(res => {
    if(res.data.error){
      window.alert(res.data.error)
    }
    else{
      //setter
      localStorage.setItem('tokenx77', res.data.token)
      this.setState({
        id: res.data.userData.id,
        username: res.data.userData.username,
        isLoggedIn: true
      });
    }
  })
  .catch(err => {
    console.log("ERROR!!")
    console.log(err)
  })
};

render() {
    const { errors } = this.state;
return (
     <div>
      <Navbar />
      <div className="container h-50">
        <div style={{ marginTop: "3rem" }} className="row h-100">
          <div className="col-xl-3 col-lg-2 col-md-1"></div>
          <div className="col-xl-6 col-lg-8 col-md-10 col-sm-12 my-auto mx-auto">
            <Link to="/" >
              <span style={{ paddingLeft: "11.250px" }}>
                Back to home
              </span>
            </Link>
            <div className="col-sm-12" style={{ paddingLeft: "11.250px" }}>
              <h4>
                <b>Login</b> below
              </h4>
              <p className="text-secondary">
                Don't have an account? <Link to="/register">Register</Link>
              </p>
            </div>
            <form noValidate className="form-group" onSubmit={this.onSubmit}>
              <div className="col-xs-12 lg-w-75 xs-w-100 p-2">
                <input
                  onChange={this.onChange}
                  value={this.state.username}
                  error={errors.username}
                  placeholder="Username"
                  id="username"
                  type="text"
                  className="p-2 form-control"
                />
              </div>
              <div className="col-xs-12 lg-w-75 xs-w-100 p-2">
                <input
                  onChange={this.onChange}
                  value={this.state.password}
                  error={errors.password}
                  placeholder="Password"
                  id="password"
                  type="password"
                  className="p-2 form-control"
                />
              </div>
              <div style={{ paddingLeft: "11.250px" }}>
                <button
                  style={{
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                    marginTop: "1rem"
                  }}
                  type="submit"
                  className="btn btn-primary btn-outline-primary btn-lg"
                >
                  Login
                </button>
                {this.renderDashboard()}
              </div>
            </form>
          </div>
          <div className="col-xl-3 col-lg-2 col-md-1"></div>
        </div>
      </div>
    </div>
    );
  }
}
export default Login;

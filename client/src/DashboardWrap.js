import React from 'react';
import jwtDecode from 'jwt-decode';
import axios from 'axios';

import "bootstrap/dist/css/bootstrap.min.css";

import Dashboard from './dashboardContent/dashboard';

class DashboardWrap extends React.Component {
  constructor(props){
    super(props);
    this.state = {
       isLoggedIn: false,
    }
  }
  componentDidMount(){
     axios.get('/checkToken')
    .then(res => {
    })
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
      });
    }
  }

  render() {
    return (
      <div>
        { this.state.isLoggedIn?
            <Dashboard />
            :
            <div>
              <h5> You're not Logged in. Please login first...</h5>
            </div>
        }        
      </div>

    )
  }
}

export default DashboardWrap;
import React from "react";
import jwtDecode from 'jwt-decode';

class Dashboard extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  componentDidMount(){
   const lsToken = localStorage.getItem('tokenx77');
   if(lsToken){
     const decoded = jwtDecode(lsToken);
     this.setState({
       username: decoded.username,
       email: decoded.email,
       id: decoded.id,
     });
   }
 }

  render() {
    return (
      <div className="content">
        <h2>Hi {this.state.username},</h2>
        <h5>Welcome to your dashboard!!</h5>
      </div>
    );
  }
}

export default Dashboard;

import React from 'react';
import { Redirect } from 'react-router-dom';

class Logout extends React.Component {
    constructor(props){
        super(props);
        this.state={
            isLoggedOut: false
        }
    }
    
  componentDidMount(){
    //removing local storage token
    localStorage.removeItem('tokenx77')
    this.setState({
        isLoggedOut: true
    })
  }

  componentWillUnmount(){
      if(this.state.isLoggedOut){
        window.location.reload();
      }
  }

  render() {
    return (
        <div className="content">
            {this.state.isLoggedOut ? 
                <div>
                    <Redirect to="/login" />  
                </div>
                : 
                <h2>
                    Logging you out...
                </h2>
            }
        </div>
    )
  }
}

export default Logout;

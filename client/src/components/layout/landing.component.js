import React from "react";
import { Button } from 'reactstrap';
import Navbar from './navbar.component';

class Landing extends React.Component {
  render() {
    return (
      <div>
         <Navbar />
        <div style={{ height: "75vh" }} className="container">
          <div className="row h-100">
            <div className="col-xm-12 my-auto mx-auto" style={{ textAlign: 'center'}}>
              <h4>
                <b>Welcome</b> to {" "}
                <span style={{ fontFamily: "monospace" }}>VALOUR</span>
              </h4>
              <h5 className="text-dark text-muted">
                A minimal full-stack MERN application with user authentication and
                interactive dashboard. 
              </h5>
              <br />
              <a href="/register">
                <Button 
                  style={{
                    width: "120px",
                    borderRadius: "30px",
                    letterSpacing: "1.7px",
                    marginLeft:'0.9rem'
                  }}
                  outline color="primary"
                >
                  Register
                </Button>
              </a>
              <a href="/login">
              <Button 
                style={{
                  width: "120px",
                  borderRadius: "30px",
                  letterSpacing: "1.7px",
                  margin:'0.9rem',
                }}
                outline color="success"
              >
                Login
              </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
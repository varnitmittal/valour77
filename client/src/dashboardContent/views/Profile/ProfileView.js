import React from "react";
import { Card, CardBody, CardFooter, Row, Col } from "reactstrap";
import jwtDecode from 'jwt-decode';
import CardAuthor from "../../components/CardElements/CardAuthor";
import person from '../../img/person.png';

class User extends React.Component {
  constructor(props){
    super(props);
    this.state={

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
        <Row>
          <Col md={3} xs={12}></Col>
          <Col md={6} xs={12}>
            <Card className="card-user">
              <div className="image"></div>
              <CardBody>
                 <CardAuthor
                    avatar={person}
                    avatarAlt="person-logo"
                    title={this.state.username}
                />
                <p className="description text-center">
                  "Something about you..."
                </p>
              </CardBody>
              <CardFooter>
                <hr />
                <div className="button-container">
                  <Row>
                    <Col xs={6} sm={6} md={6} lg={3} className="ml-auto">
                      <h5>
                        19
                        <br/>
                        <small>Age</small>
                      </h5>
                    </Col>
                    <Col xs={6} sm={6} md={6} lg={4} className="mr-auto ml-auto">
                      <h5>
                        F
                        <br/>
                        <small>Gender</small>
                      </h5>
                    </Col>
                    <Col lg={3} className="mr-auto">
                      <h5>
                        Premium
                        <br/>
                        <small>Membership</small>
                      </h5>
                    </Col>
                  </Row>
                </div>
              </CardFooter>
            </Card>
           </Col>
          <Col md={3} xs={12}></Col>
        </Row>
      </div>
    );
  }
}

export default User;

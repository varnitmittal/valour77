import React from "react";
import { Card, CardHeader, CardBody, CardTitle, Row, Col } from "reactstrap";
import jwtDecode from 'jwt-decode';
import FormInputs from "../../components/FormInputs/FormInputs";
import Button from "../../components/CustomButton/CustomButton";

class Account extends React.Component {
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
          <Col md={2} xs={12}></Col>
          <Col md={8} xs={12}>
            <Card className="card-user">
              <CardHeader>
                <CardTitle>Account Settings</CardTitle>
              </CardHeader>
              <CardBody>
                <form>
                  <FormInputs
                    ncols={["col-md-5 px-2 ", "col-md-7 px-2"]}
                    proprieties={[
                      {
                        label: "Username",
                        inputProps: {
                          type: "text",
                          defaultValue: this.state.username
                        }
                      },
                      {
                        label: "Email address",
                        inputProps: {
                          type: "email",
                          placeholder: this.state.email
                        }
                      }
                    ]}
                  />
                  <Row>
                    <div className="update ml-auto mr-auto">
                      <Button color="secondary" round disabled>Update Profile</Button>
                    </div>
                  </Row>
                </form>
              </CardBody>
            </Card>
          </Col>
          <Col md={2} xs={12}></Col>
        </Row>
      </div>
    );
  }
}

export default Account;

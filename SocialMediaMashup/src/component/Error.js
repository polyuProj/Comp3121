import React from "react";
import Header from "./Header";
import { Card, CardBody, Button } from "reactstrap";

class Error extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleBack = event => {
    event.preventDefault();
    this.props.history.push("/");
  };

  render() {
    return (
      <div className="container">
        <Header />
        <br />
        <div align="center">
          <Card>
            <CardBody>
              <div>404 - Page not found.</div>
            </CardBody>
          </Card>
          <br />
          <Button color="primary" size="lg" block onClick={this.handleBack}>
            Go to main page
          </Button>
        </div>
      </div>
    );
  }
}
export default Error;

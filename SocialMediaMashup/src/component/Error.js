import React from "react";
import Header from "./Header";
import { Card, CardBody } from "reactstrap";

class Error extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container">
        <Header />
        <br />
        <div align="center">
          <Card>
            <CardBody>
              <div>404 Page not found.</div>
            </CardBody>
          </Card>
        </div>
      </div>
    );
  }
}
export default Error;

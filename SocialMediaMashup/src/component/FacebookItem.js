import React from "react";
import { Card, CardText, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import moment from "moment";

export default props => (
  <Card>
    <CardBody>
      <CardTitle>
        <h4>{props.title}</h4>
      </CardTitle>
      <CardSubtitle>{props.description}</CardSubtitle>
      <CardText>
        <small className="text-muted">
          {moment(props.publishedAt).fromNow()}
        </small>
      </CardText>
    </CardBody>
  </Card>
);

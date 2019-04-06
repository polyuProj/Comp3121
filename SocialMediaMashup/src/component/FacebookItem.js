import React from "react";
import {
  Card,
  CardText,
  CardHeader,
  CardBody,
  CardTitle,
  CardSubtitle
} from "reactstrap";
import moment from "moment";

export default props => (
  <Card>
    <CardHeader>
      <img
        src={props.icon}
        alt=""
        style={{
          width: props.iconStyle.width,
          height: props.iconStyle.height,
          marginRight: "10px"
        }}
      />
      {props.header}
    </CardHeader>
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

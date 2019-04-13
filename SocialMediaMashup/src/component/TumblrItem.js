import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  Row,
  Col,
  Button,
  Badge
} from "reactstrap";
import moment from "moment";

export default props => (
  <Card>
    <CardBody>
      <CardTitle>
        <h4>
          <div dangerouslySetInnerHTML={{ __html: props.title }} />
        </h4>
      </CardTitle>
      <CardSubtitle>
        <div dangerouslySetInnerHTML={{ __html: props.description }} />
      </CardSubtitle>
      <Row style={{ marginLeft: "3px", marginRight: "3px" }}>
        {Object.keys(props.tags).map(key => (
          <div key={key}>
            <Badge
              color="primary"
              pill
              style={{ marginLeft: "2px", marginRight: "2px" }}
            >
              {props.tags[key]}
            </Badge>
          </div>
        ))}
      </Row>
      <div style={{ height: "10px" }}>&nbsp;</div>
      <Row>
        <Col xs="5">
          <Button
            color="secondary"
            size="sm"
            active
            onClick={event => {
              event.preventDefault();
              window.open(props.url, "_blank");
            }}
          >
            Open
          </Button>
        </Col>
        <Col xs="7">
          <div align="right">
            <small className="text-muted">
              {moment(props.publishedAt).fromNow()}
            </small>
          </div>
        </Col>
      </Row>
    </CardBody>
  </Card>
);

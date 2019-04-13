import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  Row,
  Col,
  Button
} from "reactstrap";
import moment from "moment";
import * as Config from "../utils/Config";

export default props => (
  <Card>
    <CardBody>
      <CardTitle>
        <h4>
          <div dangerouslySetInnerHTML={{ __html: props.title }} />
        </h4>
      </CardTitle>
      <CardSubtitle>{props.description}</CardSubtitle>
      <iframe
        title={props.index}
        style={{
          height: "300px",
          width: "100%"
        }}
        src={Config.YOUTUBE_VIDEO_URL + props.videoId}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
      <Row>
        <Col xs="5">
          <Button
            color="secondary"
            size="sm"
            active
            onClick={event => {
              event.preventDefault();
              window.open(
                Config.YOUTUBE_VIDEO_WATCH_URL + props.videoId,
                "_blank"
              );
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

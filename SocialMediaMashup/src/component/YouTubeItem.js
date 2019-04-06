import React from "react";
import { Card, CardText, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import moment from "moment";
import * as Config from "../utils/Config";

export default props => (
  <Card>
    <CardBody>
      <CardTitle>
        <h4>{props.title}</h4>
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
      <CardText>
        <small className="text-muted">
          {moment(props.publishedAt).fromNow()}
        </small>
      </CardText>
    </CardBody>
  </Card>
);

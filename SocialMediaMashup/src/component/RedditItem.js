import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  Row,
  Col,
  Button,
  CardImg
} from "reactstrap";
import * as Config from "../utils/Config";
import moment from "moment";
import UpIcon from "../img/icon_up.png";
import DownIcon from "../img/icon_down.png";
import CommentsIcon from "../img/icon_comments.png";

export default props => (
  <Card>
    <CardBody>
      <CardTitle>
        <h4>{props.title}</h4>
      </CardTitle>
      <CardImg
        style={{ width: "100%", height: "100%" }}
        src={props.photo}
        alt=""
      />
      <div style={{ height: "10px" }}>&nbsp;</div>
      <Row>
        <Col xs="4" align="center">
          <div>
            <img
              src={UpIcon}
              style={{ width: "20px", height: "20px", marginRight: "5px" }}
            />
            {props.ups}
          </div>
        </Col>
        <Col xs="4" align="center">
          <div>
            <img
              src={DownIcon}
              style={{ width: "20px", height: "20px", marginRight: "5px" }}
            />
            {props.downs}
          </div>
        </Col>
        <Col xs="4" align="center">
          <img
            src={CommentsIcon}
            style={{ width: "20px", height: "20px", marginRight: "5px" }}
          />
          {props.numComments}
        </Col>
      </Row>
      <div style={{ height: "10px" }}>&nbsp;</div>
      <Row>
        <Col xs="3">
          <Button
            color="secondary"
            size="sm"
            active
            onClick={event => {
              event.preventDefault();
              window.open(Config.REDDIT_POST_URL + props.permalink, "_blank");
            }}
          >
            Open
          </Button>
        </Col>
        <Col xs="9">
          <div align="right">
            <small className="text-muted">
              <div>Post by u/{props.author}</div>
              <div>{"(" + moment.unix(props.publishedAt).fromNow() + ")"}</div>
            </small>
          </div>
        </Col>
      </Row>
    </CardBody>
  </Card>
);

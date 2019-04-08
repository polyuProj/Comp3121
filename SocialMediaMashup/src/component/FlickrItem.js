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
import * as Config from "../utils/Config";

export default props => (
  <Card>
    <CardBody>
      <CardTitle>
        <h4>{props.title}</h4>
      </CardTitle>
      <img
        style={{ width: "100%", height: "100%" }}
        src={
          "https://farm" +
          props.farmId +
          ".staticflickr.com/" +
          props.serverId +
          "/" +
          props.photoId +
          "_" +
          props.secret +
          "_m" +
          ".jpg"
        }
        alt=""
      />
      <div style={{ height: "10px" }}>&nbsp;</div>
      <Row>
        <Col>
          <Button
            color="secondary"
            size="sm"
            active
            onClick={event => {
              event.preventDefault();
              window.open(
                Config.FLICKR_USER_PHOTOS_URL +
                  props.owner +
                  "/" +
                  props.photoId,
                "_blank"
              );
            }}
          >
            Open
          </Button>
        </Col>
      </Row>
    </CardBody>
  </Card>
);

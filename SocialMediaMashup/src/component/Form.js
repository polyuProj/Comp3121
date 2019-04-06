import React from "react";
import axios from "axios";
import {
  CardBody,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Card,
  Button,
  Row,
  Col
} from "reactstrap";
import { Spinner } from "reactstrap";
import classnames from "classnames";
import * as Config from "../utils/Config";
import * as Constant from "../utils/Constant";
import YoutubeIcon from "../img/icon_youtube.png";
import FacebookIcon from "../img/icon_facebook.png";
import YouTubeItem from "./YouTubeItem";
import FacebookItem from "./FacebookItem";

const YouTubeIconStyle = {
  width: "32px",
  height: "23px"
};

const FacebookIconStyle = {
  width: "23px",
  height: "23px"
};

const xxxIconStyle = {
  width: "23px",
  height: "23px"
};

const xxxxIconStyle = {
  width: "23px",
  height: "23px"
};

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      keyword: "",
      videoList: [],
      activeTab: "1"
    };
    // This binding is necessary to make `this` work in the callback
    this.getYouTubeItems = this.getYouTubeItems.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  getYouTubeItems = () => {
    this.setState({ loading: true });
    var getData = {
      params: {
        part: "snippet",
        maxResults: "10",
        q: this.state.keyword,
        // order: "date",
        type: "video",
        key: Constant.YOUTUBE_API_KEY
      }
    };
    let axiosConfig = {
      headers: {
        "Content-Type": "application/json"
      }
    };
    axios
      .get(Config.YOUTUBE_API_URL, getData, axiosConfig)
      .then(res => {
        this.setState({ videoList: res.data.items, loading: false });
      })
      .catch(err => {
        console.log("ERROR: ", err);
      });
  };

  updateKeyword = e => {
    this.setState({ keyword: e.target.value }, () => {});
  };

  handleSubmit = event => {
    event.preventDefault();
    this.getYouTubeItems();
  };

  displayForm = () => {
    return (
      <Card>
        <CardBody>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Keyword</label>
              <input
                className="form-control"
                placeholder="Enter keyword"
                value={this.state.keyword}
                onChange={this.updateKeyword}
              />
            </div>
            <Button type="submit" color="primary" size="lg" block>
              Submit
            </Button>
          </form>
        </CardBody>
      </Card>
    );
  };

  displayNoDataFound = () => {
    return (
      <div align="center">
        <Card>
          <CardBody>
            <div>No data found.</div>
          </CardBody>
        </Card>
      </div>
    );
  };

  render() {
    if (this.state.loading) {
      return (
        <div className="container">
          <br />
          {this.displayForm()}
          <br />
          <Spinner color="success" />
        </div>
      );
    }

    if (!this.state.videoList.length) {
      return (
        <div className="container">
          <br />
          {this.displayForm()}
          <br />
          {this.displayNoDataFound()}
        </div>
      );
    }

    return (
      <div className="container">
        <br />
        {this.displayForm()}
        <br />
        <Card>
          <CardBody>
            <Nav tabs>
              <NavItem>
                <NavLink
                  className={classnames({
                    active: this.state.activeTab === "1"
                  })}
                  onClick={() => {
                    this.toggle("1");
                  }}
                >
                  <img
                    src={YoutubeIcon}
                    alt=""
                    style={{
                      width: YouTubeIconStyle.width,
                      height: YouTubeIconStyle.height,
                      marginRight: "10px"
                    }}
                  />
                  YouTube
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({
                    active: this.state.activeTab === "2"
                  })}
                  onClick={() => {
                    this.toggle("2");
                  }}
                >
                  <img
                    src={FacebookIcon}
                    alt=""
                    style={{
                      width: FacebookIconStyle.width,
                      height: FacebookIconStyle.height,
                      marginRight: "10px"
                    }}
                  />
                  Facebook
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({
                    active: this.state.activeTab === "3"
                  })}
                  onClick={() => {
                    this.toggle("3");
                  }}
                >
                  <img
                    src={null}
                    alt=""
                    style={{
                      width: xxxIconStyle.width,
                      height: xxxIconStyle.height,
                      marginRight: "10px"
                    }}
                  />
                  API1
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({
                    active: this.state.activeTab === "4"
                  })}
                  onClick={() => {
                    this.toggle("4");
                  }}
                >
                  <img
                    src={null}
                    alt=""
                    style={{
                      width: xxxxIconStyle.width,
                      height: xxxxIconStyle.height,
                      marginRight: "10px"
                    }}
                  />
                  API2
                </NavLink>
              </NavItem>
            </Nav>
            <TabContent activeTab={this.state.activeTab}>
              <TabPane tabId="1">
                <Row>
                  <Col sm="12">
                    <br />

                    {this.state.videoList.map((video, index) => (
                      <div key={index}>
                        <YouTubeItem
                          index={index}
                          title={video.snippet.title}
                          description={video.snippet.description}
                          videoId={video.id.videoId}
                          publishedAt={video.snippet.publishedAt}
                        />
                        <div style={{ height: "10px" }}>&nbsp;</div>
                      </div>
                    ))}
                  </Col>
                </Row>
              </TabPane>
              <TabPane tabId="2">
                <Row>
                  <Col sm="12">
                    <br />
                    {this.state.videoList.map((video, index) => (
                      <div key={index}>
                        <FacebookItem
                          index={index}
                          title={video.snippet.title}
                          description={video.snippet.description}
                          videoId={video.id.videoId}
                          publishedAt={video.snippet.publishedAt}
                        />
                        <div style={{ height: "10px" }}>&nbsp;</div>
                      </div>
                    ))}
                  </Col>
                </Row>
              </TabPane>
              <TabPane tabId="3">
                <Row>
                  <Col sm="12">
                    <br />
                    {this.state.videoList.map((video, index) => (
                      <div key={index}>
                        <FacebookItem
                          index={index}
                          title={video.snippet.title}
                          description={video.snippet.description}
                          videoId={video.id.videoId}
                          publishedAt={video.snippet.publishedAt}
                        />
                        <div style={{ height: "10px" }}>&nbsp;</div>
                      </div>
                    ))}
                  </Col>
                </Row>
              </TabPane>
              <TabPane tabId="4">
                <Row>
                  <Col sm="12">
                    <br />
                    {this.state.videoList.map((video, index) => (
                      <div key={index}>
                        <FacebookItem
                          index={index}
                          title={video.snippet.title}
                          description={video.snippet.description}
                          videoId={video.id.videoId}
                          publishedAt={video.snippet.publishedAt}
                        />
                        <div style={{ height: "10px" }}>&nbsp;</div>
                      </div>
                    ))}
                  </Col>
                </Row>
              </TabPane>
            </TabContent>
          </CardBody>
        </Card>
      </div>
    );
  }
}
export default Form;

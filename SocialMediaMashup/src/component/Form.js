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
      keyword: "",
      isYouTubeApiProcessing: false,
      isFacebookApiProcessing: false,
      isXXXApiProcessing: false,
      isXXXXApiProcessing: false,
      youtubeList: [],
      facebookList: [],
      xxxList: [],
      xxxxList: [],
      activeTab: "1"
    };

    // This binding is necessary to make `this` work in the callback
    this.toggle = this.toggle.bind(this);
    this.retrieveYouTubeItems = this.retrieveYouTubeItems.bind(this);
    this.retrieveFacebookItems = this.retrieveFacebookItems.bind(this);
    this.retrieveXXXItems = this.retrieveXXXItems.bind(this);
    this.retrieveXXXXItems = this.retrieveXXXXItems.bind(this);
    this.showLoadingForYouTube = this.showLoadingForYouTube.bind(this);
    this.showLoadingForFacebook = this.showLoadingForFacebook.bind(this);
    this.showLoadingForXXX = this.showLoadingForXXX.bind(this);
    this.showLoadingForXXXX = this.showLoadingForXXXX.bind(this);
    this.showNoDataForYouTube = this.showNoDataForYouTube.bind(this);
    this.showNoDataForFacebook = this.showNoDataForFacebook.bind(this);
    this.showNoDataForXXX = this.showNoDataForXXX.bind(this);
    this.showNoDataForXXXX = this.showNoDataForXXXX.bind(this);
  }

  // Network
  retrieveYouTubeItems = () => {
    this.setState({ isYouTubeApiProcessing: true });
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
        this.setState({
          youtubeList: res.data.items,
          isYouTubeApiProcessing: false
        });
      })
      .catch(err => {
        console.log("ERROR: ", err);
        this.setState({
          isYouTubeApiProcessing: false
        });
      });
  };

  retrieveFacebookItems = () => {
    this.setState({ isFacebookApiProcessing: true });
    var getData = {
      params: {
        part: "snippet",
        maxResults: "10",
        q: this.state.keyword,
        // order: "date",
        type: "video",
        key: Constant.FACEBOOK_API_KEY
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
        this.setState({
          facebookList: res.data.items,
          isFacebookApiProcessing: false
        });
      })
      .catch(err => {
        console.log("ERROR: ", err);
        this.setState({
          isFacebookApiProcessing: false
        });
      });
  };

  retrieveXXXItems = () => {
    this.setState({ isXXXApiProcessing: true });
    var getData = {
      params: {
        part: "snippet",
        maxResults: "10",
        q: this.state.keyword,
        // order: "date",
        type: "video",
        key: Constant.FACEBOOK_API_KEY
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
        this.setState({ xxxList: res.data.items, isXXXApiProcessing: false });
      })
      .catch(err => {
        console.log("ERROR: ", err);
        this.setState({
          isXXXApiProcessing: false
        });
      });
  };

  retrieveXXXXItems = () => {
    this.setState({ isXXXXApiProcessing: true });
    var getData = {
      params: {
        part: "snippet",
        maxResults: "10",
        q: this.state.keyword,
        // order: "date",
        type: "video",
        key: Constant.FACEBOOK_API_KEY
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
        this.setState({
          xxxxList: res.data.items,
          isXXXXApiProcessing: false
        });
      })
      .catch(err => {
        console.log("ERROR: ", err);
        this.setState({
          isXXXXApiProcessing: false
        });
      });
  };
  // Network

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  updateKeyword = e => {
    this.setState({ keyword: e.target.value }, () => {});
  };

  handleSubmit = event => {
    event.preventDefault();
    this.retrieveYouTubeItems();
    this.retrieveFacebookItems();
    this.retrieveXXXItems();
    this.retrieveXXXXItems();
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

  showLoadingForYouTube = () => {
    if (this.state.isYouTubeApiProcessing) {
      return <Spinner color="success" />;
    }
    return null;
  };

  showLoadingForFacebook = () => {
    if (this.state.isFacebookApiProcessing) {
      return <Spinner color="success" />;
    }
    return null;
  };

  showLoadingForXXX = () => {
    if (this.state.isXXXApiProcessing) {
      return <Spinner color="success" />;
    }
    return null;
  };

  showLoadingForXXXX = () => {
    if (this.state.isXXXXApiProcessing) {
      return <Spinner color="success" />;
    }
    return null;
  };

  showNoDataForYouTube = () => {
    if (!this.state.youtubeList.length && !this.state.isYouTubeApiProcessing) {
      return this.displayNoDataFound();
    }
    return null;
  };

  showNoDataForFacebook = () => {
    if (
      !this.state.facebookList.length &&
      !this.state.isFacebookApiProcessing
    ) {
      return this.displayNoDataFound();
    }
    return null;
  };

  showNoDataForXXX = () => {
    if (!this.state.xxxList.length && !this.state.isXXXApiProcessing) {
      return this.displayNoDataFound();
    }
    return null;
  };

  showNoDataForXXXX = () => {
    if (!this.state.xxxxList.length && !this.state.isXXXXApiProcessing) {
      return this.displayNoDataFound();
    }
    return null;
  };

  render() {
    if (
      !this.state.youtubeList.length &&
      !this.state.facebookList.length &&
      !this.state.xxxList.length &&
      !this.state.xxxxList.length
    ) {
      return (
        <div>
          <br />
          {this.displayForm()}
          <br />
          {this.displayNoDataFound()}
        </div>
      );
    }

    return (
      <div>
        <br />
        {this.displayForm()}
        <br />
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
              Instagram
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
              Instagram
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Row>
              <Col sm="12">
                <br />
                {this.showLoadingForYouTube()}
                {this.showNoDataForYouTube()}
                {this.state.youtubeList.map((video, index) => (
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
                {this.showLoadingForFacebook()}
                {this.showNoDataForFacebook()}
                {this.state.facebookList.map((video, index) => (
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
                {this.showLoadingForXXX()}
                {this.showNoDataForXXX()}
                {this.state.xxxList.map((video, index) => (
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
                {this.showLoadingForXXXX()}
                {this.showNoDataForXXXX()}
                {this.state.xxxxList.map((video, index) => (
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
      </div>
    );
  }
}
export default Form;

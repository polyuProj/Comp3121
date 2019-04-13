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
  Col,
  CardColumns
} from "reactstrap";
import { Spinner } from "reactstrap";
import classnames from "classnames";
import * as Config from "../utils/Config";
import * as Constant from "../utils/Constant";
import YoutubeIcon from "../img/icon_youtube.png";
import RedditIcon from "../img/icon_reddit.png";
import TumblrIcon from "../img/icon_tumblr.png";
import FlickrIcon from "../img/icon_flickr.png";
import YouTubeItem from "./YouTubeItem";
import TumblrItem from "./TumblrItem";
import FlickrItem from "./FlickrItem";
import RedditItem from "./RedditItem";

const YouTubeIconStyle = {
  width: "32px",
  height: "23px"
};

const RedditIconStyle = {
  width: "23px",
  height: "23px"
};

const TumblrIconStyle = {
  width: "23px",
  height: "23px"
};

const FlickrIconStyle = {
  width: "23px",
  height: "23px"
};

const tumblr = require("tumblr.js");
const client = tumblr.createClient({
  consumer_key: Constant.TUMBLR_CONSUMER_KEY,
  consumer_secret: Constant.TUMBLR_CONSUMER_SECRET,
  token: Constant.TUMBLR_TOKEN,
  token_secret: Constant.TUMBLR_TOKEN_SECRET
});

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: "",
      isLoading: false,
      isYouTubeApiProcessing: false,
      isRedditApiProcessing: false,
      isTumblrApiProcessing: false,
      isFlickrApiProcessing: false,
      youtubeList: [],
      redditList: [],
      tumblrList: [],
      flickrList: [],
      activeTab: "1"
    };

    // This binding is necessary to make `this` work in the callback
    this.toggle = this.toggle.bind(this);
    this.retrieveYouTubeItems = this.retrieveYouTubeItems.bind(this);
    this.retrieveRedditItems = this.retrieveRedditItems.bind(this);
    this.retrieveTumblrItems = this.retrieveTumblrItems.bind(this);
    this.retrieveFlickrItems = this.retrieveFlickrItems.bind(this);
    this.showLoadingForYouTube = this.showLoadingForYouTube.bind(this);
    this.showLoadingForReddit = this.showLoadingForReddit.bind(this);
    this.showLoadingForTumblr = this.showLoadingForTumblr.bind(this);
    this.showLoadingForFlickr = this.showLoadingForFlickr.bind(this);
    this.showNoDataForYouTube = this.showNoDataForYouTube.bind(this);
    this.showNoDataForReddit = this.showNoDataForReddit.bind(this);
    this.showNoDataForTumblr = this.showNoDataForTumblr.bind(this);
    this.showNoDataForFlickr = this.showNoDataForFlickr.bind(this);
    this.TumblrApiCallback = this.TumblrApiCallback.bind(this);
  }

  // Native method
  componentDidMount() {
    this.setState({
      keyword: "NBA",
      isLoading: true
    });

    setTimeout(() => {
      this.setState({
        isLoading: false
      });
      this.retrieveYouTubeItems();
      this.retrieveRedditItems();
      this.retrieveTumblrItems();
      this.retrieveFlickrItems();
    }, 2000);
  }
  // Native method

  // Network
  retrieveYouTubeItems = () => {
    this.setState({ isYouTubeApiProcessing: true });
    var getData = {
      params: {
        part: "snippet",
        maxResults: "10",
        q: this.state.keyword,
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

  retrieveRedditItems = () => {
    this.setState({ isRedditApiProcessing: true });
    var getData = {
      params: {
        q: this.state.keyword
      }
    };
    let axiosConfig = {
      headers: {
        "Content-Type": "application/json"
      }
    };
    axios
      .get(Config.REDDIT_URL, getData, axiosConfig)
      .then(res => {
        console.log(res);
        this.setState({
          redditList: res.data.data.children,
          isRedditApiProcessing: false
        });
      })
      .catch(err => {
        console.log("ERROR: ", err);
        this.setState({
          isRedditApiProcessing: false
        });
      });
  };

  retrieveTumblrItems = () => {
    this.setState({ isTumblrApiProcessing: true });

    // Make the request
    client.taggedPosts(
      this.state.keyword,
      { filter: "text" },
      this.TumblrApiCallback
    );
  };

  retrieveFlickrItems = () => {
    this.setState({ isFlickrApiProcessing: true });
    var getData = {
      params: {
        method: "flickr.photos.search",
        text: this.state.keyword,
        per_page: 50,
        api_key: Constant.FLICKR_API_KEY
      }
    };
    let axiosConfig = {
      headers: {
        "Content-Type": "application/json"
      }
    };
    axios
      .get(Config.FLICKR_API_URL, getData, axiosConfig)
      .then(res => {
        var XMLParser = require("react-xml-parser");
        var xml = new XMLParser().parseFromString(res.data);
        this.setState({
          flickrList: xml.getElementsByTagName("photo"),
          isFlickrApiProcessing: false
        });
      })
      .catch(err => {
        console.log("ERROR: ", err);
        this.setState({
          isFlickrApiProcessing: false
        });
      });
  };
  // Network

  TumblrApiCallback(err, data) {
    if (err) {
      console.log("1" + err);
    }
    this.setState({ tumblrList: data, isTumblrApiProcessing: false });
  }

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
    this.retrieveRedditItems();
    this.retrieveTumblrItems();
    this.retrieveFlickrItems();
  };

  displayForm = () => {
    return (
      <Card>
        <CardBody>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <input
                className="form-control"
                placeholder="Enter keyword"
                value={this.state.keyword}
                onChange={this.updateKeyword}
              />
            </div>
            <Button type="submit" color="primary" size="lg" block>
              Search
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

  displayPleaseWait = () => {
    return (
      <div align="center">
        <Card>
          <CardBody>
            <div>Loading...</div>
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

  showLoadingForReddit = () => {
    if (this.state.isRedditApiProcessing) {
      return <Spinner color="success" />;
    }
    return null;
  };

  showLoadingForTumblr = () => {
    if (this.state.isTumblrApiProcessing) {
      return <Spinner color="success" />;
    }
    return null;
  };

  showLoadingForFlickr = () => {
    if (this.state.isFlickrApiProcessing) {
      return <Spinner color="success" />;
    }
    return null;
  };

  showNoDataForYouTube = () => {
    if (
      this.state.youtubeList === null &&
      !this.state.youtubeList.length &&
      !this.state.isYouTubeApiProcessing
    ) {
      return this.displayNoDataFound();
    }
    return null;
  };

  showNoDataForReddit = () => {
    if (
      this.state.redditList === null &&
      !this.state.redditList.length &&
      !this.state.isRedditApiProcessing
    ) {
      return this.displayNoDataFound();
    }
    return null;
  };

  showNoDataForTumblr = () => {
    if (
      this.state.tumblrList === null &&
      !this.state.tumblrList.length &&
      !this.state.isTumblrApiProcessing
    ) {
      return this.displayNoDataFound();
    }
    return null;
  };

  showNoDataForFlickr = () => {
    if (
      this.state.flickrList === null &&
      !this.state.flickrList.length &&
      !this.state.isFlickrApiProcessing
    ) {
      return this.displayNoDataFound();
    }
    return null;
  };

  render() {
    if (
      !this.state.youtubeList.length &&
      !this.state.redditList.length &&
      !this.state.tumblrList.length &&
      !this.state.flickrList.length
    ) {
      return (
        <div>
          <br />
          {this.displayForm()}
          <br />
          {this.state.isLoading === true ? this.displayPleaseWait() : null}
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
                src={RedditIcon}
                alt=""
                style={{
                  width: RedditIconStyle.width,
                  height: RedditIconStyle.height,
                  marginRight: "10px"
                }}
              />
              Reddit
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
                src={TumblrIcon}
                alt=""
                style={{
                  width: TumblrIconStyle.width,
                  height: TumblrIconStyle.height,
                  marginRight: "10px"
                }}
              />
              Tumblr
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
                src={FlickrIcon}
                alt=""
                style={{
                  width: FlickrIconStyle.width,
                  height: FlickrIconStyle.height,
                  marginRight: "10px"
                }}
              />
              Flickr
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <br />
            {this.showLoadingForYouTube()}
            {this.showNoDataForYouTube()}
            <CardColumns>
              <Row>
                <Col sm="12">
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
            </CardColumns>
          </TabPane>
          <TabPane tabId="2">
            <br />
            {this.showLoadingForReddit()}
            {this.showNoDataForReddit()}
            <CardColumns>
              <Row>
                <Col sm="12">
                  {this.state.redditList.map((item, index) => (
                    <div key={index}>
                      <RedditItem
                        index={index}
                        title={item.data.title}
                        photo={item.data.url}
                        ups={item.data.ups}
                        downs={item.data.downs}
                        permalink={item.data.permalink}
                        author={item.data.author_fullname}
                        numComments={item.data.num_comments}
                        publishedAt={item.data.created_utc}
                      />
                      <div style={{ height: "10px" }}>&nbsp;</div>
                    </div>
                  ))}
                </Col>
              </Row>
            </CardColumns>
          </TabPane>
          <TabPane tabId="3">
            <br />
            {this.showLoadingForTumblr()}
            {this.showNoDataForTumblr()}
            <CardColumns>
              <Row>
                <Col sm="12">
                  {console.log(this.state.tumblrList)}
                  {this.state.tumblrList.map((item, index) => (
                    <div key={index}>
                      <TumblrItem
                        index={index}
                        title={item.blog_name}
                        tags={item.tags}
                        description={item.blog.description}
                        url={item.post_url}
                        publishedAt={item.date}
                      />
                      <div style={{ height: "10px" }}>&nbsp;</div>
                    </div>
                  ))}
                </Col>
              </Row>
            </CardColumns>
          </TabPane>

          <TabPane tabId="4">
            <br />
            {this.showLoadingForFlickr()}
            {this.showNoDataForFlickr()}
            <CardColumns>
              <Row>
                <Col sm="12">
                  {this.state.flickrList.map((item, index) => (
                    <div key={index}>
                      <FlickrItem
                        index={item.attributes.id}
                        title={item.attributes.title}
                        owner={item.attributes.owner}
                        farmId={item.attributes.farm}
                        serverId={item.attributes.server}
                        photoId={item.attributes.id}
                        secret={item.attributes.secret}
                      />
                      <div style={{ height: "10px" }}>&nbsp;</div>
                    </div>
                  ))}
                </Col>
              </Row>
            </CardColumns>
          </TabPane>
        </TabContent>
      </div>
    );
  }
}
export default Form;

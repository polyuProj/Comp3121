import React from "react";
import axios from "axios";
import {
  Card,
  CardImg,
  CardHeader,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";
import { Spinner } from "reactstrap";
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
  width: "0px",
  height: "0px"
};

const xxxxIconStyle = {
  width: "0px",
  height: "0px"
};

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      keyword: "",
      videoList: []
    };
    // This binding is necessary to make `this` work in the callback
    this.getVideos = this.getVideos.bind(this);
  }

  getVideos = () => {
    this.setState({ loading: true });
    var getData = {
      params: {
        part: "snippet",
        maxResults: "5",
        q: this.state.keyword,
        order: "date",
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
    this.getVideos();
  };

  displayForm = () => {
    return (
      <div className="card">
        <div className="card-body">
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
        </div>
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
          <div align="center">
            <Card>
              <CardBody>
                <div>No data found.</div>
              </CardBody>
            </Card>
          </div>
        </div>
      );
    }

    return (
      <div className="container">
        <br />
        {this.displayForm()}
        <br />
        {this.state.videoList.map((video, index) => (
          <div key={index}>
            <YouTubeItem
              icon={YoutubeIcon}
              iconStyle={YouTubeIconStyle}
              header="YouTube"
              index={index}
              title={video.snippet.title}
              description={video.snippet.description}
              videoId={video.id.videoId}
              publishedAt={video.snippet.publishedAt}
            />
            <div style={{ height: "10px" }}>&nbsp;</div>
          </div>
        ))}
        {this.state.videoList.map((video, index) => (
          <div key={index}>
            <FacebookItem
              icon={FacebookIcon}
              iconStyle={FacebookIconStyle}
              header="Facebook"
              index={index}
              title={video.snippet.title}
              description={video.snippet.description}
              videoId={video.id.videoId}
              publishedAt={video.snippet.publishedAt}
            />
            <div style={{ height: "10px" }}>&nbsp;</div>
          </div>
        ))}
        {this.state.videoList.map((video, index) => (
          <div key={index}>
            <YouTubeItem
              iconStyle={YouTubeIconStyle}
              header="??????"
              index={index}
              title={video.snippet.title}
              description={video.snippet.description}
              videoId={video.id.videoId}
              publishedAt={video.snippet.publishedAt}
            />
            <div style={{ height: "10px" }}>&nbsp;</div>
          </div>
        ))}
        {this.state.videoList.map((video, index) => (
          <div key={index}>
            <YouTubeItem
              iconStyle={YouTubeIconStyle}
              header="??????"
              index={index}
              title={video.snippet.title}
              description={video.snippet.description}
              videoId={video.id.videoId}
              publishedAt={video.snippet.publishedAt}
            />
            <div style={{ height: "10px" }}>&nbsp;</div>
          </div>
        ))}
      </div>
    );
  }
}
export default Form;

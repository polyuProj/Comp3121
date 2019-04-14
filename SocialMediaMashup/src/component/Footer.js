import React from "react";

export default class Footer extends React.Component {
  render() {
    return (
      <div>
        <br />
        Share to :
        <a
          href="https://twitter.com/intent/tweet?text=2019%20Powerful%20Social%20Media%20Mashup%20for%20NBA%20https://polyuproj.github.io/Mashup/SocialMediaMashup/build/"
          target="_blank"
        >
          <img
            class="sidecar-icon"
            style={{ width: "30px", height: "30px", margin: "5px" }}
            src="//idge.staticworld.net/images/twitter.svg"
          />
        </a>
        <a
          href="https://www.facebook.com/sharer/sharer.php?u=https://polyuproj.github.io/Mashup/SocialMediaMashup/build/"
          target="_blank"
        >
          <img
            style={{ width: "30px", height: "30px", margin: "5px" }}
            src="//idge.staticworld.net/images/facebook.svg"
          />
        </a>
        <a
          href="http://www.linkedin.com/shareArticle?url=https://polyuproj.github.io/Mashup/SocialMediaMashup/build/&amp;title=2019%20Powerful%20Social%20Media%20Mashup%20for++NBA"
          target="_blank"
        >
          <img
            style={{ width: "30px", height: "30px", margin: "5px" }}
            src="//idge.staticworld.net/images/linkedin.svg"
          />
        </a>
        <a
          href="http://reddit.com/submit?url=https://polyuproj.github.io/Mashup/SocialMediaMashup/build/&amp;title=2019%20Powerful%20Social%20Media%20Mashup%20for%20NBA"
          target="_blank"
        >
          <img
            style={{ width: "30px", height: "30px", margin: "5px" }}
            src="//idge.staticworld.net/images/reddit.svg"
          />
        </a>
        <a href="javascript:window.print();">
          <img
            style={{ width: "30px", height: "30px", margin: "5px" }}
            src="//idge.staticworld.net/images/print.svg"
          />
        </a>
      </div>
    );
  }
}

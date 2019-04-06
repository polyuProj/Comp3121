import React from "react";
import Header from "./Header";
import Form from "./Form";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container">
        <Header />
        <Form />
      </div>
    );
  }
}
export default Home;

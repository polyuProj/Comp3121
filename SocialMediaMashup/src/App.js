import React, { Component } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Home from "./component/Home";
import Error from "./component/Error";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route component={Error} />
          </Switch>
        </div>
      </HashRouter>
    );
  }
}

export default App;

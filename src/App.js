import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { Store } from "./store/Store";

export class App extends Component {

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/store" component={Store} />
          <Redirect to="/store" />
        </Switch>
      </Router>
    );
  }

}

export default App;

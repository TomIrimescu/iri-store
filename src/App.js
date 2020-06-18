import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { Store } from "./store/Store";
import { Admin } from "./admin/Admin";

export class App extends Component {

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/store" component={Store} />
          <Route path="/admin" component={Admin} />
          <Redirect to="/store" />
        </Switch>
      </Router>
    );
  }

}

export default App;

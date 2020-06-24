import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { Store } from "./store/Store";
import { Admin } from "./admin/Admin";
import { AuthProvider } from './auth/AuthProvider';

export class App extends Component {

  render() {
    return (
      <AuthProvider>
        <Router>
          <Switch>
            <Route path="/store" component={Store} />
            <Route path="/admin" component={Admin} />
            <Redirect to="/store" />
          </Switch>
        </Router>
      </AuthProvider>
    );
  }

}

export default App;

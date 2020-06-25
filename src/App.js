import React, { Component } from "react";
import { IriStoreDataStore } from "./data/DataStore";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { StoreConnector } from './store/StoreConnector';
import { Admin } from "./admin/Admin";
import { AuthProvider } from './auth/AuthProvider';

export class App extends Component {

  render() {
    return (
      <Provider store={IriStoreDataStore}>
        <AuthProvider>
          <Router>
            <Switch>
              <Route path="/store" component={StoreConnector} />
              <Route path="/admin" component={Admin} />
              <Redirect to="/store" />
            </Switch>
          </Router>
        </AuthProvider>
      </Provider>
    );
  }

}

export default App;

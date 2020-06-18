import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { AuthPrompt } from "../auth/AuthPrompt";
import { OrdersConnector } from "./OrdersConnector";
import { ProductCreator } from "./ProductCreator";
import { ProductEditor } from "./ProductEditor";
import { ProductsConnector } from "./ProductsConnector";

export class Admin extends Component {

  render() {
    return (
      <Switch>
        {/* {
          !this.props.isAuthenticated && <Route component={AuthPrompt} />
        } */}
        <Route path="/admin/auth" component={AuthPrompt} />
        <Route path="/admin/orders" component={OrdersConnector} />
        <Route path="/admin/products/create" component={ProductCreator} />
        <Route path="/admin/products/:id" component={ProductEditor} />
        <Route path="/admin/products" component={ProductsConnector} />
        <Redirect to="/admin/orders" />
      </Switch>
    );
  }

}

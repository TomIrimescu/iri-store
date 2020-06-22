import React, { Component } from "react";
import { ToggleLink } from "../common/ToggleLink";
// import { Link } from "react-router-dom";

export class AdminNavigation extends Component {

  render() { 
    return <>
      <div className="mt-5 h-0 flex-1 flex flex-col overflow-y-auto">
        <nav className="flex-1 px-2 bg-blue-dark">
          <a
            href="/admin/orders"
            className="sideBarButton w-2/3"
            onClick={this.sideDrawerToggleEvent}>
            Orders
          </a>
          <a
            href="/admin/products"
            className="sideBarButton w-2/3"
            onClick={this.sideDrawerToggleEvent}>
            Products
          </a>
        </nav>
      </div>
      <ToggleLink />
    </>
  }
}

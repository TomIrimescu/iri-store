import React, { Component } from "react";
import { ToggleLink } from "../common/ToggleLink";
// import { Link } from "react-router-dom";

export class AdminNavigationMobile extends Component {

  render() { 
    return <>
      <div className="mt-5 flex-1 h-0 overflow-y-auto">
        <nav className="flex-1 px-2 bg-blueDark mb-8">
          <a
            href="/admin/orders"
            className="sideBarButton w-2/3"
            onClick={this.props.sideDrawerCloseClicked}>
            Orders
          </a>
          <a
            href="/admin/products"
            className="sideBarButton w-2/3"
            onClick={this.props.sideDrawerCloseClicked}>
            Products
          </a>
        </nav>
      </div>
      <ToggleLink />
    </>
  }
}

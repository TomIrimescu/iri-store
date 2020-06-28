import React, { Component } from "react";
import { ToggleLink } from "../common/ToggleLink";

export class StoreNavigationMobile extends Component {

  render() {
    return <>
      <div className="mt-5 flex-1 h-0 overflow-y-auto">
        <nav className="flex-1 px-2 bg-blueDark mb-8">
          <ToggleLink
            to="/store/products/all"
            className="sideBarButton w-2/3"
            onClick={this.props.sideDrawerCloseClicked}
          >
            All
          </ToggleLink>
          <ToggleLink
            to="/store/products/watersports"
            className="sideBarButton w-2/3"
            onClick={this.props.sideDrawerCloseClicked}
          >
            Watersports
          </ToggleLink>
          <ToggleLink
            to="/store/products/soccer"
            className="sideBarButton w-2/3"
            onClick={this.props.sideDrawerCloseClicked}
          >
            Soccer
          </ToggleLink>
          <ToggleLink
            to="/store/products/chess"
            className="sideBarButton w-2/3"
            onClick={this.props.sideDrawerCloseClicked}
          >
            Chess
          </ToggleLink>
        </nav>
      </div>
    </>
  }
}

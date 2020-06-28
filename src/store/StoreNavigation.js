import React, { Component } from "react";
import { ToggleLink } from "../common/ToggleLink";

export class StoreNavigation extends Component {

  render() {
    return <>
      <div className="mt-5 h-0 flex-1 flex flex-col overflow-y-auto">
        <nav className="flex-1 px-2 bg-blue-dark">
          <ToggleLink
            to="/store/products/all"
            className="sideBarButton w-2/3"
            onClick={this.sideDrawerToggleEvent}
          >
            All
          </ToggleLink>
          <ToggleLink
            to="/store/products/watersports"
            className="sideBarButton w-2/3"
            onClick={this.sideDrawerToggleEvent}
          >
            Watersports
          </ToggleLink>
          <ToggleLink
            to="/store/products/soccer"
            className="sideBarButton w-2/3"
            onClick={this.sideDrawerToggleEvent}
          >
            Soccer
          </ToggleLink>
          <ToggleLink
            to="/store/products/chess"
            className="sideBarButton w-2/3"
            onClick={this.sideDrawerToggleEvent}
          >
            Chess
          </ToggleLink>
        </nav>
      </div>
    </>
  }
}

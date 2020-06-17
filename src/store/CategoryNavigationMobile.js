import React, { Component } from "react";
// import { ToggleLink } from "../ToggleLink";
// import { Link } from "react-router-dom";

export class CategoryNavigationMobile extends Component {

  render() {
    return <>
      <div className="mt-5 flex-1 h-0 overflow-y-auto">
        <nav className="flex-1 px-2 bg-blueDark mb-8">
          <a
            href="/store/products/all"
            className="sideBarButton w-2/3"
            onClick={this.sideDrawerToggleEvent}>
            All
          </a>
          <a
            href="/store/products/watersports"
            className="sideBarButton w-2/3"
            onClick={this.sideDrawerToggleEvent}>
            Watersports
          </a>
          <a
            href="/store/products/soccer"
            className="sideBarButton w-2/3"
            onClick={this.sideDrawerToggleEvent}>
            Soccer
          </a>
          <a
            href="/store/products/chess"
            className="sideBarButton w-2/3"
            onClick={this.sideDrawerToggleEvent}>
            Chess
          </a>
        </nav>
      </div>
    </>
  }
}

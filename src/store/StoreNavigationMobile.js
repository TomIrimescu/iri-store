import React, { Component } from "react";
import { ToggleLink } from "../common/ToggleLink";

export class StoreNavigationMobile extends Component {

  render() {
    return <>
      <div className="mt-5 flex-1 h-0 overflow-y-auto">
        <nav className="flex-1 px-2 bg-blueDark mb-8">

          <ToggleLink 
            to={`${this.props.baseUrl}/all`} 
            exact={false} 
            className="sideBarButton w-2/3">
            All
          </ToggleLink>
          {this.props.categories && this.props.categories.map(cat =>
            <ToggleLink 
              key={cat}
              className="sideBarButton w-2/3"
              to={`${this.props.baseUrl}/${cat.toLowerCase()}`}>
              {cat}
            </ToggleLink>
          )}

        </nav>
      </div>
    </>
  }
}

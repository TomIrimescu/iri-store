import React, { Component } from "react";
import { Link } from "react-router-dom"

export class AdminNavigationMobile extends Component {

  render() {
    return <>
      <div className="mt-5 flex-1 h-0 overflow-y-auto">
        <nav className="flex-1 px-2 bg-blueDark mb-8">

          <Link
            to="/admin/orders"
            className={`${!this.props.setActive ? 'activeButton' : ''} sideBarButton w-2/3`}
            onClick={this.props.sideDrawerCloseClicked}
          >
            Orders
          </Link>
          <Link
            to="/admin/products"
            className={`${this.props.setActive ? 'activeButton' : ''} sideBarButton w-2/3`}
            onClick={this.props.sideDrawerCloseClicked}
          >
            Products
          </Link>
          
        </nav>
      </div>
    </>
  }
}

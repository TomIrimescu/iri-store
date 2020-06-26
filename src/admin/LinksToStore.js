import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { authWrapper } from './../auth/AuthWrapper';

export const LinksToStore = authWrapper(class extends Component {

  render() {
    console.log(this.props);
    return (
      <div className="py-1 rounded-md bg-white shadow-xs">
        <Link
          to="/store/products/all/1"
          onClick={this.props.signout}
          className="adminLink">
          Admin Logout
        </Link>
        <Link
          to="/store/products/all/1"
          className="adminLink">
          Storefront
        </Link>
      </div>
    );
  }
});

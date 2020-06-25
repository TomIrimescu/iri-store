import React from "react";
import { Link } from 'react-router-dom';

export const LinksToAdmin = () => {
  return (
    <div className="py-1 rounded-md bg-white shadow-xs">
      <Link to="/admin" className="adminLink">
        Admin Login (no auth)
      </Link>
      <Link
        to="/admin/orders"
        className="adminLink">
        Admin Dashboard (auth)
      </Link>
      {/* {this.props.isAuthenticated && */}
        <Link
          to="/store/products/all/1"
          // onClick={this.props.signout}
          className="adminLink">
          Logout (auth)
        </Link>
      {/* } */}
    </div>
  )
};

export default LinksToAdmin;

import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { authWrapper } from './../auth/AuthWrapper';

export const LinksToAdmin = authWrapper(class extends Component {

  render() {
    return (
      <div className="py-1 rounded-md bg-white shadow-xs">
        {!this.props.isAuthenticated &&
          <Link to="/admin" className="adminLink">
            Admin Login
        </Link>
        }
        {this.props.isAuthenticated &&
          <Link
            to="/store/products/all/1"
            onClick={this.props.signout}
            className="adminLink">
            Admin Logout
          </Link>
        }
        {this.props.isAuthenticated &&
          <Link
            to="/admin"
            className="adminLink">
            Dashboard
        </Link>
        }
      </div>
    )
  }
});

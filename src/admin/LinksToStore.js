import React from "react";
import { Link } from 'react-router-dom';

export const LinksToStore = () => {
  return (
    <div className="py-1 rounded-md bg-white shadow-xs">
      <Link
        to="/store/products/all/1"
        onClick={() => console.log('Go to Storefront')}
        className="adminLink">
        Storefront (auth)
      </Link>
      <Link
        to="/store/products/all/1"
        onClick={() => console.log('this.logout')}
        className="adminLink">
        Logout (auth)
      </Link>
    </div>
  )
};

export default LinksToStore;
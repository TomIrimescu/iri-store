import React from "react";

export const LinksToStore = () => {
  return (
    <div className="py-1 rounded-md bg-white shadow-xs">
      <a 
        href="/store/products/all/1" 
        onClick={() => console.log('Go to Storefront')} 
        className="adminLink">
        Storefront (auth)
      </a>
      <a 
        href="/store/products/all/1" 
        onClick={() => console.log('this.logout')} 
        className="adminLink"> 
        Logout (auth)
      </a>
    </div>
  )
};

export default LinksToStore;
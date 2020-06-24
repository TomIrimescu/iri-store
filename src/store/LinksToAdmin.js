import React from "react";

export const LinksToAdmin = () => {
  return (
    <div className="py-1 rounded-md bg-white shadow-xs">
      <a href="/admin" className="adminLink">
        Admin Login (no auth)
      </a>
      <a 
        href="/admin/orders" 
        onClick={() => console.log('this.goToDashboard')} 
        className="adminLink">
        Admin Dashboard (auth)
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

export default LinksToAdmin;
import React, { Component} from "react";
import onClickOutside from "react-onclickoutside";

class AdminLinks extends Component {
  state = {
    links: false
  }

  linksToggleEvent =() => {
    this.setState((prevState) => {
      return {links: !prevState.links};
    });
  };

  handleClickOutside = evt => {
    this.setState(() => {
      return {links: false};
    });
  };

  render() {
    return (
      <div className="ml-3 relative">
        <div onClick={this.linksToggleEvent}>
          <button
            className="max-w-xs flex items-center text-sm rounded-full focus:outline-none focus:shadow-outline"
          >
            <img
              className="max-w-xs h-8 w-8 rounded-full"
              src="https://s.gravatar.com/avatar/5f7b6ad8684ac5807b44282915d5917c?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fto.png"
              alt=""
            />
          </button>
        </div>
        <div className={`${this.state.links ? 'openLinks' : 'closeLinks'} origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg`}>
          <div className="py-1 rounded-md bg-white shadow-xs">
              <a href="/admin" className="adminLink">
                Admin Login
              </a>
              <a href="/admin/products" onClick={() => console.log('this.goToDashboard')} className="adminLink">
                Admin Dashboard
              </a>
              <a href="/store/products/all/1" onClick={() => console.log('this.logout')} className="adminLink"> 
                Logout
              </a>
          </div>
        </div>
      </div>
    );
  }

}

export default onClickOutside(AdminLinks);
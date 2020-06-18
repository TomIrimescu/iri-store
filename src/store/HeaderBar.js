import React, { Component } from "react";
import HeaderBarLinks from "./HeaderBarLinks";

export class HeaderBar extends Component {

  render() {

    return (
        <div className="relative z-10 flex-shrink-0 flex h-16 bg-white shadow">
          <button
            className="px-4 border-r border-indigoLight bg-blue text-indigoLight focus:outline-none hover:bg-blueLight focus:bg-blueLight focus:text-red md:hidden"
            onClick={this.props.sideDrawerToggleClicked}
          >
            <svg
              className="h-6 w-6"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <div className="flex-1 px-4 flex justify-between bg-blue">
            <div className="flex-1 flex">
              <div className="w-full flex md:ml-0">
                <div className="relative w-full text-redDark focus-within:text-redDark">
                  <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none">
                    <h1 className="text-sm md:text-xl lg:text-2xl font-semibold text-red whitespace-no-wrap">
                      IRI-STORE
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="ml-4 flex items-center md:ml-6">
              <span
                className="sm:visible md:visible lg:visible invisible text-indigoLight"
                >Your cart: (empty)
                </span>
              <button
                href="/store/cart"
                className="p-1 text-indigoLight rounded-full hover:bg-indigoLight hover:text-gray-500 focus:outline-none focus:shadow-outline focus:text-red"
              >
                <i className="fas fa-shopping-cart p-2 pl-2 pr-2"></i>
              </button>

              <HeaderBarLinks />

            </div>
          </div>
        </div>
    );
  }

}
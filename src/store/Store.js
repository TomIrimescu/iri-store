import React, { Component } from "react";
import { CategoryNavigationMobile } from "./CategoryNavigationMobile";
import { CategoryNavigation } from "./CategoryNavigation";
import { ProductList } from './ProductList';

export class Store extends Component {
  state = {
    sidedrawer: true
  }

  sideDrawerToggleEvent = () => {
    this.setState({ sidedrawer: false });
    console.log(this.state.sidedrawer);
  }

  render() {
    return (
      <div className="h-screen flex overflow-hidden bg-gray-100">

        <div
          className={`${this.state.sidedrawer ? 'drawerOpen' : 'drawerClose'} h-screen flex z-50 fixed mobileTransition`}
        >
          <div
            onClick={this.sideDrawerToggleEvent}
            className="backdrop left-0 top-0 z-10 fixed h-full w-full"
          ></div>
          <div className="flex flex-col z-40 w-64 bg-blueDark relative">
            <div className="absolute top-0 right-0 p-2">
              <button
                className="flex items-center justify-center h-8 w-8 m-2 rounded-full focus:outline-none bg-blueLight hover:bg-blue focus:bg-blueLight"
                onClick={this.sideDrawerToggleEvent}
              >
                <svg
                  className="h-6 w-6 text-indigoLight"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <CategoryNavigationMobile />
          </div>
        </div>

        <div className="desktopTransition hidden md:flex md:flex-shrink-0">
          <div className="flex flex-col w-64 bg-blueDark">
          <CategoryNavigation />
          </div>
        </div>

        <ProductList />

      </div>
    );
  }

}
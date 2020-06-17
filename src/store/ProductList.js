import React, { Component } from "react";

export class ProductList extends Component {
  state = {
    links: true
  }

  render() {

    return (
      <div className="flex flex-col flex-1 overflow-hidden">

        <div className="relative z-10 flex-shrink-0 flex h-16 bg-white shadow">
          <button
            className="px-4 border-r border-indigoLight bg-blue text-indigoLight focus:outline-none hover:bg-blueLight focus:bg-blueLight focus:text-red md:hidden"
            onClick={() => console.log('this.sideDrawerToggleEvent')}
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
                    <h1 className="text-sm md:text-xl lg:text-2xl font-semibold text-red">
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

              <div className="text-redLight ml-2 mr-1 sm:inline-block md:inline-block lg:inline-block hidden">
                this.loggedInUser
              </div>

              <div className="ml-3 relative">
                <div onClick={() => console.log('this.linksToggleEvent')}>
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
                      <a href="/" onClick={() => console.log('this.goToDashboard')} className="adminLink">
                        Admin Dashboard
                      </a>
                      <a href="/" onClick={() => console.log('this.logout')} className="adminLink"> 
                        Logout
                      </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <main className="flex-1 relative z-0 overflow-y-auto py-6 focus:outline-none">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            <div className="text-redLight ml-2 mr-1 text-center -mt-2 sm:hidden md:hidden lg:hidden block">
              this.loggedInUser
            </div>

            <div className="py-4">
              <div className="flex-auto p-4">

                <div className="border rounded-md overflow-hidden p-1 mb-2 bg-gray-100">
                  <div className="flex justify-between align-middle bg-gray-200">
                    <h4 className="font-bold px-4 my-2">
                      soccer ball
                    </h4>
                    <button
                      className="bg-blueDark hover:bg-indigo text-white font-bold px-4 my-2 mr-6 rounded-full"
                    >
                      $13.00
                    </button>
                  </div>
                  <div className="flex justify-between align-middle">
                    <div className="px-4 py-1 my-2">
                      number 5 size
                    </div>
                    <button
                      className="bg-redDark hover:bg-indigo text-white font-bold px-4 py-1 mr-2 my-2 rounded"
                      href="/store/cart"
                    >
                      Add To Cart
                    </button>
                  </div>    
                </div>

                <div className="border rounded-md overflow-hidden p-1 mb-2 bg-gray-100">
                  <div className="flex justify-between align-middle bg-gray-200">
                    <h4 className="font-bold px-4 my-2">
                      soccer net
                    </h4>
                    <button
                      className="bg-blueDark hover:bg-indigo text-white font-bold px-4 my-2 mr-6 rounded-full"
                    >
                      $23.00
                    </button>
                  </div>
                  <div className="flex justify-between align-middle">
                    <div className="px-4 py-1 my-2">
                      6 ft wide net
                    </div>
                    <button
                      className="bg-redDark hover:bg-indigo text-white font-bold px-4 py-1 mr-2 my-2 rounded"
                      href="/store/cart"
                    >
                      Add To Cart
                    </button>
                  </div>    
                </div>

                <div className="border rounded-md overflow-hidden p-1 mb-2 bg-gray-100">
                  <div className="flex justify-between align-middle bg-gray-200">
                    <h4 className="font-bold px-4 my-2">
                      soccer cones
                    </h4>
                    <button
                      className="bg-blueDark hover:bg-indigo text-white font-bold px-4 my-2 mr-6 rounded-full"
                    >
                      $5.00
                    </button>
                  </div>
                  <div className="flex justify-between align-middle">
                    <div className="px-4 py-1 my-2">
                      orange 1 ft tall
                    </div>
                    <button
                      className="bg-redDark hover:bg-indigo text-white font-bold px-4 py-1 mr-2 my-2 rounded"
                      href="/store/cart"
                    >
                      Add To Cart
                    </button>
                  </div>    
                </div>

                <div className="border rounded-md overflow-hidden p-1 mb-2 bg-gray-100">
                  <div className="flex justify-between align-middle bg-gray-200">
                    <h4 className="font-bold px-4 my-2">
                      soccer shoes
                    </h4>
                    <button
                      className="bg-blueDark hover:bg-indigo text-white font-bold px-4 my-2 mr-6 rounded-full"
                    >
                      $57.00
                    </button>
                  </div>
                  <div className="flex justify-between align-middle">
                    <div className="px-4 py-1 my-2">
                      flat indoor shoes
                    </div>
                    <button
                      className="bg-redDark hover:bg-indigo text-white font-bold px-4 py-1 mr-2 my-2 rounded"
                      href="/store/cart"
                    >
                      Add To Cart
                    </button>
                  </div>    
                </div>

              </div>
            </div>

          </div>
        </main>

      </div>
    );
  }
}

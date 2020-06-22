import React, { Component } from "react";

export class ProductList extends Component {

  render() {

    return (
        <main className="flex-1 relative z-0 overflow-y-auto pb-6 focus:outline-none hideScrollBar">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">

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
                      outdoor shoes
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
        </main>
    );
  }
}

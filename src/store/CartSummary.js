import React, { Component } from "react";

export class CartSummary extends Component {

  render() { 
    return(
      <>
        <span
          className="sm:visible md:visible lg:visible invisible text-indigoLight"
        >
          Your cart: (empty)
        </span>
        <button
          href="/store/cart"
          className="p-1 text-indigoLight rounded-full hover:bg-indigoLight hover:text-gray-500 focus:outline-none focus:shadow-outline focus:text-red"
        >
          <i className="fas fa-shopping-cart p-2 pl-2 pr-2"></i>
        </button>
      </>
    );
  }

}
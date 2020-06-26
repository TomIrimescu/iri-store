import React, { Component } from "react";
import { Link } from "react-router-dom";

export class CartSummary extends Component {

  getSummary = () => {
    if (this.props.cartItems > 0) {
      return <span>
        {this.props.cartItems} item(s),
                    ${this.props.cartPrice.toFixed(2)}
      </span>
    } else {
      return <span
        className="sm:visible md:visible lg:visible invisible text-indigoLight ml-2 mr-2">
        Your cart: (empty)
                  </span>
    }
  }

  getLinkClasses = () => {
    return `p-1 text-indigoLight rounded-full hover:bg-indigoLight hover:text-gray-500 focus:outline-none focus:shadow-outline focus:text-red 
            ${ this.props.cartItems === 0 ? "cursor-not-allowed opacity-50" : ""}`;
  }

  render() {
    return <>
      {this.getSummary()}
      <Link className={this.getLinkClasses()}
        to="/store/cart">
        <i className="fas fa-shopping-cart p-2 pl-2 pr-2"></i>
      </Link>
    </>
  }
}

import React, { Component } from "react";
import { Link } from "react-router-dom";
import { CartDetailsRows } from "./CartDetailsRows";

export class CartDetails extends Component {

  getLinkClasses = () => `sideBarButton w-48 text-base
        ${this.props.cartItems === 0 ? "cursor-not-allowed opacity-50" : ""}`;

  render() {
    return <div className="m-4">
      <h2 className="text-center text-red text-2xl md:text-3xl font-bold mb-4">Your Store Cart</h2>
      <div className="flex flex-col">
        <div className="-my-2 py-2 overflow-x-auto sm:mx-6 sm:px-6 lg:mx-8 lg:px-8">
          <div className="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
            <table className="min-w-full">
              <thead>
                <tr>
                  <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
                  <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Product</th>
                  <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Price</th>
                  <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Subtotal</th>
                  <th className="px-6 py-3 border-b border-gray-200 bg-gray-50"></th>
                </tr>
              </thead>
              <tbody>
                <CartDetailsRows cart={this.props.cart}
                  cartPrice={this.props.cartPrice}
                  updateQuantity={this.props.updateCartQuantity}
                  removeFromCart={this.props.removeFromCart} />
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="text-center">
        <Link className="sideBarButton w-48 text-base" to="/store">
          Continue Shopping
        </Link>
        <Link className={this.getLinkClasses()} to="/store/checkout">
          Checkout
        </Link>
      </div>
    </div>
  }
}

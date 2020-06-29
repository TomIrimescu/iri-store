import React, { Component } from "react";

export class ProductList extends Component {

  render() {
    if (this.props.products == null || this.props.products.length === 0) {
        return <h2 className="flex justify-center text-3xl text-red mt-16">No Products</h2>
    }
    return this.props.products.map(p =>
      <div className="border rounded-md overflow-hidden p-1 mb-2 bg-gray-100" key={ p.id }>
        <div className="flex justify-between align-middle bg-gray-200">
          <h4 className="font-bold px-4 my-2">
          { p.name }
          </h4>
          <button
            className="bg-blueDark hover:bg-indigo text-white font-bold px-4 my-2 mr-6 rounded-full"
          >
            ${ p.price.toFixed(2) }
          </button>
        </div>
        <div className="flex justify-between align-middle">
          <div className="px-4 py-1 my-2">
          { p.description }
          </div>
          <button
            className="bg-redDark hover:bg-indigo text-white font-bold px-4 py-1 mr-2 my-2 rounded"
            onClick={ () => this.props.addToCart(p) }
          >
            Add To Cart
          </button>
        </div>    
      </div>
    );
  }
}

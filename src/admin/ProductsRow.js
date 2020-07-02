import React, { Component } from "react";
import { Link } from "react-router-dom";

export class ProductsRow extends Component {

  render = () =>
    <tr>
      <td className="px-6 py-4 text-sm leading-5 text-gray-500">{this.props.product.id}</td>
      <td className="px-6 py-4 text-sm leading-5 text-gray-500">{this.props.product.name}</td>
      <td className="px-6 py-4 text-sm leading-5 text-gray-500">{this.props.product.category}</td>
      <td className="px-6 py-4 text-sm leading-5 text-gray-500">
        ${this.props.product.price.toFixed(2)}
      </td>
      <td className="text-center pr-2">
        <button className="sideBarButton w-16 text-xs mt-0 text-redLight bg-blueLight hover:bg-redLight hover:text-white hover:font-bold align-middle"
          onClick={() => this.props.deleteProduct(this.props.product.id)}>
          Delete
        </button>
      </td>
      <td className="text-center pr-2">
        <Link to={`/admin/products/${this.props.product.id}`}
          className="sideBarButton w-16 text-xs mt-0 text-white bg-blue hover:bg-indigoLight hover:text-black hover:font-bold align-middle">
          Edit
        </Link>
      </td>
    </tr>
}

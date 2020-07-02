import React, { Component } from "react";

export class OrdersRow extends Component {

  calcTotal = (products) => products.reduce((total, p) =>
    total += p.quantity * p.product.price, 0).toFixed(2)

  getShipping = (order) => order.shipped
    ? <i className="fa fa-shipping-fast text-green-400" />
    : <i className="fa fa-exclamation-circle text-orange-400" />

  render = () =>
    <tr>
      <td className="px-6 py-4 text-sm leading-5 text-gray-500">{this.props.order.id}</td>
      <td className="px-6 py-4 text-sm leading-5 text-gray-500">{this.props.order.name}</td>
      <td className="px-6 py-4 text-sm leading-5 text-gray-500">{this.props.order.email}</td>
      <td className="px-6 py-4 text-sm leading-5 text-gray-500">
        ${this.calcTotal(this.props.order.products)}
      </td>
      <td className="px-6 py-4 text-sm leading-5 text-gray-500">
        <button
          onClick={this.props.toggleShipped}>
          {this.getShipping(this.props.order)}
          <span>
            {this.props.order.shipped
              ? " Shipped" : " PENDING"}
          </span>
        </button>
      </td>
    </tr>
}

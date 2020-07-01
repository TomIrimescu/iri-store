import React, { Component } from "react";

export class CartDetailsRows extends Component {

  handleChange = (product, event) => {
    this.props.updateQuantity(product, event.target.value);
  }

  render() {
    if (!this.props.cart || this.props.cart.length === 0) {
      return (
        <tr className="bg-gray-50">
          <td></td>
          <td></td>
          <td  className="py-20 text-3xl text-red italic">no selections yet</td>
          <td></td>
          <td></td>
        </tr>
      ) 
    } else {
      return <React.Fragment>
        {this.props.cart.map(item =>
          <tr 
            key={item.product.id} 
            className="bg-white even:bg-gray">

            <td className="px-6 py-4 text-sm leading-5 font-medium text-gray-900">
              <input
                type="number" 
                value={item.quantity}
                className="inputBox  w-20"
                onChange={(ev) => this.handleChange(item.product, ev)} />
            </td>

            <td className="px-6 py-4 text-sm leading-5 text-gray-500">
              {item.product.name}
            </td>

            <td className="px-6 py-4 text-sm leading-5 text-gray-500">
              ${item.product.price.toFixed(2)}
            </td>

            <td className="px-6 py-4 text-sm leading-5 text-gray-500">
              ${(item.quantity * item.product.price).toFixed(2)}
            </td>

            <td className="px-6 py-4 text-right text-sm leading-5 font-medium">
              <button 
                className="sideBarButton w-16 text-xs mt-0 text-redLight bg-blueLight hover:bg-redLight hover:text-white"
                onClick={() => this.props.removeFromCart(item.product)}>
                Remove
              </button>
            </td>

          </tr>
        )}

      <tr className="px-6 py-3 border-t border-gray-200">
        <th></th>
        <th colSpan="2" className="text-right py-4 font-semibold">Total:</th>
        <th colSpan="2" className="text-left py-4 pl-5 font-semibold">${this.props.cartPrice.toFixed(2)}</th>
      </tr>
    </React.Fragment> 
    }   
  }
}

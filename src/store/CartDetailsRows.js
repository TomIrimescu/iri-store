import React, { Component } from "react";

export class CartDetailsRows extends Component {

  handleChange = (product, event) => {
    this.props.updateQuantity(product, event.target.value);
  }

  render() {
    // if (!this.props.cart || this.props.cart.length === 0) {
    //   return <tr>
    //     <td colSpan="5">Your cart is empty</td>
    //   </tr>
    // } else {
    //   return <React.Fragment>
    //     {this.props.cart.map(item =>
    //       <tr key={item.product.id}>
    //         <td>
    //           <input
    //             type="number" value={item.quantity}
    //             className="inputBox"
    //             onChange={(ev) =>
    //               this.handleChange(item.product, ev)} />
    //         </td>
    //         <td>{item.product.name}</td>
    //         <td>${item.product.price.toFixed(2)}</td>
    //         <td>${(item.quantity * item.product.price).toFixed(2)}</td>
    //         <td>
    //           <button className="sideBarButton w-32"
    //             onClick={() =>
    //               this.props.removeFromCart(item.product)}>
    //             Remove
    //                             </button>
    //         </td>
    //       </tr>
    //     )}
    //     <tr>
    //       <th colSpan="3" className="text-right">Total:</th>
    //       <th colSpan="2">${this.props.cartPrice.toFixed(2)}</th>
    //     </tr>

    return <React.Fragment>
            <tr className="bg-white">
              <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900">
                Bernard Lane
              </td>
              <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                Director, Human Resources
              </td>
              <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                bernardlane@example.com
              </td>
              <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                Owner
              </td>
              <td className="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 font-medium">
                <a href="#" className="sideBarButton w-16 text-xs mt-0 text-redDark bg-indigoLight">
                  Remove
                </a>
              </td>
            </tr>
            <tr className="bg-gray-50">
              <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900">
                Bernard Lane
              </td>
              <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                Director, Human Resources
              </td>
              <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                bernardlane@example.com
              </td>
              <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                Owner
              </td>
              <td className="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 font-medium">
                <a href="#" className="sideBarButton w-16 text-xs mt-0 text-redDark bg-indigoLight">
                  Remove
                </a>
              </td>
            </tr>
            <tr className="bg-white">
              <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900">
                Bernard Lane
              </td>
              <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                Director, Human Resources
              </td>
              <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                bernardlane@example.com
              </td>
              <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                Owner
              </td>
              <td className="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 font-medium">
                <a href="#" className="sideBarButton w-16 text-xs mt-0 text-redDark bg-indigoLight">
                  Remove
                </a>
              </td>
            </tr>
            <tr className="bg-gray-50">
              <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900">
                Bernard Lane
              </td>
              <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                Director, Human Resources
              </td>
              <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                bernardlane@example.com
              </td>
              <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                Owner
              </td>
              <td className="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 font-medium">
                <a href="#" className="sideBarButton w-16 text-xs mt-0 text-redDark bg-indigoLight">
                  Remove
                </a>
              </td>
            </tr>
            <tr className="bg-white">
              <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900">
                Bernard Lane
              </td>
              <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                Director, Human Resources
              </td>
              <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                bernardlane@example.com
              </td>
              <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                Owner
              </td>
              <td className="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 font-medium">
                <a href="#" className="sideBarButton w-16 text-xs mt-0 text-redDark bg-indigoLight">
                  Remove
                </a>
              </td>
            </tr>
      </React.Fragment>
    
  }
}

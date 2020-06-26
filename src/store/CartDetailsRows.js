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
    //       <tr className="odd:bg-gray-50" key={item.product.id}>
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
    //           </button>
    //         </td>
    //       </tr>
    //     )}
    //     <tr>
    //       <th colSpan="3" className="text-right">Total:</th>
    //       <th colSpan="2">${this.props.cartPrice.toFixed(2)}</th>
    //     </tr>

    return <React.Fragment>
      <tr className="bg-white">
        <td className="px-6 py-4 text-sm leading-5 font-medium text-gray-900">
        <input
          type="number" value={1000}
          className="inputBox  w-20"
          onChange={(ev) =>
            this.handleChange(ev)} />
        </td>
        <td className="px-6 py-4 text-sm leading-5 text-gray-500">
          Genuine Chain Saw with Case included
        </td>
        <td className="px-6 py-4 text-sm leading-5 text-gray-500">
          $9.00
        </td>
        <td className="px-6 py-4 text-sm leading-5 text-gray-500">
          $9.00
        </td>
        <td className="px-6 py-4 text-right text-sm leading-5 font-medium">
          <a href="/" className="sideBarButton w-16 text-xs mt-0 text-white bg-redLight hover:bg-blueLight">
            Remove
          </a>
        </td>
      </tr>
      <tr className="bg-gray-50">
        <td className="px-6 py-4 text-sm leading-5 font-medium text-gray-900">
        <input
          type="number" value={1000}
          className="inputBox  w-20"
          onChange={(ev) =>
            this.handleChange(ev)} />
        </td>
        <td className="px-6 py-4 text-sm leading-5 text-gray-500">
          Genuine Chain Saw with Case included
        </td>
        <td className="px-6 py-4 text-sm leading-5 text-gray-500">
          $9.00
        </td>
        <td className="px-6 py-4 text-sm leading-5 text-gray-500">
          $9.00
        </td>
        <td className="px-6 py-4 text-right text-sm leading-5 font-medium">
          <a href="/" className="sideBarButton w-16 text-xs mt-0 text-white bg-redLight hover:bg-blueLight">
            Remove
          </a>
        </td>
      </tr>
      <tr className="bg-white">
        <td className="px-6 py-4 text-sm leading-5 font-medium text-gray-900">
        <input
          type="number" value={1000}
          className="inputBox  w-20"
          onChange={(ev) =>
            this.handleChange(ev)} />
        </td>
        <td className="px-6 py-4 text-sm leading-5 text-gray-500">
          Genuine Chain Saw with Case included
        </td>
        <td className="px-6 py-4 text-sm leading-5 text-gray-500">
          $9.00
        </td>
        <td className="px-6 py-4 text-sm leading-5 text-gray-500">
          $9.00
        </td>
        <td className="px-6 py-4 text-right text-sm leading-5 font-medium">
          <a href="/" className="sideBarButton w-16 text-xs mt-0 text-white bg-redLight hover:bg-blueLight">
            Remove
          </a>
        </td>
      </tr>
      <tr className="bg-gray-50">
        <td className="px-6 py-4 text-sm leading-5 font-medium text-gray-900">
        <input
          type="number" value={1000}
          className="inputBox  w-20"
          onChange={(ev) =>
            this.handleChange(ev)} />
        </td>
        <td className="px-6 py-4 text-sm leading-5 text-gray-500">
          Genuine Chain Saw with Case included
        </td>
        <td className="px-6 py-4 text-sm leading-5 text-gray-500">
          $9.00
        </td>
        <td className="px-6 py-4 text-sm leading-5 text-gray-500">
          $9.00
        </td>
        <td className="px-6 py-4 text-right text-sm leading-5 font-medium">
          <a href="/" className="sideBarButton w-16 text-xs mt-0 text-white bg-redLight hover:bg-blueLight">
            Remove
          </a>
        </td>
      </tr>
      <tr className="bg-white">
        <td className="px-6 py-4 text-sm leading-5 font-medium text-gray-900">
          <input
            type="number" value={1000}
            className="inputBox  w-20"
            onChange={(ev) =>
              this.handleChange(ev)} />
        </td>
        <td className="px-6 py-4 text-sm leading-5 text-gray-500">
          Genuine Chain Saw with Case included
        </td>
        <td className="px-6 py-4 text-sm leading-5 text-gray-500">
          $9.00
        </td>
        <td className="px-6 py-4 text-sm leading-5 text-gray-500">
          $9.00
        </td>
        <td className="px-6 py-4 text-right text-sm leading-5 font-medium">
          <a href="/" className="sideBarButton w-16 text-xs mt-0 text-white bg-redLight hover:bg-blueLight">
            Remove
          </a>
        </td>
      </tr>
      <tr className="px-6 py-3 border-t border-gray-200 bg-gray-50">
        <th></th>
        <th colSpan="2" className="text-right py-4 font-semibold">Total:</th>
        <th colSpan="2" className="text-left py-4 pl-5 font-semibold">$45.00</th>
      </tr>
    </React.Fragment>    
  }
}

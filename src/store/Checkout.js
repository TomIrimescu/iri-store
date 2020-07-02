import React, { Component } from "react";
import { ValidatedForm } from './../common/forms/ValidatedForm';

export class Checkout extends Component {

  constructor(props) {
    super(props);
    this.defaultAttrs = { type: "text", required: true };
    this.formModel = [
      { label: "Name" },
      { label: "Email", attrs: { type: "email" } },
      { label: "Address" },
      { label: "City" },
      { label: "Zip/Postal Code", name: "zip" },
      { label: "Country" }]
  }

  handleSubmit = (formData) => {
    const order = {
      ...formData, products: this.props.cart.map(item =>
        ({ quantity: item.quantity, product_id: item.product.id }))
    }
    this.props.placeOrder(order);
    this.props.clearCart();
    this.props.history.push("/store/thanks");
  }

  handleCancel = () => {
    this.props.history.push("/store/cart");
  }

  render() {
    return (
      <div
        className="mt-8 inset-x-0 px-4 pb-6 md:inset-0 md:p-0 md:flex md:items-center md:justify-center sm:inset-0 sm:p-0 sm:flex sm:items-center sm:justify-center"
      >
        <div className="fixed inset-0 transition-opacity">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <div
          className="my-auto mx-auto bg-white rounded-lg px-4 pt-5 pb-4 overflow-hidden shadow-xl transform transition-all sm:p-6 lg:mt-40" 
        >
          <ValidatedForm formModel={this.formModel}
            defaultAttrs={this.defaultAttrs}
            submitCallback={this.handleSubmit}
            cancelCallback={this.handleCancel}
            submitText="Place Order"
            cancelText="Return to Cart" />
        </div>
      </div>
    )
  }
}

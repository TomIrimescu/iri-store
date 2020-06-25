import React, { Component } from "react";
import { ValidatedForm } from './../common/forms/ValidatedForm';
import { Mutation } from "react-apollo";
import { storeProduct, updateProduct } from "./clientMutations";

export class ProductCreator extends Component {

  constructor(props) {
    super(props);
    this.defaultAttrs = { type: "text", required: true };
    this.formModel = [
      { label: "Name" }, { label: "Description" },
      { label: "Category" },
      { label: "Price", attrs: { type: "number" } }
    ];
    this.mutation = storeProduct;
    if (this.props.mode === "edit") {
      this.mutation = updateProduct;
      this.formModel = [{ label: "Id", attrs: { disabled: true } },
      ...this.formModel]
        .map(item => ({
          ...item, attrs: {
            ...item.attrs,
            defaultValue: this.props.product[item.label.toLowerCase()]
          }
        }));
    }
  }

  navigate = () => this.props.history.push("/admin/products");

  render = () => {
    return (
      <div
        className="fixed top-10 inset-x-0 px-4 pb-6 md:inset-0 md:p-0 md:flex md:items-center md:justify-center sm:inset-0 sm:p-0 sm:flex sm:items-center sm:justify-center"
      >
        <div className="fixed inset-0 transition-opacity">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <div
          className="my-auto mx-auto bg-white rounded-lg px-4 pt-5 pb-4 overflow-hidden shadow-xl transform transition-all sm:p-6 lg:mt-40"
        >
          <Mutation mutation={this.mutation}>
            {(saveMutation, { client }) => {
              return <ValidatedForm formModel={this.formModel}
                defaultAttrs={this.defaultAttrs}
                submitCallback={data => {
                  saveMutation({
                    variables: {
                      product:
                        { ...data, price: Number(data.price) }
                    }
                  });
                  if (this.props.mode !== "edit") {
                    client.resetStore();
                  }
                  this.navigate();
                }}
                cancelCallback={this.navigate}
                submitText="Save" cancelText="Cancel" />
            }}
          </Mutation>
        </div>
      </div>
    )
  }
}

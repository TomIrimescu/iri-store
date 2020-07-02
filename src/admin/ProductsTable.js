import React, { Component } from "react";
import { Link } from "react-router-dom";
import { PaginationControls } from './../common/pagination/PaginationControls';
import { ProductsRow } from "./ProductsRow";

export class ProductsTable extends Component {

  render = () =>
    <div>
      <h4 className="text-center text-gray-200 font-semibold bg-blueLight w-1/3 mx-auto p-2 rounded-lg">
        {this.props.totalSize} Products
      </h4>

      <PaginationControls keys={["ID", "Name", "Category"]}
        {...this.props} />

      <div className="flex flex-col">
        <div className="-my-2 py-2 overflow-x-auto sm:mx-6 sm:px-6 lg:mx-8 lg:px-8">
          <div className="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
            <table className="min-w-full">
              <thead>
                <tr>
                  <th className="px-6 py-3 border-b border-gray-200 bg-gray-200 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">ID</th>
                  <th className="px-6 py-3 border-b border-gray-200 bg-gray-200 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Name</th>
                  <th className="px-6 py-3 border-b border-gray-200 bg-gray-200 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Category</th>
                  <th className="px-6 py-3 border-b border-gray-200 bg-gray-200 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Price</th>
                  <th className="px-6 py-3 border-b border-gray-200 bg-gray-200 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"></th>
                  <th className="px-6 py-3 border-b border-gray-200 bg-gray-200 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"></th>
                </tr>
              </thead>
              <tbody>
                {this.props.products.map(prod =>
                  <ProductsRow key={prod.id} product={prod}
                    deleteProduct={this.props.deleteProduct} />
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="text-center">
        <Link to="/admin/products/create" className="sideBarButton w-32 mt-4 text-base">
          Create Product
        </Link>
      </div>
    </div>
}

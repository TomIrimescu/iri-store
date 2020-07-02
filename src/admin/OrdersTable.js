import React, { Component } from "react";
import { OrdersRow } from "./OrdersRow";
import { PaginationControls } from './../common/pagination/PaginationControls';

export class OrdersTable extends Component {

  render = () =>
    <div>
      <h4 className="text-center text-gray-200 font-semibold bg-blueLight w-1/3 mx-auto p-2 rounded-lg">
        {this.props.totalSize} Orders
      </h4>
      <PaginationControls keys={["ID", "Name"]}
        {...this.props} />
      <div className="flex flex-col">
        <div className="-my-2 py-2 overflow-x-auto sm:mx-6 sm:px-6 lg:mx-8 lg:px-8">
          <div className="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
            <table className="min-w-full">
              <thead>
                <tr>
                  <th className="px-6 py-3 border-b border-gray-200 bg-gray-200 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">ID</th>
                  <th className="px-6 py-3 border-b border-gray-200 bg-gray-200 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Name</th>
                  <th className="px-6 py-3 border-b border-gray-200 bg-gray-200 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Email</th>
                  <th className="px-6 py-3 border-b border-gray-200 bg-gray-200 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Total</th>
                  <th className="px-6 py-3 border-b border-gray-200 bg-gray-200 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Shipped</th>
                </tr>
              </thead>
              <tbody>
                {this.props.orders.map(order =>
                  <OrdersRow key={order.id}
                    order={order} toggleShipped={() =>
                      this.props.toggleShipped(order.id, !order.shipped)}
                  />
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
}

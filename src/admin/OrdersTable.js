import React, { Component } from "react";
import { OrdersRow } from "./OrdersRow";
import PaginationControls from "../common/pagination/PaginationControls";

export class OrdersTable extends Component {

  render() { 
    return(
      <>
        <div className="flex flex-col flex-1 overflow-hidden">
          <PaginationControls />
        </div>
        <div className="text-blue p-4">Orders Table
          <OrdersRow />
        </div>
      </>
    );
  }

}
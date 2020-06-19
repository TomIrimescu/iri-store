import React, { Component } from "react";
import { ProductsRow } from "./ProductsRow";
import PaginationControls from "../common/pagination/PaginationControls";

export class ProductsTable extends Component {

  render() { 
    return(
      <>
        <div className="flex flex-col flex-1 overflow-hidden">
          <PaginationControls />
        </div>
        <div className="text-blue p-4">Products Table
          <ProductsRow />
        </div>
      </>
    );
  }

}
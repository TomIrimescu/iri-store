import React from "react";
import PaginationButtons from "./PaginationButtons";

export const PaginationControls = () => (
  <>
    <PaginationButtons />
    <div className="flex border-b border-gray-300">
      <div className="flex-1"></div>
      <div className="flex-none text-center py-2 pt-0 m-2">
        <div>
          <select id="location" className="mt-1 form-select block w-full pl-3 pr-10 py-2 text-base leading-6 border-gray-300 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5">
            <option defaultValue="5 per page">5 per page
            </option>
            <option>10 per page
            </option>
            <option>25 per page
            </option>
            <option>100 per page
            </option>
          </select>
        </div>
      </div>
      <div className="flex-none text-center py-2 pt-0 m-2">
        <div>
          <select id="location" className="mt-1 form-select block w-full pl-3 pr-10 py-2 text-base leading-6 border-gray-300 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5">
            <option defaultValue="Sort By Name">Sort By Name
            </option>
            <option>Sort By Price
            </option>
          </select>
        </div>
      </div>
      <div className="flex-1"></div>
    </div>
  </>
);

export default PaginationControls;
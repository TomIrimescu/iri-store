import React from "react";

const PaginationButtons = () => (
  <>
    <div className="mt-4 mx-auto px-4 py-3 items-center sm:px-6 bg-gray-100">
      <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
        <nav className="relative z-0 inline-flex shadow-sm">
          <button type="button" className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:z-10 focus:outline-none focus:border-blueLight focus:shadow-outline-blue active:bg-gray-100 active:text-gray-500 transition ease-in-out duration-150 mr-2" aria-label="Previous">
            <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd"/>
            </svg>
          </button>
          <button type="button" className="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blueLight focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150 mr-2">
            1
          </button>
          <button type="button" className="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blueLight focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150 mr-2">
            2
          </button>
          <button type="button" className="hidden md:inline-flex -ml-px relative items-center px-4 py-2 border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blueLight focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150 mr-2">
            3
          </button>
          <span className="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-700 mr-2">
            ...
          </span>
          <button type="button" className="hidden md:inline-flex -ml-px relative items-center px-4 py-2 border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blueLight focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150 mr-2">
            8
          </button>
          <button type="button" className="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blueLight focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150 mr-2">
            9
          </button>
          <button type="button" className="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blueLight focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150 mr-2">
            10
          </button>
          <button type="button" className="-ml-px relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:z-10 focus:outline-none focus:border-blueLight focus:shadow-outline-blue active:bg-gray-100 active:text-gray-500 transition ease-in-out duration-150 mr-2" aria-label="Next">
            <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"/>
            </svg>
          </button>
        </nav>
      </div>      
    </div>
</>
);

export default PaginationButtons;
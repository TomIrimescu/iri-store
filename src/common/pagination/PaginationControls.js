import React from "react";

const PaginationControls = () => (
  <>
    <div className="mt-4 mx-auto px-4 py-3 items-center sm:px-6 bg-gray-100">

      <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
        <nav className="relative z-0 inline-flex shadow-sm">
          <button type="button" className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:z-10 focus:outline-none focus:border-blueLight focus:shadow-outline-blue active:bg-gray-100 active:text-gray-500 transition ease-in-out duration-150 mr-2" aria-label="Previous">
            <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"/>
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
              <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"/>
            </svg>
          </button>
        </nav>
      </div>
      
  </div>

  <div className="flex">
    <div className="flex-1"></div>
    <div className="flex-none text-center px-4 py-2 m-2">
      <div className="relative inline-block text-left">
        <div className="w-32 mx-auto">
          <span className="rounded-md shadow-sm">
            <button type="button" className="inline-flex justify-center rounded-md border border-gray-300 px-4 py-2 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition ease-in-out duration-150" id="options-menu" aria-haspopup="true" aria-expanded="true">
              5 per page
              <svg className="-mr-1 ml-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"/>
              </svg>
            </button>
          </span>
          <div className="w-32 rounded-md shadow-lg z-10 mt-2">
            <div className="rounded-md bg-white shadow-xs">
              <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                <button href="#" className="w-32 block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900" role="menuitem">
                  5 per page
                </button>
                <button href="#" className="w-32 block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900" role="menuitem">
                  10 per page
                </button>
                <button href="#" className="w-32 block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900" role="menuitem">
                  25 per page
                </button>
                <button href="#" className="w-32 block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900" role="menuitem">
                  100 per page
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="flex-none text-center px-4 py-2 m-2">
      <div className="relative inline-block text-left">
        <div className="w-32 mx-auto">
          <span className="rounded-md shadow-sm">
            <button type="button" className="inline-flex justify-center rounded-md border border-gray-300 px-4 py-2 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition ease-in-out duration-150" id="options-menu" aria-haspopup="true" aria-expanded="true">
              sort by ......  
              <svg className="-mr-1 ml-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"/>
              </svg>
            </button>
          </span>
          <div className="w-32 rounded-md shadow-lg z-10 mt-2">
            <div className="rounded-md bg-white shadow-xs">
              <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                <button href="#" className="w-32 block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900" role="menuitem">
                  sort by name
                  </button>
                <button href="#" className="w-32 block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900" role="menuitem">
                  sort by price
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="flex-1"></div>
  </div>

</>
);

export default PaginationControls;
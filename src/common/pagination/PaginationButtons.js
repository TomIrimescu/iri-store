import React, { Component } from "react";

export class PaginationButtons extends Component {

    getPageNumbers = () => {
        if (this.props.pageCount < 4) {
            return [...Array(this.props.pageCount + 1).keys()].slice(1);
        } else if (this.props.currentPage <= 4) {     
            return [1, 2, 3, 4, 5];
        } else  if (this.props.currentPage > this.props.pageCount - 4) {
            return [...Array(5).keys()].reverse()
                .map(v => this.props.pageCount - v);
        } else {
            return [this.props.currentPage -1, this.props.currentPage,
                this.props.currentPage + 1];
        }        
    }

    render() {
        const current = this.props.currentPage;
        const pageCount = this.props.pageCount;
        const navigate = this.props.navigate;
        return <React.Fragment>
          <div className="mt-4 mx-auto px-4 py-3 items-center sm:px-6 bg-gray-100">
            <div className="sm:flex-1 sm:flex sm:items-center sm:justify-center">
              <nav className="relative z-0 inline-flex shadow-sm">
                <button 
                  onClick={ () => navigate(current  - 1) }
                  disabled={ current === 1 } 
                  className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-gray-200 text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:z-10 focus:outline-none focus:border-blueLight focus:shadow-outline-blue active:bg-gray-100 active:text-gray-500 transition ease-in-out duration-150 mr-1"
                  aria-label="Previous"
                  type="button"
                >
                  <svg className="h-5 w-5 text-red" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                </button>
                { current > 4 && 
                    <React.Fragment>
                        <button className="hidden md:inline-flex -ml-px relative items-center px-4 py-2 border border-gray-300 bg-gray-200 text-sm leading-5 font-medium text-blue hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blueLight focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150 mr-1" 
                            onClick={ () => navigate(1)}>1</button>
                        <span className="hidden md:inline-flex -ml-px relative items-center px-4 py-2 border border-gray-300 bg-gray-200 text-sm leading-5 font-medium text-blue-700 mr-1">
                          ...
                        </span>
                    </React.Fragment>
                }
                { this.getPageNumbers().map(num => 
                    <button className={ `${num === current 
                            ? "-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-indigo text-sm leading-5 font-medium text-white hover:text-red focus:z-10 focus:outline-none focus:border-blueLight focus:shadow-outline-blue active:bg-gray-100 active:text-white transition ease-in-out duration-150 mr-1": "-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-gray-200 text-sm leading-5 font-medium text-blue hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blueLight focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150 mr-1"}`}
                        onClick={ () => navigate(num)} key={ num }>
                            { num }
                    </button>)}
                { current <= (pageCount - 4) && 
                    <React.Fragment>
                        <span className="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-gray-200 text-sm leading-5 font-medium text-blue mr-1">
                          ...
                        </span>
                        <button className="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-gray-200 text-sm leading-5 font-medium text-blue hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blueLight focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150 mr-1" 
                                onClick={ () => navigate(pageCount)}>
                            { pageCount }
                        </button>
                    </React.Fragment>
                }
                <button onClick={ () => navigate(current + 1) }
                  disabled={ current === pageCount }
                  className="-ml-px relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-gray-200 text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:z-10 focus:outline-none focus:border-blueLight focus:shadow-outline-blue active:bg-gray-100 active:text-gray-500 transition ease-in-out duration-150 mr-1"
                  aria-label="Next"
                  type="button"
                >
                  <svg className="h-5 w-5 text-red" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"/>
                  </svg>
                </button>
              </nav>
            </div>
          </div>
        </React.Fragment>        
    }
}

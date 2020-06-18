import React, { Component } from "react";

export class AuthPrompt extends Component {
  state = {
    modal: true
  }

  modalToggleEvent = () => {
    this.setState((prevState) => {
      return {modal: !prevState.modal};
    });
  };

  render() {
    return (
      <>
        <div
          className="fixed top-10 inset-x-0 px-4 pb-6 sm:inset-0 sm:p-0 sm:flex sm:items-center sm:justify-center"
        >
          <div className="fixed inset-0 transition-opacity">
            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
          </div>
          <div
            className="bg-white rounded-lg px-4 pt-5 pb-4 overflow-hidden shadow-xl transform transition-all sm:p-6"
          >
            <form>
              <div className="pt-4">
                <label className="flex justify-center font-medium">Username</label>
                <input
                  placeholder="admin"
                  className="inputBox"
                />
              </div>
              <div className="pt-4">
                <label className="flex justify-center font-medium">Password</label>
                <input
                  type="password"
                  placeholder="Password"
                  className="inputBox"
                />
              </div>
              <button
                onClick={() => console.log('login()')}
                className="sideBarButton w-full mb-8"
              >
                Login
              </button>
              <button href="/" className="sideBarButton w-full mb-10">
                Storefront
              </button>
            </form>
          </div>
        </div>
        
        <div
          className={`${this.state.modal ? 'openModal' : 'closeModal'} fixed top-60 inset-x-0 px-4 pb-6 sm:inset-0 sm:p-0 sm:flex sm:items-center sm:justify-center`}
        >      
          <div className="fixed inset-0 transition-opacity">
            <div
              onClick={this.modalToggleEvent}
              className="absolute inset-0 bg-gray-500 opacity-75"
            ></div>
          </div>
          <div
            className="bg-white rounded-lg px-4 pt-5 pb-4 overflow-hidden shadow-xl transform transition-all max-w-xs mx-auto"
          >
            <div className="mt-3 text-center sm:mt-5">
              <h3 className="text-lg leading-6 font-medium text-redLight">
                Login Failed
              </h3>
            </div>
            <div className="mt-5 sm:mt-6">
              <span className="flex w-full rounded-md shadow-sm">
                <button
                  onClick={this.modalToggleEvent}
                  type="button"
                  className="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-indigoDark text-base leading-6 font-medium text-white shadow-sm hover:bg-indigo hover:text-indigoLight focus:outline-none focus:border-indigo focus:shadow-outline-indigo transition ease-in-out duration-150 sm:text-sm sm:leading-5"
                >
                  Try again
                </button>
              </span>
            </div>
          </div>
        </div>
      </>
    )
  }
  
};

export default AuthPrompt;
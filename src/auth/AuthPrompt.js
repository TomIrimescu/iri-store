import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { authWrapper } from "./AuthWrapper";
import { ValidatedForm } from './../common/forms/ValidatedForm';

export const AuthPrompt = withRouter(authWrapper(class extends Component {

  constructor(props) {
    super(props);
    this.state = {
      errorMessage: null
    }
    this.defaultAttrs = { required: true };
    this.formModel = [
      { label: "Username", attrs: { defaultValue: "admin", placeholder: 'username' } },
      { label: "Password", attrs: { type: "password", placeholder: 'password' } }
    ];
  }

  authenticate = (credentials) => {
    this.props.authenticate(credentials)
      .catch(err => this.setState({ errorMessage: err.message }))
      .then(this.props.history.push("/admin"));
  }

  render() {
    return (
      <>
        <div
          className="fixed top-10 inset-x-0 px-4 pb-6 md:inset-0 md:p-0 md:flex md:items-center md:justify-center sm:inset-0 sm:p-0 sm:flex sm:items-center sm:justify-center"
        >
          <div className="fixed inset-0 transition-opacity">
            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
          </div>
          <div
            className="my-auto bg-white rounded-lg px-4 pt-5 pb-4 overflow-hidden shadow-xl transform transition-all sm:p-6 lg:mt-40"
          >
            <form>
              {this.state.errorMessage != null &&
                <h4 className="break-words text-white text-center bg-redLight m-1 p-2 rounded-lg md:w-48 lg:w-48">
                  {this.state.errorMessage}
                </h4>
              }
              <ValidatedForm formModel={this.formModel}
                defaultAttrs={this.defaultAttrs}
                submitCallback={this.authenticate}
                submitText="Login"
                cancelCallback={() => this.props.history.push("/")}
                cancelText="Cancel"
              />
            </form>          
          </div>
        </div>
      </>
    )
  }
  
}));

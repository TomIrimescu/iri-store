import React, { Component } from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { GraphQlUrl } from "../data/Urls";
import { Route, Redirect, Switch } from "react-router-dom";
import { AuthPrompt } from "../auth/AuthPrompt";
import { OrdersConnector } from "./OrdersConnector";
import { ProductCreator } from "./ProductCreator";
import { ProductEditor } from "./ProductEditor";
import { ProductsConnector } from "./ProductsConnector";
import { HeaderBar } from './../common/header/HeaderBar';
import HeaderBarLinks from './../common/header/HeaderBarLinks';
import { LinksToStore } from './LinksToStore';
import { AdminNavigation } from './AdminNavigation';
import { AdminNavigationMobile } from './AdminNavigationMobile';
import { authWrapper } from './../auth/AuthWrapper';

export const Admin = authWrapper(class extends Component {
  state = {
    sidedrawer: false,
    setActive: false
  }

  constructor(props) {
    super(props);
    this.client = new ApolloClient({
      uri: GraphQlUrl,
      request: gqloperation => gqloperation.setContext({
        headers: {
          Authorization: `Bearer<${this.props.webToken}>`
        },
      })
    })
  }

  sideDrawerCloseEvent = () => {
    this.setState({ sidedrawer: false });
    this.setActiveToggleEvent();
  }

  sideDrawerToggleEvent = () => {
    this.setState((prevState) => {
      return {sidedrawer: !prevState.sidedrawer};
    });
  };

  setActiveToggleEvent = () => {
    this.setState((prevState) => {
      return {setActive: !prevState.setActive};
    });
  };

  render() {
    return (
      <ApolloProvider client={this.client}>
        <div className="h-screen flex overflow-hidden bg-gray-100">

          <div
            className={`${this.state.sidedrawer ? 'drawerOpen' : 'drawerClose'} h-screen flex z-50 fixed mobileTransition`}
          >
            <div
              onClick={this.sideDrawerToggleEvent}
              className="backdrop left-0 top-0 z-10 fixed h-full w-full"
            ></div>
            <div className="flex flex-col z-40 w-64 bg-blueDark relative">
              <div className="absolute top-0 right-0 p-2">
                <button
                  className="flex items-center justify-center h-8 w-8 m-2 rounded-full focus:outline-none bg-blueLight hover:bg-blue focus:bg-blueLight"
                  onClick={this.sideDrawerToggleEvent}
                >
                  <svg
                    className="h-6 w-6 text-indigoLight"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <AdminNavigationMobile 
                sideDrawerCloseClicked={this.sideDrawerCloseEvent}
                setActive={this.state.setActive} />
            </div>
          </div>

          <div className="desktopTransition hidden md:flex md:flex-shrink-0">
            <div className="flex flex-col w-64 bg-blueDark">
            <AdminNavigation />
            </div>
          </div>

          <div className="flex flex-col flex-1 overflow-hidden">
            <HeaderBar 
              isAuthenticated={this.props.isAuthenticated}
              sideDrawerToggleClicked={this.sideDrawerToggleEvent}>
              <HeaderBarLinks>
                <LinksToStore />
              </HeaderBarLinks>
            </HeaderBar>

            <main className="flex-1 relative z-0 overflow-y-auto pb-6 focus:outline-none hideScrollBar">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                <div className="flex-auto p-4">
                    <Switch>
                      {
                        !this.props.isAuthenticated && <Route component={AuthPrompt} />
                      }
                      <Route path="/admin/orders" component={OrdersConnector} />
                      <Route path="/admin/products/create" component={ProductCreator} />
                      <Route path="/admin/products/:id" component={ProductEditor} />
                      <Route path="/admin/products" component={ProductsConnector} />
                      <Redirect to="/admin/orders" />
                    </Switch>
                </div>
              </div>
            </main>

          </div>

        </div>
      </ApolloProvider>
    );
  }
});

import React, { Component } from "react";
import { Switch, Route, Redirect } 
    from "react-router-dom"
import { connect } from "react-redux";
import * as StoreActions from "../data/ActionCreators";
import { DataTypes } from "../data/Types";
import { Store } from "../store/Store";
import  * as CartActions from "../data/CartActionCreators";
import { CartDetails } from "../store/CartDetails";
import { DataGetter } from "../data/DataGetter";
import { Checkout } from "../store/Checkout";
import { Thanks } from "../store/Thanks";

const mapDispatchToProps = { ...StoreActions, ...CartActions};

export const StoreConnector = connect(ds => ds, mapDispatchToProps)(
    class extends Component {

        selectComponent = (routeProps) => {            
            const wrap = (Component, Content) => 
                <Component { ...this.props}  { ...routeProps}>
                    { Content && wrap(Content)}
                </Component>            
            switch (routeProps.match.params.section) {
                case "products": 
                    return wrap(DataGetter, Store);
                case "cart":
                    return wrap(CartDetails);
                case "checkout": 
                    return wrap(Checkout);
                case "thanks":
                    return wrap(Thanks);
                default:
                    return <Redirect to="/store/products/all/1" />
            }
        }

        render() {
            return <Switch>
                <Redirect from="/store/products/:category" 
                    to="/store/products/:category/1" exact={ true } />                
                <Route path={ "/store/:section?/:category?/:page?"}
                    render = { routeProps => this.selectComponent(routeProps) } />  
            </Switch>          
        }

        componentDidMount = () => this.props.loadData(DataTypes.CATEGORIES);
    }
)

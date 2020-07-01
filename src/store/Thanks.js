import React, { Component } from "react";
import { Link } from "react-router-dom";
import { HeaderBanner } from './../common/header/HeaderBanner';

export class Thanks extends Component {

  render() {
    return (
      <>
      <HeaderBanner />
        <div>
          <div className="m-2 text-center mt-8 mx-auto">
            <h2 className="text-lg font-bold mb-6">Thanks!</h2>
            <p className='mb-3'>Thank you for your business.</p>
            <p className="break-words w-64 mx-auto">Your order number: <span className="font-semibold">{this.props.order ? this.props.order.id : 0}</span></p>
            <p>is on the way...</p>
              <Link to="/store" className="sideBarButton w-40 mt-8">
                Return to Store
              </Link>
          </div>
        </div>
      </>
    ) 
  }
}

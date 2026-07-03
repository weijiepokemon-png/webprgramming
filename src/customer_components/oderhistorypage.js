import React from "react";
import ItemDisplayed from "../visitor_components/itemDisplayed";
import BackButton from "../userHandling_component/backButton";
import { Link } from "react-router-dom";
function OrderHistory() {
  return (
    <div >
      <BackButton/>
      {/* Top Navigation */}
      <div >

     
          <button className="btn btn-outline-dark me-3">
            Home
          </button>
      

        <input
          type="text"
          className="form-control"
          placeholder="Search Bar"
        />

      </div>

      {/* Main Content */}
      <div className="row">

        {/* Order Group */}
        <div className="col-md-8">

          <div className="card p-3">

            <h4 className="mb-3">Order Group</h4>
<ItemDisplayed id={1}/>
<ItemDisplayed id={22}/>
<ItemDisplayed id={23}/>
<ItemDisplayed id={8}/>
          </div>

        </div>

        {/* Total Bill */}
        <div className="col-md-4">

          <div className="card p-4 text-center">

            <h4>Total Bill</h4>

            <hr />

            <h5>$250.00</h5>

            <p>Shipping: $15.00</p>

            <hr />

            <h4>Total: $265.00</h4>

          </div>

        </div>

      </div>

    </div>
  );
}

export default OrderHistory;
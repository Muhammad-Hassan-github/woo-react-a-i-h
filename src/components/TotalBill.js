import React, { useState, useContext } from "react";
import MyContext from "../contextApi/context";

const TotalBill = ({ orderID }) => {
  const context = useContext(MyContext);

  const [shippingValue, setshippingValue] = useState(null);

  const changeShipping = (event) => {
    event.preventDefault();
    if(orderID){
    
      context.changeShipping(orderID, shippingValue);
    }    
      
  }
  return (
    <MyContext.Consumer>
    {(context) => {
      {console.log("context.getOverideTax" ,context.getOverideTax)}
      return (
    <div>
      <div
        className="card easion-card"
        style={{ boxShadow: "1px 3px 8px #888888", width: "100%" }}
      >
        <div class="container">
          <form className="pt-4">
            <div class="form-row">
              <div class="form-group col-md-6"></div>
              <div class="form-group col-md-3">
                {/* All Names */}
                <p>
                  Items Subtotal:
                  <button
                    style={{ fontSize: "14px" }}
                    type="button"
                    class="btn btn-outline-primary"
                    data-toggle="collapse"
                    data-target="#collapseExample-shipping"
                    aria-expanded="false"
                    aria-controls="collapseExample-shipping"
                  >
                    Edit Shipping
                  </button>
                </p>
                <p className="pt-2">Tax: </p>
                <p style={{ fontWeight: "500" }}>Order Total: </p>
                <p>Paid:</p>
                <p>Dues: </p>
              </div>

              {/* All Costs  */}
              <div class="form-group col-md-3">
                <p>$200.00</p>
                <span class="collapse" id="collapseExample-shipping">
                  <input type="number" onChange={(e) => setshippingValue(e.target.value)} />
                  <input className="btn btn-primary" style={{ float: "right" }} type="submit" onClick={changeShipping} />
                </span>

                <p className="pt-5">$15.50</p>
                <p>$215.50</p>
                <p>$0.00</p>
              </div>
            </div>
            <hr style={{ border: "1px solid lightGrey" }} />
            <div className="p-2">
              <button type="button" class="btn btn-outline-primary">
                Apply coupon
              </button>
              <button
                style={{ marginLeft: "8px" }}
                type="button"
                class="btn btn-outline-primary"
                data-toggle="collapse"
                data-target="#refundInfo-additem"
                aria-expanded="false"
                aria-controls="refundInfo-additem"
              >
                Refund
              </button>
              <button
                style={{ marginLeft: "8px" }}
                type="button"
                class="btn btn-outline-primary"
                data-toggle="modal"
                data-target="#shippmentbill"
              >
                Shippment
              </button>
              <span style={{ float: "right" }}>
                <span style={{ marginRight: "8px" }}>
                  <button type="button" class="btn btn-primary">
                    Recalculate Paid
                  </button>
                </span>
                <button type="button" class="btn btn-primary">
                  Recalculate
                </button>
              </span>
            </div>
          </form>
        </div>
      </div>
      {/* popup */}
      <div
        class="modal fade"
        id="shippmentbill"
        tabindex="-1"
        role="dialog"
        aria-labelledby="shippmentbillLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="shippmentbillLabel">
                Shippment
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              {/* shipping form start */}
              <form>
                <div class="form-row">
                  <div class="form-group col-md-8">
                    <label for="inputCity">
                      <input type="checkbox" /> Title
                    </label>
                    <p>
                      <input type="checkbox" /> name of the product
                    </p>
                  </div>
                  <div class="form-group col-md-2">
                    <label for="inputCity">Quantity</label>
                    <input type="number" style={{ width: "70%" }} disabled />
                  </div>
                  <div class="form-group col-md-2">
                    <label for="inputCity">Shipped</label>
                    <input type="number" style={{ width: "70%" }} />
                  </div>
                </div>
              </form>
              {/* Shipping Form end */}
            </div>
            <div>
              <hr style={{ border: "1px solid lightGrey", width: "90%" }} />
              <form className="pl-4 p-1">
                <div class="form-row">
                  <div class="form-group col-md-4">
                    <select id="inputState" class="form-control">
                      <option selected>Bulk Actions</option>
                      <option>Mark as Shipped</option>
                      <option>Unset Shipped</option>
                    </select>
                  </div>
                  <div class="form-group col-md-2">
                    <button type="button" class="btn btn-primary">
                      Update
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* Refund */}
      <div
        class="collapse"
        id="refundInfo-additem"
        className="card easion-card"
        style={{ boxShadow: "1px 3px 8px #888888", width: "100%" }}
      >
        <div className="container pt-4">
          <div class="form-row" style={{ fontSize: "14px" }}>
            <div class="form-group col-md-6"></div>
            <div class="form-group col-md-3">
              <p>Restock refunded items:</p>
              <p>Amount already refunded: </p>
              <p>Total available to refund: </p>
              <p> Refund amount:</p>
              <p>Reason for refund (optional):</p>
            </div>
            <div class="form-group col-md-3">
              <p>
                <input type="checkbox" />
              </p>
              <p>-$0.00</p>
              <p>$215.50</p>
              <p>$275.50</p>
              <p>
                <input type="text" disabled />
              </p>
              <p>
                <input type="text" />
              </p>
            </div>
          </div>
          <hr style={{ border: "1px solid lightGrey" }} />
          <div className="p-2">
            <button
              type="button"
              data-toggle="collapse"
              data-target="#refundInfo-additem"
              aria-expanded="false"
              aria-controls="refundInfo-additem"
              class="btn btn-outline-primary"
            >
              cancel
            </button>

            <span style={{ float: "right" }}>
              <button type="button" class="btn btn-primary">
                Refund $0.00 manually
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
     );

    }}

  </MyContext.Consumer >
  );
};

export default TotalBill;

import React, { useState, useContext } from "react";
import MyContext from "../contextApi/context";

const TotalBill = ({ orderID, totalOrder }) => {
  const context = useContext(MyContext);

  const [shippingValue, setshippingValue] = useState(null);

  const changeShipping = (event) => {
    event.preventDefault();
    if (orderID) {

      context.changeShipping(orderID, shippingValue);
    }

  }
  let subTotal = null;
  if (totalOrder.line_items) {
    totalOrder.line_items.forEach(item => {
      subTotal = subTotal + (parseFloat(item.price) * parseFloat(item.quantity));
    });
  }

  let totalCaTax = null;
  if (totalOrder.tax_lines) {
    totalOrder.tax_lines.forEach(item => {
      totalCaTax = totalCaTax + parseFloat(item.tax_total);
    });
  }

  let totalVaTax = null;
  if (totalOrder.tax_lines) {
    totalOrder.tax_lines.forEach(item => {
      totalVaTax = totalVaTax + parseInt(item.shipping_tax_total);
    });
  }
  return (
    <MyContext.Consumer>
      {(context) => {
        return (
          <div>
            {console.log(totalOrder)}
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
                    </div>

                    {/* All Costs  */}
                    <div class="form-group col-md-3">
                      <span class="collapse" id="collapseExample-shipping">
                        <input type="number" onChange={(e) => setshippingValue(e.target.value)} />
                        <input className="btn btn-primary" style={{ float: "right" }} type="submit" onClick={changeShipping} />
                      </span>

                      {/* ================================table=================================== */}
                      <table class="table">
                        <thead>
                          <tr>
                            <th scope="col">#</th>
                            <th scope="col">Value</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">Items SubTotal</th>
                            <td>${subTotal ? subTotal.toFixed(2) : 0}</td>
                          </tr>
                          <tr>
                            <th scope="row">Shipping</th>
                            <td>${totalOrder ? parseInt(totalOrder.shipping_total).toFixed(2) : 0}</td>
                          </tr>
                          <tr>
                            <th scope="row">Coupon(s)</th>
                            <td>-${totalOrder ? parseInt(totalOrder.discount_total).toFixed(2) : 0}</td>

                          </tr>
                          <tr>
                            <th scope="row">Tax</th>
                            <td>${totalCaTax ? totalCaTax.toFixed(2) : 0}</td>
                          </tr>
                          {/* <tr>
                            <th scope="row">VAT</th>
                            <td>${totalVaTax ? totalVaTax.toFixed(2) : 0}</td>
                          </tr> */}
                          <tr>
                            <th scope="row">Order Total</th>
                            <td>${orderID ? totalOrder.total : (subTotal - parseInt(totalOrder.discount_total) + totalCaTax + totalVaTax).toFixed(2)}</td>
                          </tr>
                          <tr>
                            <th scope="row">Paid</th>
                            <td>${(subTotal - parseInt(totalOrder.discount_total) + parseInt(totalOrder.shipping_total) + totalCaTax + totalVaTax).toFixed(2)}</td>
                          </tr>
                          <tr>
                            <th scope="row">Due</th>
                            <td>$0.00</td>
                          </tr>
                        </tbody>
                      </table>
                      {/* ======================================================================== */}

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

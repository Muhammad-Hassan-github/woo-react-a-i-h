import React from "react";
import { MDBIcon } from "mdbreact";

const Payments = () => {
  return (
    <>
      <div>
        <div
          className="card easion-card"
          style={{ boxShadow: "1px 3px 8px #888888", width: "100%" }}
        >
          <div className="easion-card-title" className="pl-3 pt-2">
            <span style={{ fontWeight: "bold", color: "grey" }}>Payments</span>
            <span style={{ float: "right" }} className="pr-3">
              <MDBIcon
                icon="chevron-down"
                style={{ color: "darkGrey", cursor: "pointer" }}
              />
              &nbsp;&nbsp;
              <MDBIcon
                icon="chevron-up"
                style={{ color: "darkGrey", cursor: "pointer" }}
              />
            </span>
          </div>
          <hr style={{ border: "1px solid lightGrey" }} />
          {/* Form starting here  */}
          <form style={{ fontSize: "14px" }}>
            <div class="form-row">
              <div class="form-group col-md-6">
                <div class="form-group col-md-12">
                  <label for="inputCity">Card Number</label>
                  <input
                    type="password"
                    class="form-control border border-secondary"
                    id="inputCity"
                    placeholder="**** **** **** ****"
                  />
                </div>

                <form className="pl-3">
                  <div class="form-row">
                    <div class="form-group col-md-6">
                      <label for="inputZip">Expiration</label>
                      <input
                        type="text"
                        class="form-control border border-secondary"
                        style={{ width: "90%" }}
                        id="inputZip"
                        placeholder="MM / YY"
                      />
                    </div>
                    <div class="form-group col-md-6">
                      <label for="inputZip">Security Code</label>
                      <input
                        type="text"
                        class="form-control border border-secondary"
                        style={{ width: "90%" }}
                        id="inputZip"
                        placeholder="***"
                      />
                    </div>

                    <div class="form-group col-md-9">
                      <label for="inputCity">Amount</label>
                      <input
                        type="password"
                        class="form-control border border-secondary"
                        id="inputCity"
                        placeholder="0"
                      />
                    </div>
                    <div
                      class="form-group col-md-3"
                      style={{ marginTop: "32px" }}
                    >
                      <abbr title="Autofill order total">
                        <button
                          type="button"
                          class="btn btn-secondary border border-secondary"
                        >
                          Auto fill
                        </button>
                      </abbr>
                    </div>
                    <button
                      type="button"
                      style={{ width: "95%", fontWeight: "500" }}
                      class="btn btn-outline-primary btn-md btn-block"
                      data-toggle="collapse"
                      data-target="#collapseExample-additem"
                      aria-expanded="false"
                      aria-controls="collapseExample-additem"
                    >
                      More
                    </button>
                    <form  class="collapse pt-3 pl-1" id="collapseExample-additem">
                      <div class="form-row">
                        <div class="form-group col-md-4 pt-2">
                          <label for="inputZip">Tax Amount</label>
                          <input
                            type="number"
                            class="form-control border border-secondary"
                            placeholder="0"
                          />
                        </div>
                        <div class="form-group col-md-4 pt-2">
                          <label for="inputZip">Freight Amount</label>
                          <input
                            type="number"
                            class="form-control border border-secondary"
                            placeholder="0"
                          />
                        </div>
                        <div class="form-group col-md-4 pt-2">
                          <label for="inputZip">Duty Amount</label>
                          <input
                            type="number"
                            class="form-control border border-secondary"
                            placeholder="0"
                          />
                        </div>
                        <div class="form-group col-md-12">
                          <label for="inputEmail4">PO Number</label>
                          <input
                            type="email"
                            class="form-control border border-secondary"
                            id="inputEmail4"
                            placeholder="Purchase order number"
                          />
                        </div>
                        <div class="form-check pl-4">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            id="gridCheck"
                          />
                          <label class="form-check-label" for="gridCheck">
                            ax Exempt
                          </label>
                        </div>
                      </div>
                    </form>
                  </div>
                </form>
              </div>
            </div>
          </form>
          {/* End Form */}
          <hr style={{ border: "1px solid lightGrey" }} />
          {/* Footer */}
          <form>
            <div class="form-row">
              <div class="form-group col-md-6">
                <span className="pl-2">
                  <button type="button" class="btn btn-primary">
                    Charge
                  </button>
                </span>
              </div>
              <div class="form-group col-md-6">
                <span style={{ float: "right" }} className="pr-4">
                  <button type="button" class="btn btn-outline-primary">
                    Close
                  </button>
                </span>
              </div>
            </div>
          </form>
          {/* End Footer */}
        </div>
      </div>
    </>
  );
};

export default Payments;

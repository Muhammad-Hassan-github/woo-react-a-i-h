import React from "react";
import { MDBIcon } from "mdbreact";

const EcheckPayment = () => {
  return (
    <>
      <div>
        <div
          className="card easion-card"
          style={{ boxShadow: "1px 3px 8px #888888", width: "100%" }}
        >
          <div className="easion-card-title" className="pl-3 pt-2">
            <span style={{ fontWeight: "bold", color: "grey" }}>
              Authorize.net Echeck Payments
            </span>
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
          <form className="container pb-2">
            <div class="form-row">
              <div class="form-group col-md-12">
                <div class="form-group">
                  <label for="inputAddress">Routing Number:</label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputAddress"
                    placeholder="**** **** **** ****"
                  />
                </div>
              </div>
            </div>

            <div class="form-row">
              <div class="form-group col-md-12">
                <div class="form-group">
                  <label for="inputAddress">Account Number:</label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputAddress"
                    placeholder="**** **** **** ****"
                  />
                </div>
              </div>
              
            </div>
            <div class="form-row">
              <div class="form-group col-md-12">
                <div class="form-group">
                  <label for="inputAddress">Name on Account:</label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputAddress"
                    placeholder="John Doe"
                  />
                </div>
              </div>
              
            </div>
            <div class="form-row">
              <div class="form-group col-md-12">
                <div class="form-group">
                  <label for="inputAddress">Account Type: (checking, savings, or businessChecking)</label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputAddress"
                    placeholder="savings"
                  />
                </div>
              </div>
              
            </div>
            <div class="form-row">
              <div class="form-group col-md-12">
                <div class="form-group">
                  <label for="inputAddress">Amount:</label>
                  <input
                    type="number"
                    class="form-control"
                    id="inputAddress"
                    placeholder="90"
                  />
                </div>
              </div>
              
            </div>
            <button type="button" class="btn btn-primary">Charge Echeck</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default EcheckPayment;

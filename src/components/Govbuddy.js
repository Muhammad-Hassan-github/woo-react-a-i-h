import React from "react";
import { MDBIcon } from "mdbreact";

const GovBuddy = () => {
  return (
    <>
      <div>
        <div
          className="card easion-card"
          style={{ boxShadow: "1px 3px 8px #888888", width: "100%" }}
        >
          <div className="easion-card-title" className="pl-3 pt-2">
            <span style={{ fontWeight: "bold", color: "grey" }}>
              Paid On GovBuddy
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

          {/* Form Starts from here */}
          <form className="container">
            <div class="form-group">
              <label for="exampleInputEmail1">Deposit Price</label>
              <input
                type="number"
                id="exampleInputEmail1"
                class="form-control"
                placeholder="232.26"
                style={{border:"1px solid"}}
              />
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Transaction Number</label>
              <input
                type="text"
                class="form-control"
                style={{border:"1px solid"}}
                placeholder="Password"
              />
            </div>
            <div className="pb-2">
              <button type="submit" class="btn btn-primary">
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default GovBuddy;

import React from "react";
import {MDBIcon} from 'mdbreact';

const PartialPayments = () => {
  return (
    <>
      <div>
        <div
          className="card easion-card"
          style={{ boxShadow: "1px 3px 8px #888888", width: "100%" }}
        >
          <div className="easion-card-title" className="pl-3 pt-2">
            <span style={{ fontWeight: "bold", color: "grey" }}>
              Partial Payments
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
          <div className="pl-3" style={{fontSize:"14px"}}>
              <p>No payment schedule found.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PartialPayments;

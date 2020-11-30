import React from "react";
import { MDBIcon } from "mdbreact";

const PdfInvoiceData = () => {
  return (
    <div>
      <div
        className="card easion-card"
        style={{ boxShadow: "1px 3px 8px #888888", width: "100%" }}
      >
        <div className="easion-card-title" className="pl-3 pt-2">
          {" "}
          <span style={{ fontWeight: "bold", color: "grey" }}> Create PDF</span>
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

        <div className="pl-3">
          <p style={{ fontWeight: 500 }}>
            Invoice{" "}
            <MDBIcon
              icon="pencil-alt"
              data-toggle="collapse"
              data-target="#collapseExample-pdf-invoice"
              aria-expanded="false"
              aria-controls="collapseExample-pdf-invoice"
              style={{ cursor: "pointer" }}
            />
            &nbsp;&nbsp;
            <MDBIcon far icon="trash-alt" style={{ cursor: "pointer" }} />
            &nbsp;&nbsp;
            <MDBIcon icon="sync-alt" style={{ cursor: "pointer" }} />
          </p>
          <form class="collapse" id="collapseExample-pdf-invoice">
            <div class="form-row">
              <div class="form-group col-md-12">
                <label for="inputCity">Invoice Number (unformatted!):</label>
                <input
                  type="text"
                  style={{ border: "1px solid", width: "33%" }}
                  class="form-control"
                  id="inputCity"
                />
              </div>
              <div class="form-group col-md-4">
                <label for="inputCity">Invoice Date:</label>
                <input
                  type="date"
                  style={{ border: "1px solid" }}
                  class="form-control"
                  id="inputCity"
                />
              </div>{" "}
              <span style={{ marginTop: "40px" }}>@</span>
              <div class="form-group col-md-2" style={{ marginTop: "30px" }}>
                <input
                  type="number"
                  min="0"
                  max="23"
                  style={{ border: "1px solid" }}
                  class="form-control"
                  id="inputCity"
                />
              </div>
              <span style={{ marginTop: "40px" }}>:</span>
              <div class="form-group col-md-2" style={{ marginTop: "30px" }}>
                <input
                  type="number"
                  min="0"
                  max="59"
                  style={{ border: "1px solid" }}
                  class="form-control"
                  id="inputCity"
                />
              </div>
              <div class="form-group col-md-12">
                <label for="inputEmail4">Notes (printed in the invoice):</label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  style={{ width: "70%", border: "1px solid" }}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PdfInvoiceData;

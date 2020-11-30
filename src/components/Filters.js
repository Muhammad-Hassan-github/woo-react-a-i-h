import React, { useState } from "react";
import MyContext from "../contextApi/context";

const Filters = () => {
  const [filterStatus, setFilterStatus] = useState(null);
  return (
    <MyContext.Consumer>
      {(context) => {
        return (
          <>
            <div className="container">
              <div className="mt-3" style={{ display: "flex" }}>
                <a style={{ marginRight: "5px" }} href="#">All (9,968)| </a>
                <a style={{ marginRight: "5px" }} href="#">Mine (27)| </a>
                <a style={{ marginRight: "5px" }} href="#">Trash (8)| </a>
                <a style={{ marginRight: "5px" }} href="#">Pending payment (53)| </a>
                <a style={{ marginRight: "5px" }} href="#">Processing (265)| </a>
                <a style={{ marginRight: "5px" }} href="#">On hold (2)| </a>
                <a style={{ marginRight: "5px" }} href="#">Completed (9,498)| </a>
                <a style={{ marginRight: "5px" }} href="#">Cancelled (147)| </a>
                <a style={{ marginRight: "5px" }} href="#">Failed (1)| </a>
                <a style={{ marginRight: "5px" }} href="#">Partially Shipped (2)</a>
              </div>
              <div>
                {/* Search box */}
                <form className="container" class="float-right pt-3">
                  <div class="form-row">
                    <div class="form-group mx-sm-3 mb-2">
                      <input
                        type="text"
                        class="form-control border-secondary"
                        id="inputPassword2"
                        placeholder="Search"
                      />
                    </div>
                    <button type="submit" class="btn btn-primary mb-2">
                      Search order
              </button>
                  </div>
                </form>
                {/* End Search Box */}
                <div className="pt-5">
                  <form className="pt-3">
                    <div class="form-row">
                      <div class="form-group mx-sm-3 mb-2 border border-secondary rounded">
                        <select id="inputState" class="form-control">
                          <option value="-1">Bulk actions</option>
                          <option value="trash">Move to Trash</option>
                          <option value="mark_partially_paid">
                            Mark partially paid
                    </option>
                          <option value="mark_processing">
                            Change status to processing
                    </option>
                          <option value="mark_on-hold">
                            Change status to on-hold
                    </option>
                          <option value="mark_completed">
                            Change status to completed
                    </option>
                          <option value="mark_as_shipped">Mark as Shipped</option>
                          <option value="invoice">PDF Invoice</option>
                          <option value="packing-slip">PDF Packing Slip</option>
                        </select>
                      </div>
                      <button type="submit" class="btn btn-primary mb-2">
                        Apply
                </button>
                    </div>
                  </form>
                </div>
                {/* Next Form List */}
                <form>
                  <div class="form-row">
                    <div class="form-group col-md-2">
                      <select id="inputState" class="form-control border-secondary">
                        <option selected="selected" value="0">
                          All dates
                  </option>
                        <option value="202011">November 2020</option>
                        <option value="202010">October 2020</option>
                        <option value="202009">September 2020</option>
                        <option value="202004">April 2020</option>
                        <option value="202003">March 2020</option>
                        <option value="202002">February 2020</option>
                        <option value="202001">January 2020</option>
                        <option value="201912">December 2019</option>
                        <option value="201911">November 2019</option>
                        <option value="201910">October 2019</option>
                        <option value="200310">October 2003</option>
                      </select>
                    </div>
                    <div class="form-group col-md-2">
                      <select id="inputState" class="form-control border-secondary">
                        <option selected>All Orders</option>
                        <option>...</option>
                      </select>
                    </div>
                    <div class="form-group col-md-2">
                      <select onChange={(e) => setFilterStatus(e.target.value)} id="inputState" class="form-control border-secondary">
                        <option disabled selected>Payment Status</option>
                        <option value='pending'>Pending Payment</option>
                        <option value='on-hold' >Partially Paid</option>
                        <option value='completed'>Paid</option>
                        <option value='refunded' >Refund</option>
                      </select>
                    </div>
                    <div class="form-group col-md-2">
                      <input
                        list="ice-cream-flavors"
                        id="ice-cream-choice"
                        name="ice-cream-choice"
                        placeholder="All Cetagory"
                        style={{ height: "38px", width: "100%" }}
                      />

                      <datalist id="ice-cream-flavors">
                        <option value="Chocolate">Chocolate</option>
                        <option value="Coconut">Coconut</option>
                        <option value="Mint">Mint</option>
                        <option value="Strawberry">Strawberry</option>
                        <option value="Vanilla">Vanilla</option>
                      </datalist>
                    </div>
                    <div class="form-group col-md-2">
                      <input
                        list="ice-cream-flavors"
                        placeholder="All Products"
                        id="ice-cream-choice"
                        name="ice-cream-choice"
                        style={{ height: "38px" }}
                      />

                      <datalist id="ice-cream-flavors">
                        <option value="Chocolate">ab</option>
                        <option value="Coconut">bd</option>
                        <option value="Mint">cf</option>
                        <option value="Strawberry">gf</option>
                        <option value="Vanilla">ty</option>
                      </datalist>
                    </div>
                    <div class="form-group col-md-2 pl-3">
                      <button type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          if (filterStatus !== null) { context.filterOrderByStatusFn(filterStatus) }
                        }}
                        class="btn btn-danger">
                        Filter
                </button>
                    </div>
                  </div>
                </form>
                {/* Last form row */}
                <form>
                  <div class="form-row">
                    <div class="form-group col-md-6">
                      <input
                        list="ice-cream-flavors"
                        id="ice-cream-choice"
                        name="ice-cream-choice"
                        placeholder="Filter by registered customer"
                        style={{ height: "38px", width: "250px" }}
                      />

                      <datalist id="ice-cream-flavors">
                        <option value="Chocolate">Chocolate</option>
                        <option value="Coconut">Coconut</option>
                        <option value="Mint">Mint</option>
                        <option value="Strawberry">Strawberry</option>
                        <option value="Vanilla">Vanilla</option>
                      </datalist>
                    </div>
                  </div>
                </form>
                {/* end last form row */}
              </div>
            </div>
          </>
        )
      }}

    </MyContext.Consumer >
  );
};

export default Filters;

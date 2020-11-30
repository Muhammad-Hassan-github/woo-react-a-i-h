import React from "react";
import { MDBIcon } from "mdbreact";

const AddCustomFeilds = () => {
  return (
    <>
      <div
        className="card easion-card"
        style={{ boxShadow: "1px 3px 8px #888888", width: "100%" }}
      >
        <div className="easion-card-title" className="pl-3 pt-2">
          <span style={{ fontWeight: "bold", color: "grey" }}>
            Custom Feilds
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

        <form className="container">
          <div class="form-row">
            <div class="form-group col-md-6 pt-2">
              <p
                className="pt-2"
                style={{
                  textAlign: "center",
                  fontWeight: 500,
                  boxShadow: "1px 3px 8px #888888",
                  height: "90%",
                }}
              >
                Name
              </p>
            </div>
            <div class="form-group col-md-6 pt-2">
              <p
                className="pt-2"
                style={{
                  textAlign: "center",
                  fontWeight: 500,
                  boxShadow: "1px 3px 8px #888888",
                  height: "90%",
                }}
              >
                Vlaue
              </p>
            </div>
            <div class="form-group col-md-6">
              <input
                type="email"
                class="form-control border-secondary"
                id="inputEmail4"
              />
              <div className="pt-2">
                <button type="button" class="btn btn-danger">
                  Delete
                </button>
                <span className="pl-2">
                  <button type="button" class="btn btn-primary">
                    Update
                  </button>
                </span>
              </div>
            </div>
            <div class="form-group col-md-6">
              <input
                type="email"
                class="form-control border border-secondary border-secondary"
                id="inputEmail4"
              />
            </div>
          </div>
        </form>
        <p className="pl-3">Add New Custom Field:</p>
        <form className="container">
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputEmail4">Name</label>
              <select id="inputState" class="form-control border border-secondary">
                {/* All custom feild option */}
                <option value="#NONE#" selected>
                  — Select —
                </option>

                <option value="apply_to">apply_to</option>
                <option value="based_on_purchase_history">
                  based_on_purchase_history
                </option>
                <option value="cart_discounted_products">
                  cart_discounted_products
                </option>
                <option value="coupons_to_apply">coupons_to_apply</option>
                <option value="coupons_to_apply_option">
                  coupons_to_apply_option
                </option>
                <option value="customer">customer</option>
                <option value="custom_price">custom_price</option>
                <option value="custom_price_option">custom_price_option</option>
                <option value="custom_shipping_class_data">
                  custom_shipping_class_data
                </option>
                <option value="custom_shipping_class_enable">
                  custom_shipping_class_enable
                </option>
                <option value="custom_tax_enable">custom_tax_enable</option>
                <option value="date_from">date_from</option>
                <option value="date_to">date_to</option>
                <option value="discount_range">discount_range</option>
                <option value="discount_rule">discount_rule</option>
                <option value="discount_type">discount_type</option>
                <option value="dynamic_coupons_to_apply">
                  dynamic_coupons_to_apply
                </option>
                <option value="exclude_sale_items">exclude_sale_items</option>
                <option value="fix_custom_price">fix_custom_price</option>
                <option value="fix_custom_price_drop">
                  fix_custom_price_drop
                </option>
                <option value="is_cumulative_for_products">
                  is_cumulative_for_products
                </option>
                <option value="is_vat_exempt">is_vat_exempt</option>
                <option value="max_woo_custom_discount_rules">
                  max_woo_custom_discount_rules
                </option>
                <option value="new_shipping">new_shipping</option>
                <option value="new_tax">new_tax</option>
                <option value="new_total">new_total</option>
                <option value="o-discount">o-discount</option>
                <option value="o-list">o-list</option>
                <option value="Old Order Completed Date">
                  Old Order Completed Date
                </option>
                <option value="Old Order Created Date">
                  Old Order Created Date
                </option>
                {/* Custom feild options ended */}
              </select>
              <a href="#">Enter new</a>
              <diV className="pt-2">
                <button type="button" style={{fontWeight:500}} class="btn btn-outline-primary">
                  Add Custom Feild
                </button>
              </diV>
            </div>

            <div class="form-group col-md-6">
              <label for="">Vale</label>
              <input type="text" class="form-control border border-secondary" id="" />
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddCustomFeilds;

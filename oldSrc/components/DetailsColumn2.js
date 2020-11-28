import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import MyContext from "../contextApi/context";


const OrderDetail2 = (props) => {
  const top100Films = [
    { title: "The Shawshank Redemption", year: 1994 },
    { title: "The Godfather", year: 1972 },
    { title: "The Godfather: Part II", year: 1974 },
  ];
  const [state, setState] = useState({
    b_f_name: null,
    b_l_name: null,
    b_a_l_1: null,
    b_a_l_2: null,
    b_city: null,
    b_state: null,
    b_post_code: null,
    b_country: null,
    b_email: null,
    b_phone: null,
    b_company: null,
    b_t_id: null,
    b_payment_method: null,
  })
  return (
    <MyContext.Consumer>
      {(context) => {
        return (
          <div>
            <p
              style={{
                fontSize: "14px",
                fontWeight: "bold",
                color: "#444",
              }}
            >
              Billing
      </p>
            <div className="text-sizing-management">
              <a href="#">Load billing address</a>
              <form>
                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="inputEmail4">First Name</label>
                    <input
                      style={{
                        height: "35px",
                        width: "105px",
                        fontSize: "14px",
                        border: "1px solid",
                      }}
                      type="email"
                      class="form-control"
                      id="inputEmail4"

                      value={(state.b_f_name !== null) ? state.b_f_name : (context.customerById.billing) ? context.customerById.billing.first_name : ""}
                      onChange={(e) => { setState({ ...state, b_f_name: e.target.value }); props.propsData.handleChange("b_f_name", e.target.value); }}

                    />
                  </div>
                  <div class="form-group col-md-6">
                    <label for="inputPassword4">Last Name</label>
                    <input
                      style={{
                        marginLeft: "30px",
                        height: "35px",
                        width: "105px",
                        fontSize: "14px",
                        border: "1px solid",
                      }}
                      type="text"
                      class="form-control"
                      id="inputPassword4"


                      value={(state.b_l_name !== null) ? state.b_l_name : (context.customerById.billing) ? context.customerById.billing.last_name : ""}
                      onChange={(e) => { setState({ ...state, b_l_name: e.target.value }); props.propsData.handleChange("b_l_name", e.target.value); }}

                    />
                  </div>
                  <label className="text-sizing-management" for="order_date">
                    Company
            </label>
                  <input
                    style={{
                      height: "35px",
                      width: "210px",
                      border: "1px solid",
                    }}
                    type="text"
                    class="form-control"

                    value={(state.b_company !== null) ? state.b_company : (context.customerById.billing) ? context.customerById.billing.company : ""}
                    onChange={(e) => { setState({ ...state, b_company: e.target.value }); props.propsData.handleChange("b_company", e.target.value); }}


                  />
                  {/* Customer Adress */}
                  <div class="form-group col-md-6">
                    <label style={{ fontSize: "11px" }} for="inputEmail4">
                      Adress line 1
              </label>
                    <input
                      style={{
                        height: "35px",
                        width: "100px",
                        fontSize: "14px",
                        border: "1px solid",
                      }}
                      type="email"
                      class="form-control"
                      id="inputEmail4"



                      value={(state.b_a_l_1 !== null) ? state.b_a_l_1 : (context.customerById.billing) ? context.customerById.billing.address_1 : ""}
                      onChange={(e) => { setState({ ...state, b_a_l_1: e.target.value }); props.propsData.handleChange("b_a_l_1", e.target.value); }}

                    />
                  </div>
                  <div class="form-group col-md-6">
                    <label style={{ fontSize: "12px" }} for="inputPassword4">
                      Adress line 2
              </label>
                    <input
                      style={{
                        marginLeft: "30px",
                        height: "35px",
                        width: "100px",
                        fontSize: "14px",
                        border: "1px solid",
                      }}
                      type="text"
                      class="form-control"
                      id="inputPassword4"

                     

                      value={(state.b_a_l_2 !== null) ? state.b_a_l_2 : (context.customerById.billing) ? context.customerById.billing.address_2 : ""}
                      onChange={(e) => { setState({ ...state, b_a_l_2: e.target.value }); props.propsData.handleChange("b_a_l_2", e.target.value); }}

                    />
                  </div>
                  {/* City / Zip code */}
                  <div class="form-group col-md-6">
                    <label style={{ fontSize: "12px" }} for="inputEmail4">
                      City
              </label>
                    <input
                      style={{
                        height: "35px",
                        width: "100px",
                        fontSize: "14px",
                        border: "1px solid",
                      }}
                      type="email"
                      class="form-control"
                      id="inputEmail4"

                      value={(state.b_city !== null) ? state.b_city : (context.customerById.billing) ? context.customerById.billing.city : ""}
                      onChange={(e) => { setState({ ...state, b_city: e.target.value }); props.propsData.handleChange("b_city", e.target.value); }}

    

                    />
                  </div>
                  <div class="form-group col-md-6">
                    <label style={{ fontSize: "12px" }} for="inputPassword4">
                      Postcode/Zip
              </label>
                    <input
                      style={{
                        marginLeft: "30px",
                        height: "35px",
                        width: "100px",
                        fontSize: "14px",
                        border: "1px solid",
                      }}
                      type="text"
                      class="form-control"
                      id="inputPassword4"

                    
                      value={(state.b_post_code !== null) ? state.b_post_code : (context.customerById.billing) ? context.customerById.billing.postcode : ""}
                      onChange={(e) => { setState({ ...state, b_post_code: e.target.value }); props.propsData.handleChange("b_post_code", e.target.value); }}


                    />
                  </div>
                  {/* Drop Down */}
                  <div class="form-group col-md-12">
                    <label style={{ fontSize: "14px" }} for="inputPassword4">
                      Country/Region
              </label>
                    <Autocomplete
                      id="Country"
                      options={top100Films}
                      getOptionLabel={(option) => option.title}
                      style={{ width: 200, border: "1px solid" }}
                      renderInput={(params) => (
                        <TextField {...params} variant="outlined" />
                      )}
                    />
                  </div>
                  <div class="form-group col-md-12">
                    <label style={{ fontSize: "14px" }} for="inputPassword4">
                      State/County
              </label>
                    <Autocomplete
                      id="Country"
                      options={top100Films}
                      getOptionLabel={(option) => option.title}
                      style={{ width: 200, border: "1px solid" }}
                      renderInput={(params) => (
                        <TextField {...params} variant="outlined" />
                      )}
                    />
                  </div>
                  {/* Email Phone Number */}
                  <div class="form-group col-md-6">
                    <label style={{ fontSize: "11px" }} for="inputEmail4">
                      Email address
              </label>
                    <input
                      style={{
                        height: "35px",
                        width: "100px",
                        fontSize: "14px",
                        border: "1px solid",
                      }}
                      type="email"
                      class="form-control"
                      id="inputEmail4"
               
                      value={(state.b_email !== null) ? state.b_email : (context.customerById.billing) ? context.customerById.billing.email : ""}
                      onChange={(e) => { setState({ ...state, b_email: e.target.value }); props.propsData.handleChange("b_email", e.target.value); }}



                    />
                  </div>
                  <div class="form-group col-md-6">
                    <label style={{ fontSize: "12px" }} for="inputEmail4">
                      Phone
              </label>
                    <input
                      style={{
                        height: "35px",
                        width: "100px",
                        fontSize: "14px",
                        marginLeft: "30px",
                        border: "1px solid",
                      }}
                      type="email"
                      class="form-control"
                      id="inputEmail4"

                      
                      
                      value={(state.b_phone !== null) ? state.b_phone : (context.customerById.billing) ? context.customerById.billing.phone : ""}
                      onChange={(e) => { setState({ ...state, b_phone: e.target.value }); props.propsData.handleChange("b_phone", e.target.value); }}



                    />

                  </div>
                  {/* Payment Method &  trnsection ID */}
                  <div class="form-group">
                    <label className="text-sizing-management" for="order_status">
                      Payment Method
              </label>
                    <select
                      style={{
                        height: "35px",
                        width: "200px",
                        fontSize: "14px",
                        border: "1px solid",
                      }}
                      class="form-control"
                      onChange={(e) => { props.propsData.handleChange("b_payment_method", e) }}
                    >
                      <option selected value="N/A"  >N/A</option>
                      <option value="other" >Other</option>
                    </select>
                  </div>
                  <label className="text-sizing-management" for="order_date">
                    Transaction Id
            </label>
                  <input
                    style={{
                      height: "35px",
                      width: "210px",
                      border: "1px solid",
                    }}
                    type="text"
                    class="form-control"

                    value={(state.b_t_id !== null) ? state.b_t_id : (context.customerById.billing) ? context.customerById.billing.transaction_id : ""}
                    onChange={(e) => { setState({ ...state, b_t_id: e.target.value }); props.propsData.handleChange("b_t_id", e.target.value); }}


                  />
                </div>
              </form>
            </div>
          </div>
        )
      }}

    </MyContext.Consumer >
  );
};

export default OrderDetail2;

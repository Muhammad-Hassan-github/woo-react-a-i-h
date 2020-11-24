import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import MyContext from "../contextApi/context";


const OrderDetails3 = (props) => {
  const top100Films = [
    { title: "The Shawshank Redemption", year: 1994 },
    { title: "The Godfather", year: 1972 },
    { title: "The Godfather: Part II", year: 1974 },
  ];
  return (
    <MyContext.Consumer>
      {(context) => {
        return (
          <div>
            <p
              style={{
                fontSize: "14px",
                fontWeight: "bold",
                color: "#440",
              }}
            >
              Shipping
      </p>
            <div style={{ fontSize: "12px" }}>
              <a href="#">copy shipping address</a>
            </div>
            {/* form row started */}
            <div class="form-row">
              <form>
                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label style={{ fontSize: "14px" }} for="inputEmail4">
                      First Name
              </label>
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
                      defaultValue={(context.customerById.shipping) ? context.customerById.shipping.first_name : ""}
                      onChange={(e) => { props.propsData.handleChange("s_f_name", e) }}
                    />
                  </div>
                  <div class="form-group col-md-6">
                    <label style={{ fontSize: "14px" }} for="inputPassword4">
                      Last Name
              </label>
                    <input
                      style={{
                        marginLeft: "10px",
                        height: "35px",
                        width: "105px",
                        fontSize: "14px",
                        border: "1px solid",
                      }}
                      type="text"
                      class="form-control"
                      id="inputPassword4"
                      defaultValue={(context.customerById.shipping) ? context.customerById.shipping.last_name : ""}
                      onChange={(e) => { props.propsData.handleChange("s_l_name", e) }}

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
                    defaultValue={(context.customerById.shipping) ? context.customerById.shipping.last_name : ""}
                    onChange={(e) => { props.propsData.handleChange("s_company", e) }}
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
                      defaultValue={(context.customerById.shipping) ? context.customerById.shipping.address_1 : ""}
                      onChange={(e) => { props.propsData.handleChange("s_a_l_1", e) }}

                    />
                  </div>
                  <div class="form-group col-md-6">
                    <label style={{ fontSize: "12px" }} for="inputPassword4">
                      Adress line 2
              </label>
                    <input
                      style={{
                        marginLeft: "10px",
                        height: "35px",
                        width: "100px",
                        fontSize: "14px",
                        border: "1px solid",
                      }}
                      type="text"
                      class="form-control"
                      id="inputPassword4"
                      defaultValue={(context.customerById.shipping) ? context.customerById.shipping.address_2 : ""}
                      onChange={(e) => { props.propsData.handleChange("s_a_l_2", e) }}


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
                      defaultValue={(context.customerById.shipping) ? context.customerById.shipping.city : ""}
                      onChange={(e) => { props.propsData.handleChange("s_city", e) }}


                    />
                  </div>
                  <div class="form-group col-md-6">
                    <label style={{ fontSize: "12px" }} for="inputPassword4">
                      Postcode/Zip
              </label>
                    <input
                      style={{
                        marginLeft: "10px",
                        height: "35px",
                        width: "100px",
                        fontSize: "14px",
                        border: "1px solid",
                      }}
                      type="text"
                      class="form-control"
                      id="inputPassword4"
                      defaultValue={(context.customerById.shipping) ? context.customerById.shipping.postcode : ""}
                      onChange={(e) => { props.propsData.handleChange("s_post_code", e) }}


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
                  {/* Customer provided note */}
                  <div class="form-group col-md-12">
                    <label style={{ fontSize: "14px" }} for="inputPassword4">
                      Customer provided note
              </label>
                    <textarea style={{ width: "200px" }}
    
                     onChange={(e) => { props.propsData.handleChange("s_c_note", e) }}
                    >

                    </textarea>
                  </div>
                </div>
              </form>
            </div>
          </div>
        )
      }}

    </MyContext.Consumer >
  );
};

export default OrderDetails3;

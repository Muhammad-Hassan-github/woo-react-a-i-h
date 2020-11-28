import React , {useState} from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import MyContext from "../contextApi/context";


const OrderDetails3 = (props) => {
  const [state, setState] = useState({
    s_f_name: null,
    s_l_name: null,
    s_a_l_1: null,
    s_a_l_2: null,
    s_city: null,
    s_state: null,
    s_post_code: null,
    s_country: null,
    s_company: null,
    s_c_note: null,
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
                      

                      value={(state.s_f_name !== null) ? state.s_f_name : (context.customerById.shipping) ? context.customerById.shipping.first_name : ""}
                      onChange={(e) => { setState({ ...state, s_f_name: e.target.value }); props.propsData.handleChange("s_f_name", e.target.value); }}

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
                     

                      value={(state.s_l_name !== null) ? state.s_l_name : (context.customerById.shipping) ? context.customerById.shipping.last_name : ""}
                      onChange={(e) => { setState({ ...state, s_l_name: e.target.value }); props.propsData.handleChange("s_l_name", e.target.value); }}


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
                
                    
                    value={(state.s_company !== null) ? state.s_company : (context.customerById.shipping) ? context.customerById.shipping.last_name : ""}
                    onChange={(e) => { setState({ ...state, s_company: e.target.value }); props.propsData.handleChange("s_company", e.target.value); }}
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
                  

                      
                    value={(state.s_a_l_1 !== null) ? state.s_a_l_1 : (context.customerById.shipping) ? context.customerById.shipping.address_1 : ""}
                    onChange={(e) => { setState({ ...state, s_a_l_1: e.target.value }); props.propsData.handleChange("s_a_l_1", e.target.value); }}

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
                      

                      
                    value={(state.s_a_l_2 !== null) ? state.s_a_l_2 : (context.customerById.shipping) ? context.customerById.shipping.s_a_l_2 : ""}
                    onChange={(e) => { setState({ ...state, s_a_l_2: e.target.value }); props.propsData.handleChange("s_a_l_2", e.target.value); }}


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
                     

                      value={(state.s_city !== null) ? state.s_city : (context.customerById.shipping) ? context.customerById.shipping.city : ""}
                      onChange={(e) => { setState({ ...state, s_city: e.target.value }); props.propsData.handleChange("s_city", e.target.value); }}
  

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

                    

                      
                      value={(state.s_post_code !== null) ? state.s_post_code : (context.customerById.shipping) ? context.customerById.shipping.postcode : ""}
                      onChange={(e) => { setState({ ...state, s_post_code: e.target.value }); props.propsData.handleChange("s_post_code", e.target.value); }}
  


                    />
                  </div>
                  {/* Drop Down */}
                  <div class="form-group col-md-12">
                    <label style={{ fontSize: "14px" }} for="inputPassword4">
                      Country/Region
              </label>
                    <Autocomplete
                      id="Country"
                      options={[]}
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
                      options={[]}
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

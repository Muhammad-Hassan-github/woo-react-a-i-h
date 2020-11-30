import React, {
  useReducer,
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";
import MyContext from "../contextApi/context";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import moment from "moment";


const OrderDetail1 = (props) => {

  const context = useContext(MyContext);
  const [flag2, setFlag2] = useState(true);
  const [searchValue, setSearchValue] = useState('');
  const [customerKey, setCustomerKey] = useState(null);
  const options = ['Option 1', 'Option 2'];

  const [value, setValue] = React.useState("hhh");
  const [inputValue, setInputValue] = React.useState('');

  const [state, setState] = useState({

    email: "",
    first_name: "",
    last_name: '',
    username: "",
    status:"",
    b_first_name: "",
    b_last_name: "",
    b_company: "",
    b_address_1: "",
    b_address_2: "",
    b_city: "",
    b_state: "",
    b_postcode: "",
    b_country: "",
    b_email: "",
    b_phone: "",
    s_first_name: "",
    s_last_name: "",
    s_company: "",
    s_address_1: "",
    s_address_2: "",
    s_city: "",
    s_state: "",
    s_postcode: "",
    s_country: "",
    

  });

  let createUser = () => {

    const data = {

      email: state.email,
      status:state.status,
      first_name: state.first_name,
      last_name: state.last_name,
      username: state.username,
      billing: {
        first_name: state.b_first_name,
        last_name: state.b_last_name,
        company: state.b_company,
        address_1: state.b_address_1,
        address_2: state.b_address_2,
        city: state.b_city,
        state: state.b_state,
        postcode: state.b_postcode,
        country: state.b_country,
        email: state.email,
        phone: state.b_phone,
      },
      shipping: {
        first_name: state.s_first_name,
        last_name: state.s_last_name,
        company: state.s_company,
        address_1: state.s_address_1,
        address_2: state.s_address_2,
        city: state.s_city,
        state: state.s_state,
        postcode: state.s_postcode,
        country: state.s_country,
      }
    };

     
    context.createUserFn(data)

  }

  let handleChange = (name, e) => {
    setState({ ...state, [name]: e.target.value })
  };

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
              General
              
      </p>
            {/* date */}

            <label className="text-sizing-management" for="order_date">
              Date created:
      </label>
            <input
              style={{
                height: "35px",
                width: "160px",
                border: "1px solid",
              }}
              type="text"
              class="form-control"
              value={props.propsData.orderId?moment(context.customerById.date_created).format('lll'):moment(Date.now()).format('lll')} 
            />

            {/* Pyment drop-down */}

            <div class="form-group">
              <label className="text-sizing-management" for="order_status">
                Status:
          <a href="#">&nbsp;Customer payment page →</a>{" "}
              </label>
              <select
                style={{
                  height: "35px",
                  width: "160px",
                  fontSize: "14px",
                  border: "1px solid",
                }}
                class="form-control"
                onChange={(e) => { props.propsData.handleChange("status", e) }}
              >
                <option selected value="pending" >panding payment</option>
                <option value="refunded" >Partial Paid</option>
                <option value="processing"  >processing</option>
                <option value="on-hold"  >on hold</option>
                <option value="completed"  >completed</option>
                <option value="cancelled"  >canceled</option>
              </select>
            </div>
            {/* order details */}
            <b className="text-sizing-management">Order Totals</b>
            <p>
              <label className="text-sizing-management" for="order_date">
                New Total
        </label>
              <input
                style={{
                  height: "35px",
                  width: "160px",
                  border: "1px solid",
                }}
                type="text"
                class="form-control"
              />
            </p>

            <label className="text-sizing-management" for="order_date">
              New Total Tax
      </label>
            <input
              style={{
                height: "35px",
                width: "160px",
                border: "1px solid",
              }}
              type="text"
              class="form-control"
            />

            <label className="text-sizing-management" for="order_date">
              New Total Shipping
      </label>
            <input
              style={{
                height: "35px",
                width: "160px",
                border: "1px solid",
              }}
              type="text"
              class="form-control"
            />

            {/* Customer dropdown */}

            <div class="form-group">
              <label className="text-sizing-management" for="order_status">
                Customer
        </label>

        <Autocomplete
               id="controllable-states-demo"
                value={context.autocompleValueInEditPage.first_name ? `${context.autocompleValueInEditPage.first_name} ${context.autocompleValueInEditPage.last_name} (#${context.autocompleValueInEditPage.username} - ${context.autocompleValueInEditPage.email}) `  : ""}
     
                options={
                  context.customerdetail && Object.entries(context.customerdetail).map((element, index) => {
                    return (
                      element[1]
                    )

                  })
                }
                getOptionLabel={(option) => option.objValue  ?  option.objValue : context.autocompleValueInEditPage ? `${context.autocompleValueInEditPage.first_name} ${context.autocompleValueInEditPage.last_name} (#${context.autocompleValueInEditPage.username} - ${context.autocompleValueInEditPage.email}) `  : ""}
             
                style={{ width: "120%" }}
                renderInput={(params) => {
                  if (params.inputProps.value) {

                    if (params.inputProps.value !== searchValue || flag2) {
                      context.searchCustomer(params.inputProps.value);
                      setSearchValue(params.inputProps.value)
                      setFlag2(false)
                    }

                  }
                  return <TextField {...params} label="Customer" value="The Godfather"  variant="outlined" />
                }}

                onChange={(event, newValue) => {

                  if (newValue) {
                    setCustomerKey(newValue.objKey)
                    context.setSelectCustomerId(newValue.objKey)
                    context.searchCustomerById(newValue.objKey)
                  }

                }}
              />
           
            </div>
            {/* Create user info */}
            <button
              class="btn btn-outline-primary"
              type="button"
              style={{ border: "2px solid", fontWeight: "450" }}
              data-toggle="collapse"
              data-target="#collapseExample"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              Create User
      </button>

            {/* Starting Show hide form  */}
            <div class="collapse" id="collapseExample">
              <div className="pt-2">
                <input
                  style={{
                    height: "35px",
                    width: "200px",
                    border: "1px solid",
                  }}
                  type="text"
                  class="form-control"
                  placeholder="First Name"
                  onChange={(e) => { handleChange("first_name", e) }}
                />
              </div>
              <div className="pt-2">
                <input
                  style={{
                    height: "35px",
                    width: "200px",
                    border: "1px solid",
                  }}
                  type="text"
                  class="form-control"
                  placeholder="Last Name"
                  onChange={(e) => { handleChange("last_name", e) }}
                />
              </div>
              <div className="pt-2">
                <input
                  style={{
                    height: "35px",
                    width: "200px",
                    border: "1px solid",
                  }}
                  type="text"
                  class="form-control"
                  placeholder="Email"
                  onChange={(e) => { handleChange("email", e) }}

                />
              </div>
              <div className="pt-2">
                <input
                  style={{
                    height: "35px",
                    width: "200px",
                    border: "1px solid",
                  }}
                  type="text"
                  class="form-control"
                  placeholder="Phone"
                  onChange={(e) => { handleChange("phone", e) }}

                />
              </div>
              {/* User Shipping info  */}
              <p className="pt-2" style={{ fontSize: "13px" }}>
                Customer billing address
          {/* <a href="#" style={{fontSize:"10px"}}>copy shipping address</a>
           */}
              </p>
              <div>
                <input
                  style={{
                    height: "35px",
                    width: "200px",
                    border: "1px solid",
                  }}
                  type="text"
                  class="form-control"
                  placeholder="Adress 1"
                  onChange={(e) => { handleChange("b_address_1", e) }}

                />
              </div>
              <div className="pt-2">
                <input
                  style={{
                    height: "35px",
                    width: "200px",
                    border: "1px solid",
                  }}
                  type="text"
                  class="form-control"
                  placeholder="Adress 2"
                  onChange={(e) => { handleChange("b_address_2", e) }}
                />
              </div>
              <div className="pt-2">
                <input
                  style={{
                    height: "35px",
                    width: "200px",
                    border: "1px solid",
                  }}
                  type="text"
                  class="form-control"
                  placeholder="City"
                  onChange={(e) => { handleChange("b_city", e) }}

                />
              </div>
              <div className="pt-2">
                <input
                  style={{
                    height: "35px",
                    width: "200px",
                    border: "1px solid",
                  }}
                  type="text"
                  class="form-control"
                  placeholder="State"
                  onChange={(e) => { handleChange("b_state", e) }}

                />
              </div>
              <div className="pt-2">
                <input
                  style={{
                    height: "35px",
                    width: "200px",
                    border: "1px solid",
                  }}
                  type="text"
                  class="form-control"
                  placeholder="Zip Code"
                  onChange={(e) => { handleChange("b_zipcode", e) }}

                />
              </div>
              {/* Customer Shipping Adress */}
              <p className="pt-2" style={{ fontSize: "12px" }}>
                Customer Shipping address
          {/* <a href="#" style={{fontSize:"10px"}}>copy shipping address</a>
           */}
              </p>
              <div>
                <input
                  style={{
                    height: "35px",
                    width: "200px",
                    border: "1px solid",
                  }}
                  type="text"
                  class="form-control"
                  placeholder="Adress 1"
                  onChange={(e) => { handleChange("s_zipcode", e) }}

                />
              </div>
              <div className="pt-2">
                <input
                  style={{
                    height: "35px",
                    width: "200px",
                    border: "1px solid",
                  }}
                  type="text"
                  class="form-control"
                  placeholder="Adress 2"
                  onChange={(e) => { handleChange("s_address_2", e) }}

                />
              </div>
              <div className="pt-2">
                <input
                  style={{
                    height: "35px",
                    width: "200px",
                    border: "1px solid",
                  }}
                  type="text"
                  class="form-control"
                  placeholder="City"
                  onChange={(e) => { handleChange("s_city", e) }}

                />
              </div>
              <div className="pt-2">
                <input
                  style={{
                    height: "35px",
                    width: "200px",
                    border: "1px solid",
                  }}
                  type="text"
                  class="form-control"
                  placeholder="State"
                  onChange={(e) => { handleChange("s_state", e) }}

                />
              </div>
              <div className="pt-2">
                <input
                  style={{
                    height: "35px",
                    width: "200px",
                    border: "1px solid",
                  }}
                  type="text"
                  class="form-control"
                  placeholder="Zip Code"
                  onChange={(e) => { handleChange("s_ zipdcode", e) }}

                />
              </div>
            </div>
            {/* End Show Hide Form  */}

            {/* =============================================================================== */}

            {/* Select Payment Status */}
            <div class="form-group">
              <label className="text-sizing-management" for="order_status">
                Select Your Payment Status
        </label>
              <select
                style={{
                  height: "35px",
                  width: "200px",
                  fontSize: "14px",
                  border: "1px solid",
                }}
                class="form-control"
                onChange={(e) => { handleChange("status", e) }}
                defaultValue="pending"

              >
                <option value="pending">panding payment</option>
                <option value="processing">Partial Paid</option>
                <option value="completed" >Paid</option>
                <option value="refunded" >Refund</option>
              </select>
              <br/><button className='btn btn-primary' onClick={createUser}>Create User</button>
            </div>
          </div>
        )
      }}

    </MyContext.Consumer >
  );
};

export default OrderDetail1;

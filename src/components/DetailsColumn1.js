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

const OrderDetail1 = (props) => {

  const context = useContext(MyContext);
  const [flag2, setFlag2] = useState(true);
  const [searchValue, setSearchValue] = useState('');
  const [customerKey, setCustomerKey] = useState(null);

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
          id="combo-box-demo"
          options={

            context.customerdetail && Object.entries(context.customerdetail).map((element, index) => {
              return (
                element[1]
              )

            })
          }
          getOptionLabel={(option) => option.objValue}
          style={{ width: "120%" }}
          renderInput={(params) => {


            if (params.inputProps.value) {

              if (params.inputProps.value !== searchValue || flag2) {
                context.searchCustomer(params.inputProps.value);
                setSearchValue(params.inputProps.value)
                setFlag2(false)
              }

            }

            return <TextField {...params} label="Customer" variant="outlined" />
          }}

          onChange={(event, newValue) => {

            if (newValue) {
              setCustomerKey(newValue.objKey)
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
        >
          <option selected>panding payment</option>
          <option>Partial Paid</option>
          <option>Paid</option>
          <option>Refund</option>
        </select>
      </div>
    </div>
     )
    }}

  </MyContext.Consumer >
  );
};

export default OrderDetail1;

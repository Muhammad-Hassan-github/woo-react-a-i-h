import React, { useState  , useContext} from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import MyContext from "../contextApi/context";
import { MDBIcon } from "mdbreact";

const AddItems = () => {
  const context = useContext(MyContext)
  let paramsValue = '';
  const [flag, setFlag] = useState(true);
  
  const [productID, setID] = useState();
  const [productName, setName] = useState();
  const [productQnt, setQnt] = useState();
  const [searchValue, setSearchValue] = useState('');


  const AddProduct = (event) => {
    event.preventDefault();
    let obj = { 
      product_id:productID,
       quantity:productQnt 
      };
    context.setPlaceOrderItem([...context.placeOrderItem ,obj])
  }

  return (
    <MyContext.Consumer>
      {(context) => {
        return (
          <div>
           
            <div
              className="card easion-card"
              style={{ boxShadow: "1px 3px 8px #888888", width: "100%" }}
            >
              <div className="p-3">
                <button
                  type="button"
                  class="btn btn-primary"
                  data-toggle="collapse"
                  data-target="#collapseExample-additem"
                  aria-expanded="false"
                  aria-controls="collapseExample-additem"
                >
                  Add Item(s)
          </button>

                <div class="collapse pt-3" id="collapseExample-additem">
                  <span>
                    <button
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseExample-addproduct"
                      aria-expanded="false"
                      aria-controls="collapseExample-addproduct"
                      class="btn btn-outline-secondary"
                    >
                      Add Products
              </button>
                  </span>
                  <span className="pl-2">
                    <button type="button" class="btn btn-outline-secondary">
                      Add Fee
              </button>
                  </span>
                  <span className="pl-2">
                    {" "}
                    <button type="button" class="btn btn-outline-secondary">
                      Add Shipping
              </button>
                  </span>
                </div>
                {/* product table */}
                <div class="collapse pt-3" id="collapseExample-addproduct">
                  {/* <form> */}
                  <div class="form-row">
                    <div class="form-group col-md-5">
                      

                      <Autocomplete
                        id="combo-box-demo"
                        options={

                          context.searchItem && Object.entries(context.searchItem).map((element, index) => {
                            console.log(element[1].name)
                            return (
                              element[1]
                            )

                          })
                        }
                        
                        
                        getOptionLabel={(option) => option.name}
                        style={{ width: "100%" }}
                        renderInput={(params) => {


                          if (params.inputProps.value) {

                            if (params.inputProps.value !== searchValue || flag ) {
                              context.searchItemsFn(params.inputProps.value);
                              setSearchValue(params.inputProps.value)
                              setFlag(false)
                            }

                          }

                          return <TextField {...params} label="Customer" variant="outlined" />
                        }}

                        onChange={(event, value) => {

                          setID(value.id);
                          setName(value.name)

                        }}
                      />

                    </div>
                    {/* QTY */}
                    <div class="form-group col-md-2 pt-1">
                      <input
                        type="number"
                        style={{ width: "50%", height: "50px" }}
                        placeholder=" QTY"
                        min="1"
                        onChange={(e) => setQnt(e.target.value)}
                      />
                    </div>

                    <div class="form-group col-md-5 pl-2 pt-2">
                      <button type="button" class="btn btn-primary" onClick={AddProduct}>
                        Add Item
                  </button>
                    </div>
                  </div>
                  {/* </form> */}

                  {/* Products Table List  */}

                  <div style={{ overflowX: "auto" }}>
                    <table class="table">
                      <thead>
                        <tr>
                          <th scope="col">Id</th>
                          {/* Item info */}
                          <th scope="col"></th>
                          <th scope="col">Item</th>
                          <th scope="col"></th>
                          <th scope="col"></th>
                          <th scope="col"></th>
                          <th scope="col"></th>

                          {/* item info end */}

                          <th scope="col">Cost</th>
                          <th scope="col">Qty</th>
                          <th scope="col">Sub-Total</th>
                          <th scope="col">OH Tax</th>
                          <th scope="col">VAT</th>
                          {/* Har product k against dalna ha ya total ma dalna ha tex */}
                          <th scope="col">Shipment</th>
                          <th scope="col">Shipping Cost</th>
                          <th scope="col">Status</th>
                          <th scope="col">Total</th>
                        </tr>
                      </thead>
                      <tbody style={{ fontSize: "13px" }}>
                        {
                          context.placeOrderItem ? context.placeOrderItem.map((item, index) => {
                            return <tr>
                              <td scope="row">{item.productID}</td>
                              <td>
                                <img
                                  src="pic.jpg"
                                  style={{
                                    width: "40px",
                                    height: "50px",
                                  }}
                                />
                              </td>

                              <td colSpan="5">
                                {item.productName}
                              </td>
                              <td>$25.00</td>
                              <td>{item.productQnt}</td>

                              <td>
                                <a
                                  href="#shippingTable"
                                  data-toggle="modal"
                                  data-target="#shippingTable"
                                >
                                  <MDBIcon icon="truck" />
                                </a>
                              </td>
                              <td>$34.55</td>
                              <td>$55.67</td>
                              <td
                                style={{ backgroundColor: "lightgreen", color: "white" }}
                              >
                                Shipped
                             <div>2-11/23/20</div>
                              </td>
                              <td>$0</td>
                              <td>paid</td>

                              <td>$200</td>
                            </tr>
                          }) : null
                        }
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              {/* popup  shipping info */}
              <div
                class="modal fade"
                id="shippingTable"
                tabindex="-1"
                role="dialog"
                aria-labelledby="shippingTableLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="shippingTableLabel">
                        Shipping Details
                </h5>
                      <button
                        type="button"
                        class="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body">
                      {/* shipping form start */}
                      <form>
                        <div class="form-row">
                          <div class="form-group col-md-8">
                            <label for="inputCity">Title</label>
                            <p>name of the product</p>
                          </div>
                          <div class="form-group col-md-2">
                            <label for="inputCity">Quantity</label>
                            <input type="number" style={{ width: "70%" }} disabled />
                          </div>
                          <div class="form-group col-md-2">
                            <label for="inputCity">Shipped</label>
                            <input type="number" style={{ width: "70%" }} />
                          </div>
                        </div>
                      </form>
                      {/* Shipping Form end */}
                    </div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-primary"
                        data-dismiss="modal"
                      >
                        Mark as Shipped
                </button>
                      <button type="button" class="btn btn-primary">
                        Unset shipped
                </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      }}

    </MyContext.Consumer >
  );
};

export default AddItems;
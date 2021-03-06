import React, { useState, useContext } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import MyContext from "../contextApi/context";
import { MDBIcon } from "mdbreact";

const AddItems = ({ addItems, taxLines }) => {
  const context = useContext(MyContext)
  let paramsValue = '';
  const [flag, setFlag] = useState(true);

  const [productID, setID] = useState();
  const [productName, setName] = useState();
  const [productQnt, setQnt] = useState();
  const [searchValue, setSearchValue] = useState('');
  const [itemDetails, setItemDetails] = useState({});



  const AddProduct = (event) => {
    event.preventDefault();
    let obj = {
      product_id: productID,
      quantity: productQnt,
      itemDetails,

    };
    if (obj.product_id && obj.quantity) {

      context.setPlaceOrderItem([...context.placeOrderItem, obj])
    }
    setQnt('')
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
                  className="btn btn-primary"
                  data-toggle="collapse"
                  data-target="#collapseExample-additem"
                  aria-expanded="false"
                  aria-controls="collapseExample-additem"
                >
                  Add Item(s)
          </button>

                <div className="collapse pt-3" id="collapseExample-additem">
                  <span>
                    <button
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseExample-addproduct"
                      aria-expanded="false"
                      aria-controls="collapseExample-addproduct"
                      className="btn btn-outline-secondary"
                    >
                      Add Products
              </button>
                  </span>
                  <span className="pl-2">
                    <button type="button" className="btn btn-outline-secondary">
                      Add Fee
              </button>
                  </span>
                  <span className="pl-2">
                    {" "}
                    <button type="button" className="btn btn-outline-secondary">
                      Add Shipping
              </button>
                  </span>
                </div>
                {/* product table */}
                <div className="collapse pt-3" id="collapseExample-addproduct">
                  {/* <form> */}
                  <div className="form-row">
                    <div className="form-group col-md-5">


                      <Autocomplete


                        options={

                          context.searchItem && Object.entries(context.searchItem).map((element, index) => {

                            return (
                              element[1]
                            )

                          })
                        }


                        getOptionLabel={(option) => option.name}
                        style={{ width: "100%" }}
                        renderInput={(params) => {


                          if (params.inputProps.value) {

                            if (params.inputProps.value !== searchValue || flag) {
                              context.searchItemsFn(params.inputProps.value);
                              setSearchValue(params.inputProps.value)
                              setFlag(false)
                            }

                          }

                          return <TextField {...params} label="Product" variant="outlined" />
                        }}

                        onChange={(event, value) => {

                          if (value) {
                            setID(value.id);
                            setName(value.name)
                            setItemDetails(value)
                          }

                        }}
                      />

                    </div>
                    {/* QTY */}
                    <div className="form-group col-md-2 pt-1">
                      <input
                        type="number"
                        style={{ width: "50%", height: "50px" }}
                        placeholder=" QTY"
                        min="1"
                        onChange={(e) => setQnt(e.target.value)}
                        value={productQnt}
                      />
                    </div>

                    <div className="form-group col-md-5 pl-2 pt-2">
                      <button type="button" className="btn btn-primary" onClick={AddProduct}>
                        Add Item
                  </button>
                    </div>
                  </div>
                  {/* </form> */}

                  {/* Products Table List  */}

                  <div style={{ overflowX: "auto" }}>
                    <table className="table">
                      <thead>
                        <tr>
                          {/* Item info */}
                          <th scope="col"></th>
                          <th scope="col">Item</th>
                          <th scope="col"></th>
                          <th scope="col"></th>
                          <th scope="col"></th>
                          <th scope="col"></th>

                          {/* item info end */}

                          <th scope="col">Shipment</th>
                          <th scope="col"></th>
                          <th scope="col"></th>
                          <th scope="col">Shipping Cost</th>
                          <th scope="col"></th>
                          <th scope="col"></th>
                          <th scope="col">Paid</th>
                          <th scope="col">Dues</th>
                          <th scope="col">Cost</th>
                          {/* Har product k against dalna ha ya total ma dalna ha tex */}
                          <th scope="col">Qty</th>
                          <th scope="col">Total</th>
                          <th scope="col">CA Tax</th>
                          <th scope="col">VAT</th>
                        </tr>
                      </thead>
                      <tbody style={{ fontSize: "13px" }}>
                        {
                          context.placeOrderItem ? context.placeOrderItem.map((item, index) => {
                            return <tr>
                              <td>
                                <img
                                  src={item.itemDetails ? item.itemDetails.images[0].src : null}
                                  style={{
                                    width: "40px",
                                    height: "50px",
                                  }}
                                />
                              </td>

                              <td colSpan="5">
                                {item.itemDetails.name

                                }
                                <br />
                                {'SKU: ' + item.itemDetails.sku

                                }
                              </td>
                              <td>
                                <a
                                  href="#shippingTable"
                                  data-toggle="modal"
                                  data-target="#shippingTable"
                                >
                                  <MDBIcon icon="truck" />
                                </a>
                              </td>
                              <td
                                style={{
                                  backgroundColor: "lightgreen",
                                  color: "white",
                                  width: "6rem",
                                  textAlign: "center"
                                }}
                              >
                                Not Shipped
                             <div>2-11/23/20</div>
                              </td>
                              <td></td>
                              <td></td>

                              <td>
                                <button className="btn btn-primary">Edit Cost</button>
                              </td>
                              <td></td>
                              <td></td>
                              <td>

                              </td>
                              <td>${Number(item.itemDetails.price)}</td>
                              <td>x {Number(item.quantity)}</td>
                              <td>${Number(item.itemDetails.price * item.quantity).toFixed(2)}</td>
                              <td>$200</td>
                              <td>$200</td>
                            </tr>
                          }) : null
                        }

                        {/* =======================================already added========================== */}
                        {
                          addItems ? addItems.map((item, index) => {
                            return <tr>
                              <td>
                                <img
                                  src=''
                                  style={{
                                    width: "40px",
                                    height: "50px",
                                  }}
                                />
                              </td>

                              <td colSpan="5">
                                {item.name

                                }
                                <br />
                                {'SKU: ' + item.sku

                                }
                              </td>
                              <td>
                                <a
                                  href="#shippingTable"
                                  data-toggle="modal"
                                  data-target="#shippingTable"
                                >
                                  <MDBIcon icon="truck" />
                                </a>
                              </td>
                              <td
                                style={{
                                  backgroundColor: "lightgreen",
                                  color: "white",
                                  width: "6rem",
                                  textAlign: "center"
                                }}
                              >
                                Not Shipped
                             <div>2-11/23/20</div>
                              </td>
                              <td></td>
                              <td></td>

                              <td>
                                <button className="btn btn-primary">Edit Cost</button>
                              </td>
                              <td></td>
                              <td></td>
                              <td>

                              </td>
                              <td>${Number(item.price)}</td>
                              <td>x {Number(item.quantity)}</td>
                              <td>${Number(item.price * item.quantity).toFixed(2)}</td>
                              <td>${taxLines[index] ? taxLines[index].tax_total : 0}</td>
                              <td>${taxLines[index] ? taxLines[index].shipping_tax_total : 0}</td>
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
                className="modal fade"
                id="shippingTable"
                tabIndex="-1"
                role="dialog"
                aria-labelledby="shippingTableLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="shippingTableLabel">
                        Shipping Details
                </h5>
                      <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div className="modal-body">
                      {/* shipping form start */}
                      <form>
                        <div className="form-row">
                          <div className="form-group col-md-8">
                            <label >Title</label>
                            <p>name of the product</p>
                          </div>
                          <div className="form-group col-md-2">
                            <label >Quantity</label>
                            <input type="number" style={{ width: "70%" }} disabled />
                          </div>
                          <div className="form-group col-md-2">
                            <label >Shipped</label>
                            <input type="number" style={{ width: "70%" }} />
                          </div>
                        </div>
                      </form>
                      {/* Shipping Form end */}
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-primary"
                        data-dismiss="modal"
                      >
                        Mark as Shipped
                </button>
                      <button type="button" className="btn btn-primary">
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
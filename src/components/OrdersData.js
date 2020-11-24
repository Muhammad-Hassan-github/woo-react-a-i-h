import React, {
  useReducer,
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import MyContext from "../contextApi/context";
import Pagination from "react-js-pagination";
// require("bootstrap/less/bootstrap.less");


const OrdersData = () => {

  const context = useContext(MyContext);
  const [flag2, setFlag2] = useState(true);
  const [searchValue, setSearchValue] = useState('');
  const [customerKey, setCustomerKey] = useState(null);


  let handlePageChange = (pageNumber) => {
    context.setactivePageOrder(pageNumber)
    context.searchOrder(customerKey, pageNumber)
  }

  return (

    <MyContext.Consumer>
      {(context) => {
        return (
          <>
            <div className="container">
              <h2 className="pl-5 pt-3">Orders</h2>
              <form className="pl-4">
                <div class="form-row">
                  <div class="form-group col-md-4">

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
                      style={{ width: "90%" }}
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
                        }

                      }}
                    />

                  </div>
                  <div class="form-group col-md-4 pt-2 ">
                    <button
                      style={{ border: "2px solid ", }}
                      type="button"
                      class="btn btn-outline-primary "
 
                      onClick={() => { context.searchOrder(customerKey) }}
                    >
                      <b >Apply</b>
                    </button>
                  </div>
                </div>
              </form>
              <table class="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">Order</th>
                    <th scope="col">Company</th>
                    <th scope="col">Date</th>
                    <th scope="col">Status</th>
                    <th scope="col">Total</th>
                    <th scope="col">Preorder Date</th>


                  </tr>
                </thead>
                <tbody>
                  {context.orderByCustomer && context.orderByCustomer.map((element) => {

                    return (
                      <tr>
                        <th scope="row"><a href="#">{`#${element.id} ${element.billing.first_name} ${element.billing.last_name}`}</a></th>
                        <td>{element.billing.company}</td>
                        <td>{element.date_created}</td>
                        <td>{element.status}</td>
                        <td>{element.total}</td>
                        <td></td>


                      </tr>
                    )
                  })}
                </tbody>
              </table>
              {/* pagenation */}

              <div class="pagination justify-content-end">
                <Pagination
                  itemClass="page-item"
                  linkClass="page-link"
                  activePage={context.activePageOrder}
                  itemsCountPerPage={10}
                  totalItemsCount={context.totalOrders}
                  pageRangeDisplayed={10}
                  onChange={(page) => { handlePageChange(page) }}
                />
              </div>

            </div>
          </>
        )
      }}

    </MyContext.Consumer >
  );
};

export default OrdersData;

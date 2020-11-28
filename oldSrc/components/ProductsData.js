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
    context.setactivePageProduct(pageNumber)
    context.searchProduct(searchValue, pageNumber)
  }

  return (

    <MyContext.Consumer>
      {(context) => {
        return (
          <>
            <div className="container">
              <h2 className="pl-5 pt-3">Products</h2>
              <form className="pl-4">
                <div class="form-row">
                  <div class="form-group col-md-4">

                    <input class="form-control" type="text" placeholder="Search" aria-label="Search" onChange={(e) => setSearchValue(e.target.value)} />
                  </div>
                  <div class="form-group col-md-4">
                    <button
                      style={{ border: "2px solid " }}
                      type="button"
                      class="btn btn-outline-primary"

                      onClick={() => { context.searchProduct(searchValue, null) }}
                    >
                      <b>Apply</b>
                    </button>
                  </div>
                </div>
              </form>
              <table class="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Sku</th>
                    <th scope="col">Stock</th>
                    <th scope="col">Price</th>
                    <th scope="col">Categories</th>
                    <th scope="col">Tags</th>
                    <th scope="col">Date</th>

                  </tr>
                </thead>
                <tbody>
                  {context.productByCustomer && context.productByCustomer.map((element) => {

                    return (
                      <tr>
                        <th scope="row">{element.name}</th>
                        <td>{element.sku}</td>
                        <td>{element.stock_status}</td>
                        <td>{element.price}</td>
                        <td>{element.categories[0].name}</td>
                        <td>{element.tags}</td>
                        <td>{element.date_created}</td>


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
                  activePage={context.activePageProduct}
                  itemsCountPerPage={10}
                  totalItemsCount={context.totalProducts}
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



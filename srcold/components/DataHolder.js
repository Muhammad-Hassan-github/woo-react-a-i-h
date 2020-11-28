import React, {
  useReducer,
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";
import "./Dashboard.css";
import SmallBoxes from "./SmallBoxes";
import DetailsColumn1 from "./DetailsColumn1";
import DetailsColumn2 from "./DetailsColumn2";
import DetailsColumn3 from "./DetailsColumn3";
import MyContext from "../contextApi/context";
import AddItems from '../components/AddItems';
import TotalBill from '../components/TotalBill.js'



const DataHolder = ({ orderId }) => {

  const context = useContext(MyContext);
  const [state, setState] = useState({

    name: null,
    productId: null,
    quantity: 1,
    status: null,
    customers: [],
    products: [],
    customerId: null,
    items: [],
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
    flag2: true,
    flag3: true,

    shipping_charges: 0,
    payment: "true",
    flag: true

  });
  let handleChange = (name, e) => {
    setState({ ...state, [name]: e })
  };
  useEffect(() => {
    if (orderId) {
      context.getOrderByIdFn(orderId)
    }

  }, []);
  console.log("state", state)
  let callCreateOrder = () => {

    const data = {
      payment_method: "bacs",
      payment_method_title: "Direct Bank Transfer",
      set_paid: true,
      status: state.status,
      customer_id: context.selectCustomerId,
      billing: {
        'first_name': (state.b_f_name) ? state.b_f_name : "",
        'last_name': (state.b_l_name) ? state.b_l_name : "",
        'address_1': (state.b_a_l_1) ? state.b_a_l_1 : "",
        'address_2': (state.b_a_l_2) ? state.b_a_l_2 : "",
        'city': (state.b_city) ? state.b_city : "",
        'state': (state.b_state) ? state.b_state : "",
        'postcode': (state.b_post_code) ? state.b_post_code : "",
        'country': (state.b_country) ? state.b_country : "",
        'email': (state.b_email) ? state.b_email : "example@example.com",
        'phone': (state.b_phone) ? state.b_phone : "",
        'company': (state.b_company) ? state.b_company : "",
        'transaction_id': (state.transaction_id) ? state.transaction_id : "",
      },
      shipping: {
        'first_name': (state.s_f_name) ? state.s_f_name : "",
        'last_name': (state.s_l_name) ? state.s_l_name : "",
        'address_1': (state.s_a_l_1) ? state.s_a_l_1 : "",
        'address_2': (state.s_a_l_2) ? state.s_a_l_2 : "",
        'city': (state.s_city) ? state.s_city : "",
        'state': (state.s_state) ? state.s_state : "",
        'postcode': (state.s_post_code) ? state.s_post_code : "",
        'country': (state.s_country) ? state.s_country : "",
        'company': (state.s_company) ? state.s_company : "",
        'note': (state.s_c_note) ? state.s_c_note : "",
      },
      line_items: context.placeOrderItem,
      shipping_lines: [
        {
          method_id: "flat_rate",
          method_title: "Flat Rate",
          total: "10.00"
        }
      ]
    };

    context.createOrder(data)
  }

  let callUpdateOrder = () => {

    const data = {
      payment_method: "bacs",
      payment_method_title: "Direct Bank Transfer",
      set_paid: true,
      status: state.status,
      customer_id: context.selectCustomerId,
      billing: {
        'first_name': (state.b_f_name !== null) ? state.b_f_name : (context.customerById.billing) ? context.customerById.billing.first_name : "",
        'last_name': (state.b_l_name !== null) ? state.b_l_name : (context.customerById.billing) ? context.customerById.billing.last_name : "",
        'address_1': (state.b_a_l_1 !== null) ? state.b_a_l_1 : (context.customerById.billing) ? context.customerById.billing.address_1 : "",
        'address_2': (state.b_a_l_2 !== null) ? state.b_a_l_2 : (context.customerById.billing) ? context.customerById.billing.address_2 : "",
        'city': (state.b_city !== null) ? state.b_city : (context.customerById.billing) ? context.customerById.billing.city : "",
        'state': (state.b_state !== null) ? state.b_state : (context.customerById.billing) ? context.customerById.billing.state : "",
        'postcode': (state.b_post_code !== null) ? state.b_post_code : (context.customerById.billing) ? context.customerById.billing.postcode : "",
        'country': (state.b_country !== null) ? state.b_country : (context.customerById.billing) ? context.customerById.billing.country : "",
        'email': (state.b_email !== null) ? state.b_email : (context.customerById.billing) ? context.customerById.billing.email : "",
        'phone': (state.b_phone !== null) ? state.b_phone : (context.customerById.billing) ? context.customerById.billing.phone : "",
        'company': (state.b_company !== null) ? state.b_company : (context.customerById.billing) ? context.customerById.billing.company : "",
        'transaction_id': (state.transaction_id !== null) ? state.transaction_id : (context.customerById.billing) ? context.customerById.billing.transaction_id : "",
      },
      shipping: {
        'first_name': (state.s_f_name !== null) ? state.s_f_name : (context.customerById.shipping) ? context.customerById.shipping.first_name : "",
        'last_name': (state.s_l_name !== null) ? state.s_l_name : (context.customerById.shipping) ? context.customerById.shipping.last_name : "",
        'address_1': (state.s_a_l_1 !== null) ? state.s_a_l_1 : (context.customerById.shipping) ? context.customerById.shipping.address_1 : "",
        'address_2': (state.s_a_l_2 !== null) ? state.s_a_l_2 : (context.customerById.shipping) ? context.customerById.shipping.address_2 : "",
        'city': (state.s_city !== null) ? state.s_city : (context.customerById.shipping) ? context.customerById.shipping.city : "",
        'state': (state.s_state !== null) ? state.s_state : (context.customerById.shipping) ? context.customerById.shipping.state : "",
        'postcode': (state.s_post_code !== null) ? state.s_post_code : (context.customerById.shipping) ? context.customerById.shipping.postcode : "",
        'country': (state.s_country !== null) ? state.s_country : (context.customerById.shipping) ? context.customerById.shipping.country : "",
        'company': (state.s_company !== null) ? state.s_company : (context.customerById.shipping) ? context.customerById.shipping.company : "",
        'note': (state.s_c_note !== null) ? state.s_c_note : (context.customerById.shipping) ? context.customerById.shipping.note : "",
      },
      line_items: context.placeOrderItem,
      shipping_lines: [
        {
          method_id: "flat_rate",
          method_title: "Flat Rate",
          total: "10.00"
        }
      ]
    };

    context.updateOrder(orderId, data)
    console.log("data", data)

  }

  return (
    <>
      {console.log(context.selectCustomerId)}
      <main className="dash-content">

        <div className="container-fluid">
          {/* Order Details first table */}
          <div className="row">
            <div className="col-xl-9" >
              <div
                style={{ boxShadow: "1px 2px 8px #888888" }}
                className="card easion-card"
              >
                <div className="card-header">
                  <div>
                    <b style={{ fontSize: "20px", color: "#636363" }}>
                      Order #13000492 details
                    </b>
                    <br />
                    Payment via Direct bank transfer
                  </div>
                </div>
                <div className="card-body easion-card-body-chart">
                  {/* ==================================================================== */}
                  {/* Order Details Column 1 */}
                  <div className="row">
                    <div className="col-xl-3">
                      <DetailsColumn1 propsData={{ state, handleChange }} />
                    </div>
                    {/* =========================================== */}

                    {/* Order Details Column 2 */}

                    <div style={{ marginLeft: "35px" }} className="col-xl-3">
                      <DetailsColumn2 propsData={{ state, handleChange }} />
                    </div>
                    {/* ==================================================== */}

                    {/* Order Details Column 2 */}

                    <div style={{ marginLeft: "75px" }} className="col-xl-3">
                      <DetailsColumn3 propsData={{ state, handleChange }} />
                      {/* ==================================================== */}
                    </div>
                  </div>
                </div>
              </div>
              <AddItems />
              <TotalBill orderID={orderId} />
            </div>
            {/* Small Right Side Boxes */}
            <div className="col-xl-3">
              <SmallBoxes propsData={{ callCreateOrder, callUpdateOrder, orderId }} />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default DataHolder;
